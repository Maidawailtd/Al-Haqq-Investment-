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

function runCommand(command, description) {
  try {
    log(`\n🔄 ${description}...`, "cyan")
    execSync(command, { stdio: "inherit" })
    log(`✅ ${description} completed`, "green")
    return true
  } catch (error) {
    log(`❌ ${description} failed`, "red")
    return false
  }
}

function runProductionBuild() {
  log("🏗️ Starting Production Build Process", "bright")
  log("=".repeat(45), "blue")

  // Pre-build checks
  log("\n📋 Pre-build validation:", "yellow")

  // Type checking
  if (!runCommand("npx tsc --noEmit", "TypeScript type checking")) {
    log("⚠️ TypeScript errors found, but continuing build...", "yellow")
  }

  // ESLint checking
  if (!runCommand("npm run lint", "ESLint code quality check")) {
    log("⚠️ ESLint warnings found, but continuing build...", "yellow")
  }

  // Clean previous build
  if (fs.existsSync(".next")) {
    log("\n🧹 Cleaning previous build...", "yellow")
    execSync("rm -rf .next")
  }

  // Production build
  if (!runCommand("npm run build", "Production build")) {
    log("❌ Build failed! Check the errors above.", "red")
    process.exit(1)
  }

  // Build analysis
  log("\n📊 Build Analysis:", "yellow")
  if (fs.existsSync(".next")) {
    try {
      const stats = fs.statSync(".next")
      log(`✅ Build directory created: ${stats.size} bytes`, "green")

      // Check for static files
      if (fs.existsSync(".next/static")) {
        log("✅ Static assets generated", "green")
      }

      // Check for server files
      if (fs.existsSync(".next/server")) {
        log("✅ Server files generated", "green")
      }
    } catch (error) {
      log(`⚠️ Could not analyze build: ${error.message}`, "yellow")
    }
  }

  log("\n🎉 Production build completed successfully!", "bright")
  log("🚀 Ready for deployment", "green")
}

if (require.main === module) {
  runProductionBuild()
}

module.exports = { runProductionBuild }
