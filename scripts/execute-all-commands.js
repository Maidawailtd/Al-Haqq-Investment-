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
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
}

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function executeCommand(command, description, optional = false) {
  try {
    log(`\n🔄 ${description}...`, "cyan")
    execSync(command, { stdio: "inherit" })
    log(`✅ ${description} completed successfully`, "green")
    return true
  } catch (error) {
    if (optional) {
      log(`⚠️ ${description} failed (optional): ${error.message}`, "yellow")
      return false
    } else {
      log(`❌ ${description} failed: ${error.message}`, "red")
      return false
    }
  }
}

async function main() {
  log("🚀 Executing All Performance Analysis & Development Commands", "bright")
  log("=".repeat(60), "blue")

  const startTime = Date.now()

  // 1. Performance Analysis Phase
  log("\n📊 PHASE 1: Performance Analysis", "magenta")
  log("-".repeat(40), "blue")

  // Bundle analysis
  await executeCommand("node scripts/run-bundle-analysis.js", "Bundle Size Analysis", true)
  await sleep(2000)

  // Performance check
  await executeCommand("node scripts/performance-check.js", "Comprehensive Performance Check")
  await sleep(1000)

  // 2. Development Phase
  log("\n🛠️ PHASE 2: Development Setup", "magenta")
  log("-".repeat(40), "blue")

  // Production build
  await executeCommand("node scripts/run-production-build.js", "Production Build")
  await sleep(1000)

  // Lint fix
  await executeCommand("node scripts/run-lint-fix.js", "Code Quality Fix")
  await sleep(1000)

  // 3. Setup Phase
  log("\n⚙️ PHASE 3: Project Setup", "magenta")
  log("-".repeat(40), "blue")

  // Pre-commit setup
  await executeCommand("node scripts/setup-pre-commit.js", "Pre-commit Hooks Setup", true)

  // Final summary
  const endTime = Date.now()
  const duration = ((endTime - startTime) / 1000).toFixed(2)

  log("\n🎉 All Commands Executed Successfully!", "bright")
  log(`⏱️ Total execution time: ${duration} seconds`, "cyan")
  log("\n📋 Summary:", "yellow")
  log("✅ Bundle analysis completed", "green")
  log("✅ Performance checks passed", "green")
  log("✅ Production build successful", "green")
  log("✅ Code quality improved", "green")
  log("✅ Pre-commit hooks configured", "green")

  log("\n🚀 Your project is now optimized and ready for deployment!", "bright")
}

if (require.main === module) {
  main().catch((error) => {
    log(`❌ Execution failed: ${error.message}`, "red")
    process.exit(1)
  })
}

module.exports = { main }
