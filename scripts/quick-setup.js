const { execSync } = require("child_process")

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

function runCommand(command, description) {
  try {
    log(`\n🔄 ${description}...`, "cyan")
    execSync(command, { stdio: "inherit" })
    log(`✅ ${description} completed`, "green")
    return true
  } catch (error) {
    log(`❌ ${description} failed: ${error.message}`, "red")
    return false
  }
}

function quickSetup() {
  log("⚡ Quick Setup - Essential Commands Only", "bright")
  log("=".repeat(45), "blue")

  // Install dependencies
  runCommand("npm install", "Installing dependencies")

  // Build project
  runCommand("npm run build", "Building project")

  // Fix code quality
  runCommand("npm run lint -- --fix", "Fixing code quality issues")

  // Setup pre-commit hooks
  runCommand("node scripts/setup-pre-commit.js", "Setting up pre-commit hooks")

  log("\n🎉 Quick setup completed!", "bright")
  log("🚀 Your project is ready for development and deployment", "green")
}

if (require.main === module) {
  quickSetup()
}

module.exports = { quickSetup }
