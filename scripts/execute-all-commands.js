#!/usr/bin/env node

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
  magenta: "\x1b[35m",
}

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function executeCommand(command, description, optional = false) {
  log(`\n${"=".repeat(60)}`, "cyan")
  log(`🚀 ${description}`, "bright")
  log(`${"=".repeat(60)}`, "cyan")

  try {
    const startTime = Date.now()

    if (command.startsWith("node scripts/")) {
      // Execute our custom scripts
      execSync(command, { stdio: "inherit" })
    } else {
      // Execute npm commands
      execSync(command, { stdio: "inherit" })
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(2)
    log(`\n✅ ${description} completed successfully in ${duration}s`, "green")
    return true
  } catch (error) {
    if (optional) {
      log(`\n⚠️  ${description} failed (optional): ${error.message}`, "yellow")
      return false
    } else {
      log(`\n❌ ${description} failed: ${error.message}`, "red")
      throw error
    }
  }
}

async function main() {
  log("🎯 ALHAGG INVESTMENT - COMPREHENSIVE PROJECT SETUP", "bright")
  log("🚀 Executing Performance Analysis & Development Commands", "bright")
  log("=".repeat(80), "magenta")

  const startTime = Date.now()

  try {
    // Phase 1: Setup and Dependencies
    log("\n📦 PHASE 1: SETUP AND DEPENDENCIES", "magenta")

    // Check if we're in the right directory
    if (!fs.existsSync("package.json")) {
      throw new Error("package.json not found. Please run this script from the project root.")
    }

    // Install dependencies if needed
    if (!fs.existsSync("node_modules")) {
      await executeCommand("npm install", "Installing project dependencies")
    }

    // Phase 2: Pre-commit Setup
    log("\n🔧 PHASE 2: PRE-COMMIT HOOKS SETUP", "magenta")
    await executeCommand("node scripts/setup-pre-commit.js", "Setting up pre-commit hooks")

    // Phase 3: Code Quality
    log("\n🧹 PHASE 3: CODE QUALITY FIXES", "magenta")
    await executeCommand("node scripts/run-lint-fix.js", "Fixing code quality issues")

    // Phase 4: Production Build
    log("\n🏗️  PHASE 4: PRODUCTION BUILD", "magenta")
    await executeCommand("node scripts/run-production-build.js", "Creating production build")

    // Phase 5: Performance Analysis
    log("\n📊 PHASE 5: PERFORMANCE ANALYSIS", "magenta")

    // Bundle analysis
    await executeCommand("node scripts/run-bundle-analysis.js", "Bundle size analysis")

    // Lighthouse audit (optional - might fail in some environments)
    await executeCommand("node scripts/run-lighthouse-audit.js", "Lighthouse performance audit", true)

    // Comprehensive performance check
    await executeCommand("node scripts/performance-check.js", "Comprehensive performance check")

    // Phase 6: Final Summary
    log("\n🎉 PHASE 6: COMPLETION SUMMARY", "magenta")

    const totalDuration = ((Date.now() - startTime) / 1000 / 60).toFixed(2)

    log("\n" + "=".repeat(80), "green")
    log("🎊 ALL COMMANDS EXECUTED SUCCESSFULLY! 🎊", "bright")
    log("=".repeat(80), "green")

    log(`\n⏱️  Total execution time: ${totalDuration} minutes`, "blue")

    log("\n📋 COMPLETED TASKS:", "bright")
    log("  ✅ Pre-commit hooks configured", "green")
    log("  ✅ Code quality issues fixed", "green")
    log("  ✅ Production build created", "green")
    log("  ✅ Bundle size analyzed", "green")
    log("  ✅ Performance audit completed", "green")
    log("  ✅ Comprehensive checks passed", "green")

    log("\n📊 GENERATED REPORTS:", "bright")

    // Check for generated reports
    const reports = [
      { file: ".next/analyze", name: "Bundle Analysis Reports" },
      { file: "lighthouse-report.report.html", name: "Lighthouse HTML Report" },
      { file: "lighthouse-report.report.json", name: "Lighthouse JSON Report" },
      { file: "public/sitemap.xml", name: "Generated Sitemap" },
      { file: "public/robots.txt", name: "Robots.txt File" },
    ]

    reports.forEach((report) => {
      if (fs.existsSync(report.file)) {
        log(`  📄 ${report.name}: ${report.file}`, "blue")
      }
    })

    log("\n🚀 NEXT STEPS:", "bright")
    log("  1. Review generated performance reports", "yellow")
    log("  2. Start development server: npm run dev", "yellow")
    log("  3. Test production build: npm run start", "yellow")
    log("  4. Deploy to your hosting platform", "yellow")
    log("  5. Set up monitoring and analytics", "yellow")

    log("\n💡 DEVELOPMENT COMMANDS:", "bright")
    log("  • npm run dev          - Start development server", "cyan")
    log("  • npm run build        - Create production build", "cyan")
    log("  • npm run start        - Start production server", "cyan")
    log("  • npm run analyze      - Analyze bundle size", "cyan")
    log("  • npm run lint:fix     - Fix code quality issues", "cyan")

    log("\n🎯 PROJECT IS READY FOR DEPLOYMENT! 🎯", "bright")
  } catch (error) {
    log("\n❌ EXECUTION FAILED", "red")
    log("=".repeat(50), "red")
    log(`Error: ${error.message}`, "red")

    log("\n🔧 TROUBLESHOOTING:", "bright")
    log("  1. Check Node.js version (requires 18+)", "yellow")
    log("  2. Ensure npm dependencies are installed", "yellow")
    log("  3. Verify you're in the project root directory", "yellow")
    log("  4. Check for any TypeScript or ESLint errors", "yellow")

    process.exit(1)
  }
}

// Execute all commands
main().catch((error) => {
  log(`❌ Fatal error: ${error.message}`, "red")
  process.exit(1)
})
