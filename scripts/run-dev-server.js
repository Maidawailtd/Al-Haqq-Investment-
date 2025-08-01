#!/usr/bin/env node

const { spawn } = require("child_process")
const fs = require("fs")

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

function startDevServer() {
  log("🚀 Starting Development Server", "bright")
  log("=".repeat(50), "cyan")

  // Check if package.json exists
  if (!fs.existsSync("package.json")) {
    log("❌ package.json not found. Are you in the right directory?", "red")
    process.exit(1)
  }

  // Check if node_modules exists
  if (!fs.existsSync("node_modules")) {
    log("📦 node_modules not found. Installing dependencies...", "yellow")
    try {
      require("child_process").execSync("npm install", { stdio: "inherit" })
      log("✅ Dependencies installed", "green")
    } catch (error) {
      log("❌ Failed to install dependencies", "red")
      process.exit(1)
    }
  }

  log("🌐 Starting Next.js development server...", "cyan")
  log("📍 Server will be available at: http://localhost:3000", "blue")
  log("⚡ Hot reload enabled for instant updates", "blue")
  log("🔧 TypeScript and ESLint checking enabled", "blue")

  log("\n💡 Development Tips:", "bright")
  log("  • Press Ctrl+C to stop the server", "yellow")
  log("  • Changes will auto-reload in the browser", "yellow")
  log("  • Check console for build errors and warnings", "yellow")
  log("  • Use React DevTools for debugging", "yellow")

  log("\n" + "─".repeat(50), "cyan")

  // Start the development server
  const devServer = spawn("npm", ["run", "dev"], {
    stdio: "inherit",
    shell: true,
  })

  // Handle server exit
  devServer.on("close", (code) => {
    if (code === 0) {
      log("\n✅ Development server stopped gracefully", "green")
    } else {
      log(`\n❌ Development server exited with code ${code}`, "red")
    }
  })

  // Handle process termination
  process.on("SIGINT", () => {
    log("\n🛑 Stopping development server...", "yellow")
    devServer.kill("SIGINT")
  })

  process.on("SIGTERM", () => {
    log("\n🛑 Stopping development server...", "yellow")
    devServer.kill("SIGTERM")
  })
}

// Start development server
startDevServer()
