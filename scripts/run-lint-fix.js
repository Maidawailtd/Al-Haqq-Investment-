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

function runLintFix() {
  log("🔧 Starting Code Quality Fix Process", "bright")
  log("=".repeat(45), "blue")

  try {
    // ESLint fix
    log("\n🔍 Running ESLint with auto-fix...", "cyan")
    execSync("npm run lint -- --fix", { stdio: "inherit" })
    log("✅ ESLint auto-fix completed", "green")

    // Prettier format (if available)
    try {
      log("\n💅 Running Prettier formatting...", "cyan")
      execSync('npx prettier --write "**/*.{js,jsx,ts,tsx,json,css,md}"', { stdio: "inherit" })
      log("✅ Prettier formatting completed", "green")
    } catch (error) {
      log("⚠️ Prettier not available, skipping formatting", "yellow")
    }

    // Final validation
    log("\n✅ Running final validation...", "cyan")
    try {
      execSync("npm run lint", { stdio: "pipe" })
      log("✅ All code quality checks passed!", "green")
    } catch (error) {
      log("⚠️ Some issues remain, please review manually", "yellow")
    }

    log("\n🎉 Code quality fix process completed!", "bright")
  } catch (error) {
    log(`❌ Lint fix failed: ${error.message}`, "red")
    log("💡 Try running: npm run lint -- --fix manually", "cyan")
  }
}

if (require.main === module) {
  runLintFix()
}

module.exports = { runLintFix }
