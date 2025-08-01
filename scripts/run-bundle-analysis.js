const { execSync } = require("child_process")
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

function runBundleAnalysis() {
  log("📊 Starting Bundle Size Analysis", "bright")
  log("=".repeat(40), "blue")

  try {
    // Clean previous builds
    log("\n🧹 Cleaning previous builds...", "yellow")
    if (fs.existsSync(".next")) {
      execSync("rm -rf .next", { stdio: "inherit" })
    }

    // Set environment variable for analysis
    process.env.ANALYZE = "true"

    // Run build with bundle analyzer
    log("\n🔍 Running build with bundle analyzer...", "cyan")
    execSync("npm run build", {
      stdio: "inherit",
      env: { ...process.env, ANALYZE: "true" },
    })

    log("\n✅ Bundle analysis completed!", "green")
    log("📈 Check the opened browser tabs for detailed analysis", "cyan")
  } catch (error) {
    log(`❌ Bundle analysis failed: ${error.message}`, "red")
    process.exit(1)
  }
}

if (require.main === module) {
  runBundleAnalysis()
}

module.exports = { runBundleAnalysis }
