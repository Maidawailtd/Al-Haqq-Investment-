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
    execSync(command, { stdio: "inherit" })
    const duration = ((Date.now() - startTime) / 1000).toFixed(2)
    log(`✅ ${description} completed in ${duration}s`, "green")
    return true
  } catch (error) {
    log(`❌ ${description} failed: ${error.message}`, "red")
    return false
  }
}

async function analyzeBundleSize() {
  log("📊 Starting Bundle Size Analysis", "bright")
  log("=".repeat(50), "cyan")

  // Set environment variable for analysis
  process.env.ANALYZE = "true"

  // Clean previous builds
  if (fs.existsSync(".next")) {
    log("🧹 Cleaning previous build...", "yellow")
    try {
      execSync("rm -rf .next", { stdio: "pipe" })
      log("✅ Previous build cleaned", "green")
    } catch (error) {
      log("⚠️  Could not clean previous build", "yellow")
    }
  }

  // Run bundle analysis
  const success = runCommand("npm run analyze", "Bundle size analysis")

  if (success) {
    log("\n📈 Bundle Analysis Results:", "bright")

    // Check if build stats exist
    const buildManifest = path.join(".next", "build-manifest.json")
    if (fs.existsSync(buildManifest)) {
      try {
        const manifest = JSON.parse(fs.readFileSync(buildManifest, "utf8"))
        log("📦 Build manifest generated successfully", "green")

        // Log some basic stats
        const pages = Object.keys(manifest.pages || {})
        log(`📄 Pages built: ${pages.length}`, "blue")

        if (pages.length > 0) {
          log("📋 Built pages:", "blue")
          pages.slice(0, 5).forEach((page) => {
            log(`  • ${page}`, "blue")
          })
          if (pages.length > 5) {
            log(`  • ... and ${pages.length - 5} more`, "blue")
          }
        }
      } catch (error) {
        log("⚠️  Could not parse build manifest", "yellow")
      }
    }

    // Check bundle analyzer output
    const analyzeDir = path.join(".next", "analyze")
    if (fs.existsSync(analyzeDir)) {
      log("📊 Bundle analyzer reports generated in .next/analyze/", "green")
    }

    log("\n💡 Bundle Analysis Tips:", "bright")
    log("  • Check for large dependencies that could be code-split", "yellow")
    log("  • Look for duplicate packages in the bundle", "yellow")
    log("  • Consider lazy loading heavy components", "yellow")
    log("  • Review unused code that could be tree-shaken", "yellow")
  }

  return success
}

// Execute bundle analysis
analyzeBundleSize()
  .then((success) => {
    if (success) {
      log("\n🎉 Bundle analysis completed successfully!", "green")
      process.exit(0)
    } else {
      log("\n❌ Bundle analysis failed", "red")
      process.exit(1)
    }
  })
  .catch((error) => {
    log(`❌ Bundle analysis error: ${error.message}`, "red")
    process.exit(1)
  })
