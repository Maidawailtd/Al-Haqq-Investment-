#!/usr/bin/env node

const { execSync, spawn } = require("child_process")
const fs = require("fs")
const path = require("path")

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
}

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function runLighthouseAudit() {
  log("🚀 Starting Lighthouse Performance Audit", "bright")
  log("=".repeat(50), "cyan")

  // Check if production build exists
  if (!fs.existsSync(".next")) {
    log("📦 No production build found. Building first...", "yellow")
    try {
      execSync("npm run build", { stdio: "inherit" })
      log("✅ Production build completed", "green")
    } catch (error) {
      log("❌ Production build failed", "red")
      return false
    }
  }

  // Start the production server
  log("\n🌐 Starting production server...", "cyan")
  const server = spawn("npm", ["run", "start"], {
    stdio: "pipe",
    detached: false,
  })

  let serverReady = false
  let serverOutput = ""

  server.stdout.on("data", (data) => {
    const output = data.toString()
    serverOutput += output
    if (output.includes("ready on") || output.includes("Local:")) {
      serverReady = true
    }
  })

  server.stderr.on("data", (data) => {
    const output = data.toString()
    if (output.includes("ready on") || output.includes("Local:")) {
      serverReady = true
    }
  })

  // Wait for server to be ready
  let attempts = 0
  const maxAttempts = 30

  while (!serverReady && attempts < maxAttempts) {
    await sleep(1000)
    attempts++
    process.stdout.write(".")
  }

  if (!serverReady) {
    log("\n❌ Server failed to start within 30 seconds", "red")
    server.kill()
    return false
  }

  log("\n✅ Production server is ready", "green")

  // Wait a bit more for server to fully initialize
  await sleep(2000)

  try {
    // Run Lighthouse audit
    log("\n🔍 Running Lighthouse audit...", "cyan")

    const lighthouseCommand = `npx lighthouse http://localhost:3000 \
      --output=html \
      --output=json \
      --output-path=./lighthouse-report \
      --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage" \
      --quiet`

    execSync(lighthouseCommand, { stdio: "inherit" })

    log("✅ Lighthouse audit completed", "green")

    // Parse and display results
    const reportPath = "./lighthouse-report.report.json"
    if (fs.existsSync(reportPath)) {
      try {
        const report = JSON.parse(fs.readFileSync(reportPath, "utf8"))
        const categories = report.categories

        log("\n📊 Lighthouse Scores:", "bright")
        log("─".repeat(40), "cyan")

        Object.entries(categories).forEach(([key, category]) => {
          const score = Math.round(category.score * 100)
          const emoji = score >= 90 ? "🟢" : score >= 50 ? "🟡" : "🔴"
          const color = score >= 90 ? "green" : score >= 50 ? "yellow" : "red"

          log(`${emoji} ${category.title}: ${score}/100`, color)
        })

        // Performance metrics
        if (report.audits) {
          log("\n⚡ Core Web Vitals:", "bright")
          log("─".repeat(40), "cyan")

          const metrics = {
            "largest-contentful-paint": "Largest Contentful Paint",
            "first-input-delay": "First Input Delay",
            "cumulative-layout-shift": "Cumulative Layout Shift",
            "first-contentful-paint": "First Contentful Paint",
            "speed-index": "Speed Index",
          }

          Object.entries(metrics).forEach(([key, name]) => {
            const audit = report.audits[key]
            if (audit && audit.displayValue) {
              const score = audit.score ? Math.round(audit.score * 100) : "N/A"
              const emoji = audit.score >= 0.9 ? "🟢" : audit.score >= 0.5 ? "🟡" : "🔴"
              log(`${emoji} ${name}: ${audit.displayValue} (${score}/100)`, "blue")
            }
          })
        }

        log("\n📄 Reports generated:", "bright")
        log("  • HTML Report: lighthouse-report.report.html", "blue")
        log("  • JSON Report: lighthouse-report.report.json", "blue")
      } catch (error) {
        log("⚠️  Could not parse Lighthouse report", "yellow")
      }
    }

    return true
  } catch (error) {
    log(`❌ Lighthouse audit failed: ${error.message}`, "red")
    return false
  } finally {
    // Clean up server
    log("\n🛑 Stopping production server...", "cyan")
    server.kill()
    await sleep(1000)
    log("✅ Server stopped", "green")
  }
}

// Execute Lighthouse audit
runLighthouseAudit()
  .then((success) => {
    if (success) {
      log("\n🎉 Lighthouse audit completed successfully!", "green")
      log("\n💡 Performance Tips:", "bright")
      log("  • Optimize images with next/image", "yellow")
      log("  • Use dynamic imports for code splitting", "yellow")
      log("  • Minimize unused JavaScript", "yellow")
      log("  • Optimize fonts and CSS", "yellow")
      process.exit(0)
    } else {
      log("\n❌ Lighthouse audit failed", "red")
      process.exit(1)
    }
  })
  .catch((error) => {
    log(`❌ Lighthouse audit error: ${error.message}`, "red")
    process.exit(1)
  })
