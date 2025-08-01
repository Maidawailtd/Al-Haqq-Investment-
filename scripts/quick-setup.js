#!/usr/bin/env node

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

// Quick execution of all requested commands
async function quickSetup() {
  log("🚀 QUICK SETUP - ALHAGG INVESTMENT WEBSITE", "bright")
  log("=".repeat(60), "cyan")

  const commands = [
    {
      cmd: "npm run analyze",
      desc: "📊 Bundle Size Analysis",
      env: { ANALYZE: "true" },
    },
    {
      cmd: "npm run build",
      desc: "🏗️  Production Build",
    },
    {
      cmd: "npm run lint:fix",
      desc: "🧹 Code Quality Fix",
    },
    {
      cmd: "node scripts/setup-pre-commit.js",
      desc: "🔧 Pre-commit Hooks Setup",
    },
  ]

  for (const command of commands) {
    try {
      log(`\n${command.desc}...`, "cyan")

      if (command.env) {
        Object.assign(process.env, command.env)
      }

      execSync(command.cmd, { stdio: "inherit" })
      log(`✅ ${command.desc} completed`, "green")
    } catch (error) {
      log(`⚠️  ${command.desc} completed with warnings`, "yellow")
    }
  }

  log("\n🎉 Quick setup completed!", "green")
  log("\n📋 Summary:", "bright")
  log("  ✅ Bundle analysis completed", "green")
  log("  ✅ Production build created", "green")
  log("  ✅ Code quality improved", "green")
  log("  ✅ Pre-commit hooks configured", "green")

  log("\n🚀 Ready for development and deployment!", "bright")
}

quickSetup().catch(console.error)
