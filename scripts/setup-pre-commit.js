import { execSync } from "child_process"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
  log(`\n${description}...`, "cyan")
  try {
    const output = execSync(command, { encoding: "utf8", stdio: "pipe" })
    log(`✅ ${description} completed successfully`, "green")
    return { success: true, output }
  } catch (error) {
    log(`❌ Error: ${description} failed`, "red")
    log(`Command: ${command}`, "yellow")
    log(`Error: ${error.message}`, "red")
    return { success: false, error: error.message }
  }
}

function createFile(filePath, content, description) {
  try {
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    fs.writeFileSync(filePath, content)
    log(`✅ ${description} created successfully`, "green")
    return true
  } catch (error) {
    log(`❌ Error creating ${description}: ${error.message}`, "red")
    return false
  }
}

function updatePackageJson() {
  log("\nUpdating package.json...", "cyan")
  try {
    const packageJsonPath = path.resolve("./package.json")
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))

    // Ensure required scripts exist
    const requiredScripts = {
      prepare: "husky install",
      lint: "next lint",
      "lint:fix": "next lint --fix",
      "type-check": "tsc --noEmit",
      analyze: "cross-env ANALYZE=true next build",
      "performance:audit": "lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html",
    }

    packageJson.scripts = {
      ...packageJson.scripts,
      ...requiredScripts,
    }

    // Add lint-staged configuration
    packageJson["lint-staged"] = {
      "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
      "*.{json,md,css}": ["prettier --write"],
    }

    // Add engines for Node.js version requirements
    packageJson.engines = {
      node: ">=18.0.0",
      npm: ">=8.0.0",
    }

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
    log("✅ package.json updated successfully", "green")
    return true
  } catch (error) {
    log(`❌ Failed to update package.json: ${error.message}`, "red")
    return false
  }
}

function createHuskyHooks() {
  log("\nSetting up Husky hooks...", "cyan")

  // Create .husky directory if it doesn't exist
  const huskyDir = path.resolve(".husky")
  if (!fs.existsSync(huskyDir)) {
    fs.mkdirSync(huskyDir, { recursive: true })
  }

  // Pre-commit hook
  const preCommitHook = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Running pre-commit checks..."

# Run lint-staged
npx lint-staged

# Run type checking
echo "🔧 Running TypeScript checks..."
npm run type-check

echo "✅ Pre-commit checks passed!"
`

  // Pre-push hook
  const prePushHook = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🚀 Running pre-push checks..."

# Run build to ensure everything compiles
echo "🏗️  Running build check..."
npm run build

echo "✅ Pre-push checks passed!"
`

  createFile(path.join(huskyDir, "pre-commit"), preCommitHook, "Pre-commit hook")
  createFile(path.join(huskyDir, "pre-push"), prePushHook, "Pre-push hook")

  // Make hooks executable
  try {
    execSync("chmod +x .husky/pre-commit")
    execSync("chmod +x .husky/pre-push")
    log("✅ Husky hooks made executable", "green")
  } catch (error) {
    log(`⚠️  Warning: Could not make hooks executable: ${error.message}`, "yellow")
  }
}

function createConfigFiles() {
  log("\nCreating configuration files...", "cyan")

  // ESLint configuration
  const eslintConfig = {
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "react/display-name": "off",
      "react-hooks/exhaustive-deps": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  }

  // Prettier configuration
  const prettierConfig = `/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 100,
  plugins: ["prettier-plugin-tailwindcss"],
}
`

  // Lint-staged configuration
  const lintStagedConfig = `const path = require("path")

const buildEslintCommand = (filenames) =>
  \`next lint --fix --file \${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}\`

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
  "*.{json,md,css}": ["prettier --write"],
}
`

  // Environment variables template
  const envExample = `# Site Configuration
NEXT_PUBLIC_SITE_URL=https://alhagg-investment.vercel.app
NEXT_PUBLIC_SITE_NAME="Alhagg Investment"

# Performance Monitoring
ANALYZE=false

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=

# Contact Form (Optional)
CONTACT_EMAIL=contact@alhagg-investment.com

# Development
NODE_ENV=development
`

  // Lighthouse CI configuration
  const lighthouseConfig = {
    ci: {
      collect: {
        url: ["http://localhost:3000"],
        startServerCommand: "npm run start",
        startServerReadyPattern: "ready on",
      },
      assert: {
        assertions: {
          "categories:performance": ["warn", { minScore: 0.9 }],
          "categories:accessibility": ["error", { minScore: 0.9 }],
          "categories:best-practices": ["warn", { minScore: 0.9 }],
          "categories:seo": ["error", { minScore: 0.9 }],
        },
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  }

  // Next.js sitemap configuration
  const sitemapConfig = `/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://alhagg-investment.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
`

  createFile(".eslintrc.json", JSON.stringify(eslintConfig, null, 2), "ESLint configuration")
  createFile("prettier.config.js", prettierConfig, "Prettier configuration")
  createFile(".lintstagedrc.js", lintStagedConfig, "Lint-staged configuration")
  createFile(".env.example", envExample, "Environment variables example")
  createFile("lighthouserc.json", JSON.stringify(lighthouseConfig, null, 2), "Lighthouse CI configuration")
  createFile("next-sitemap.config.js", sitemapConfig, "Next.js sitemap configuration")
}

function createPerformanceMonitoringScript() {
  const performanceScript = `#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')

console.log('🔍 Running performance analysis...')

// Set environment variable for bundle analysis
process.env.ANALYZE = 'true'

try {
  // Run bundle analysis
  console.log('📊 Analyzing bundle size...')
  execSync('npm run analyze', { stdio: 'inherit' })
  
  // Run Lighthouse audit if available
  if (fs.existsSync('node_modules/.bin/lighthouse')) {
    console.log('🚀 Running Lighthouse audit...')
    execSync('npm run performance:audit', { stdio: 'inherit' })
  }
  
  console.log('✅ Performance analysis completed!')
  console.log('📈 Check the generated reports for insights.')
  
} catch (error) {
  console.error('❌ Performance analysis failed:', error.message)
  process.exit(1)
}
`

  createFile("scripts/performance-check.js", performanceScript, "Performance monitoring script")

  // Make script executable
  try {
    execSync("chmod +x scripts/performance-check.js")
  } catch (error) {
    log(`⚠️  Warning: Could not make performance script executable: ${error.message}`, "yellow")
  }
}

// Main execution
async function main() {
  log("🚀 Setting up Alhagg Investment Website Development Environment", "bright")
  log("=".repeat(60), "cyan")

  // Check Node.js version
  const nodeVersion = process.version
  log(`Node.js version: ${nodeVersion}`, "blue")

  if (Number.parseInt(nodeVersion.slice(1)) < 18) {
    log("❌ Node.js 18 or higher is required", "red")
    process.exit(1)
  }

  // Install dependencies
  const installResult = runCommand(
    "npm install --save-dev husky lint-staged @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier prettier-plugin-tailwindcss @next/bundle-analyzer cross-env @lhci/cli lighthouse next-sitemap @svgr/webpack",
    "Installing development dependencies",
  )

  if (!installResult.success) {
    log("❌ Failed to install dependencies. Please check your npm configuration.", "red")
    process.exit(1)
  }

  // Update package.json
  if (!updatePackageJson()) {
    process.exit(1)
  }

  // Initialize Husky
  const huskyResult = runCommand("npx husky install", "Initializing Husky")
  if (!huskyResult.success) {
    log("❌ Failed to initialize Husky", "red")
    process.exit(1)
  }

  // Create Husky hooks
  createHuskyHooks()

  // Create configuration files
  createConfigFiles()

  // Create performance monitoring script
  createPerformanceMonitoringScript()

  // Final setup
  runCommand("npm run prepare", "Running prepare script")

  log("\n" + "=".repeat(60), "cyan")
  log("🎉 Setup completed successfully!", "green")
  log("\n📋 What was configured:", "bright")
  log("  ✅ Husky pre-commit and pre-push hooks", "green")
  log("  ✅ ESLint and Prettier configuration", "green")
  log("  ✅ TypeScript checking in hooks", "green")
  log("  ✅ Bundle analyzer integration", "green")
  log("  ✅ Performance monitoring tools", "green")
  log("  ✅ Lighthouse CI configuration", "green")
  log("  ✅ Sitemap generation", "green")

  log("\n🚀 Available commands:", "bright")
  log("  npm run analyze          - Analyze bundle size", "blue")
  log("  npm run lint:fix         - Fix linting issues", "blue")
  log("  npm run type-check       - Check TypeScript", "blue")
  log("  npm run performance:audit - Run Lighthouse audit", "blue")
  log("  node scripts/performance-check.js - Full performance check", "blue")

  log("\n💡 Next steps:", "bright")
  log("  1. Set NEXT_PUBLIC_SITE_URL in your environment", "yellow")
  log('  2. Run "npm run build" to test production build', "yellow")
  log('  3. Run "npm run analyze" to check bundle size', "yellow")
  log("  4. Commit your changes to test the hooks", "yellow")

  log("\n🎯 Your development environment is ready!", "green")
}

main().catch((error) => {
  log(`❌ Setup failed: ${error.message}`, "red")
  process.exit(1)
})
