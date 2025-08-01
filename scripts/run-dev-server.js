const { spawn } = require("child_process")
const fs = require("fs")

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
}

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function runDevServer() {
  log("🚀 Starting Development Server with Monitoring", "bright")
  log("=".repeat(50), "cyan")

  // Check if package.json exists
  if (!fs.existsSync("package.json")) {
    log("❌ package.json not found!", "red")
    process.exit(1)
  }

  log("\n📊 Development server features:", "yellow")
  log("• Hot Module Replacement (HMR)", "cyan")
  log("• TypeScript checking", "cyan")
  log("• ESLint integration", "cyan")
  log("• Performance monitoring", "cyan")

  // Start development server
  const devProcess = spawn("npm", ["run", "dev"], {
    stdio: "inherit",
    env: { ...process.env, NODE_ENV: "development" },
  })

  devProcess.on("error", (error) => {
    log(`❌ Failed to start dev server: ${error.message}`, "red")
  })

  devProcess.on("close", (code) => {
    log(`\n🛑 Dev server stopped with code ${code}`, "yellow")
  })

  // Handle graceful shutdown
  process.on("SIGINT", () => {
    log("\n🛑 Shutting down dev server...", "yellow")
    devProcess.kill("SIGTERM")
    process.exit(0)
  })
}

if (require.main === module) {
  runDevServer()
}

module.exports = { runDevServer }
