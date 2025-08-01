#!/usr/bin/env node

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
  log(`\n${description}...`, "cyan")
  try {
    const startTime = Date.now()
    const output = execSync(command, { encoding: "utf8", stdio: "pipe" })
    const duration = ((Date.now() - startTime) / 1000).toFixed(2)
    log(`✅ ${description} completed in ${duration}s`, "green")
    return { success: true, output }
  } catch (error) {
    const duration = ((Date.now() - Date.now()) / 1000).toFixed(2)
    log(`⚠️  ${description} completed with warnings in ${duration}s`, "yellow")
    return { success: false, output: error.stdout || error.message }
  }
}

function analyzeCodebase() {
  log("\n📊 Analyzing codebase...", "cyan")

  const sourceFiles = []
  const extensions = [".ts", ".tsx", ".js", ".jsx"]

  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return

    const items = fs.readdirSync(dir)

    for (const item of items) {
      const itemPath = path.join(dir, item)
      const stat = fs.statSync(itemPath)

      if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
        scanDirectory(itemPath)
      } else if (stat.isFile() && extensions.some((ext) => item.endsWith(ext))) {
        sourceFiles.push(itemPath)
      }
    }
  }
  // Scan main directories
  ;["app", "components", "lib", "hooks", "utils"].forEach((dir) => {
    scanDirectory(dir)
  })

  log(`📁 Found ${sourceFiles.length} source files`, "blue")

  // Count files by type
  const fileTypes = {}
  sourceFiles.forEach((file) => {
    const ext = path.extname(file)
    fileTypes[ext] = (fileTypes[ext] || 0) + 1
  })

  log("📋 File breakdown:", "blue")
  Object.entries(fileTypes).forEach(([ext, count]) => {
    log(`  • ${ext}: ${count} files`, "blue")
  })

  return sourceFiles
}

async function runLintFix() {
  log("🧹 Starting Code Quality Fix", "bright")
  log("=".repeat(50), "cyan")

  // Analyze codebase
  const sourceFiles = analyzeCodebase()

  if (sourceFiles.length === 0) {
    log("⚠️  No source files found to lint", "yellow")
    return false
  }

  // Run ESLint fix
  log("\n🔧 Running ESLint auto-fix...", "cyan")
  const eslintResult = runCommand("npm run lint:fix", "ESLint auto-fix")

  // Run Prettier if available
  log("\n💅 Running Prettier formatting...", "cyan")
  try {
    const prettierResult = runCommand('npx prettier --write "**/*.{ts,tsx,js,jsx,json,md,css}"', "Prettier formatting")

    if (prettierResult.success) {
      log("✅ Code formatting completed", "green")
    }
  } catch (error) {
    log("⚠️  Prettier not available or failed", "yellow")
  }

  // Run final lint check
  log("\n🔍 Running final lint check...", "cyan")
  const finalLintResult = runCommand("npm run lint", "Final lint check")

  // Summary
  log("\n📊 Code Quality Summary:", "bright")
  log("─".repeat(40), "cyan")

  if (eslintResult.success) {
    log("✅ ESLint auto-fix: Completed successfully", "green")
  } else {
    log("⚠️  ESLint auto-fix: Completed with warnings", "yellow")
  }

  if (finalLintResult.success) {
    log("✅ Final lint check: No issues found", "green")
  } else {
    log("⚠️  Final lint check: Some issues remain", "yellow")
  }

  log("\n💡 Code Quality Tips:", "bright")
  log("  • Use consistent naming conventions", "yellow")
  log("  • Add proper TypeScript types", "yellow")
  log("  • Include accessibility attributes", "yellow")
  log("  • Remove unused imports and variables", "yellow")
  log("  • Add proper error handling", "yellow")

  // Check for common issues
  log("\n🔍 Common Issues to Check:", "bright")
  log("  • Missing alt text on images", "yellow")
  log("  • Unused React hooks dependencies", "yellow")
  log("  • Console.log statements in production", "yellow")
  log("  • Missing key props in lists", "yellow")
  log("  • Improper use of any type", "yellow")

  return true
}

// Execute lint fix
runLintFix()
  .then((success) => {
    if (success) {
      log("\n🎉 Code quality fix completed!", "green")
      log("📝 Review the changes and commit when ready", "blue")
      process.exit(0)
    } else {
      log("\n❌ Code quality fix failed", "red")
      process.exit(1)
    }
  })
  .catch((error) => {
    log(`❌ Code quality fix error: ${error.message}`, "red")
    process.exit(1)
  })
