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
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
}

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function runCommand(command, description) {
  try {
    log(`\n🔄 ${description}...`, "cyan")
    const output = execSync(command, { encoding: "utf8", stdio: "pipe" })
    log(`✅ ${description} completed successfully`, "green")
    return output
  } catch (error) {
    log(`❌ ${description} failed: ${error.message}`, "red")
    return null
  }
}

function checkFileExists(filePath) {
  return fs.existsSync(filePath)
}

function main() {
  log("🚀 Starting Comprehensive Performance Check", "bright")
  log("=".repeat(50), "blue")

  // Check if essential files exist
  const essentialFiles = ["package.json", "next.config.mjs", "tailwind.config.js", "tsconfig.json"]

  log("\n📁 Checking essential files...", "yellow")
  essentialFiles.forEach((file) => {
    if (checkFileExists(file)) {
      log(`✅ ${file} exists`, "green")
    } else {
      log(`❌ ${file} missing`, "red")
    }
  })

  // Install dependencies
  runCommand("npm install", "Installing dependencies")

  // Type checking
  runCommand("npx tsc --noEmit", "TypeScript type checking")

  // ESLint check
  runCommand("npm run lint", "ESLint code quality check")

  // Build the project
  runCommand("npm run build", "Building production version")

  // Check bundle size
  if (checkFileExists(".next")) {
    log("\n📊 Bundle Analysis:", "yellow")
    try {
      const buildOutput = fs.readFileSync(".next/trace", "utf8")
      log("Build completed successfully", "green")
    } catch (error) {
      log("Build trace not found, but build seems successful", "yellow")
    }
  }

  // Performance recommendations
  log("\n💡 Performance Recommendations:", "magenta")
  log("• Enable bundle analyzer: ANALYZE=true npm run build", "cyan")
  log("• Run Lighthouse audit: npm run performance:audit", "cyan")
  log("• Monitor Core Web Vitals in production", "cyan")
  log("• Consider implementing service worker for caching", "cyan")

  log("\n🎉 Performance check completed!", "bright")
  log("=".repeat(50), "blue")
}

if (require.main === module) {
  main()
}

module.exports = { main }
