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
    execSync(command, { stdio: "inherit" })
    log(`✅ ${description} completed`, "green")
    return true
  } catch (error) {
    log(`❌ ${description} failed`, "red")
    return false
  }
}

async function main() {
  log("🔍 Running comprehensive performance analysis...", "bright")
  log("=".repeat(50), "cyan")

  // Check if build exists
  if (!fs.existsSync(".next")) {
    log("📦 Building application first...", "yellow")
    if (!runCommand("npm run build", "Building application")) {
      process.exit(1)
    }
  }

  // Run bundle analysis
  log("\n📊 Analyzing bundle size...", "bright")
  process.env.ANALYZE = "true"
  runCommand("npm run analyze", "Bundle analysis")

  // Run type checking
  log("\n🔧 Running TypeScript checks...", "bright")
  runCommand("npm run type-check", "TypeScript validation")

  // Run linting
  log("\n🧹 Running code quality checks...", "bright")
  runCommand("npm run lint", "ESLint validation")

  // Generate sitemap
  log("\n🗺️  Generating sitemap...", "bright")
  runCommand("npx next-sitemap", "Sitemap generation")

  // Performance summary
  log("\n" + "=".repeat(50), "cyan")
  log("📈 Performance Analysis Complete!", "green")
  log("\n📋 Generated Reports:", "bright")

  if (fs.existsSync(".next/analyze")) {
    log("  📊 Bundle analysis: .next/analyze/", "blue")
  }

  if (fs.existsSync("public/sitemap.xml")) {
    log("  🗺️  Sitemap: public/sitemap.xml", "blue")
  }

  if (fs.existsSync("public/robots.txt")) {
    log("  🤖 Robots.txt: public/robots.txt", "blue")
  }

  log("\n💡 Next steps:", "bright")
  log("  1. Review bundle analysis for optimization opportunities", "yellow")
  log("  2. Run Lighthouse audit: npm run performance:audit", "yellow")
  log("  3. Deploy and monitor real-world performance", "yellow")
}

main().catch((error) => {
  log(`❌ Performance check failed: ${error.message}`, "red")
  process.exit(1)
})
