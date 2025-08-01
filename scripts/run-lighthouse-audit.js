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
  log("🏮 Starting Lighthouse Performance Audit", "bright")
  log("=".repeat(45), "blue")

  let serverProcess = null

  try {
    // Build the project first
    log("\n🔨 Building project for production...", "yellow")
    execSync("npm run build", { stdio: "inherit" })

    // Start the production server
    log("\n🚀 Starting production server...", "cyan")
    serverProcess = spawn("npm", ["start"], {
      stdio: "pipe",
      detached: false,
    })

    // Wait for server to start
    log("⏳ Waiting for server to start...", "yellow")
    await sleep(5000)

    // Check if Lighthouse is installed
    try {
      execSync("lighthouse --version", { stdio: "pipe" })
    } catch (error) {
      log("📦 Installing Lighthouse CLI...", "yellow")
      execSync("npm install -g lighthouse", { stdio: "inherit" })
    }

    // Run Lighthouse audit
    log("\n🔍 Running Lighthouse audit...", "cyan")
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
    const reportPath = `lighthouse-report-${timestamp}.html`

    execSync(`lighthouse http://localhost:3000 --output=html --output-path=${reportPath} --chrome-flags="--headless"`, {
      stdio: "inherit",
    })

    log(`\n✅ Lighthouse audit completed!`, "green")
    log(`📊 Report saved as: ${reportPath}`, "cyan")
  } catch (error) {
    log(`❌ Lighthouse audit failed: ${error.message}`, "red")
  } finally {
    // Clean up server process
    if (serverProcess) {
      log("\n🛑 Stopping server...", "yellow")
      serverProcess.kill("SIGTERM")
    }
  }
}

if (require.main === module) {
  runLighthouseAudit()
}

module.exports = { runLighthouseAudit }
