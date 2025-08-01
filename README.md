# Alhagg Investment Website

A modern, responsive investment firm website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- 🔧 TypeScript for type safety
- 📱 Fully responsive design
- ♿ Accessibility optimized
- 🚀 Performance optimized with bundle analysis
- 📊 SEO friendly with sitemap generation
- 🎯 Modern UI components with shadcn/ui
- 🔍 Pre-commit hooks with Husky
- 📈 Performance monitoring with Lighthouse

## 🛠️ Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd alhagg-investment-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up development environment**
   \`\`\`bash
   node scripts/setup-pre-commit.js
   \`\`\`

4. **Configure environment variables**
   \`\`\`bash
   cp .env.example .env.local
   # Edit .env.local with your values
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open [http://localhost:3000](http://localhost:3000)**

## 📋 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Run TypeScript checks

### Performance & Analysis
- `npm run analyze` - Analyze bundle size with webpack-bundle-analyzer
- `npm run performance:audit` - Run Lighthouse performance audit
- `node scripts/performance-check.js` - Comprehensive performance analysis

### Utilities
- `npm run clean` - Clean build artifacts
- `npx next-sitemap` - Generate sitemap

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

\`\`\`env
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="Alhagg Investment"

# Performance Monitoring
ANALYZE=false

# Optional Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-google-tag-manager-id
\`\`\`

## 📊 Performance Monitoring

This project includes comprehensive performance monitoring:

### Bundle Analysis
\`\`\`bash
npm run analyze
\`\`\`
This will build your app and open the bundle analyzer to visualize your bundle size.

### Lighthouse Audits
\`\`\`bash
npm run performance:audit
\`\`\`
Runs Lighthouse performance, accessibility, SEO, and best practices audits.

### Comprehensive Performance Check
\`\`\`bash
node scripts/performance-check.js
\`\`\`
Runs all performance checks including bundle analysis, type checking, and linting.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
1. Build the application: `npm run build`
2. Start the production server: `npm run start`

## 🔍 Pre-commit Hooks

This project uses Husky for Git hooks:

- **Pre-commit**: Runs ESLint, Prettier, and TypeScript checks
- **Pre-push**: Runs build verification

To bypass hooks (not recommended):
\`\`\`bash
git commit --no-verify
\`\`\`

## 📈 Performance Targets

- **Lighthouse Performance**: > 90
- **Lighthouse Accessibility**: > 95
- **Lighthouse SEO**: > 95
- **Bundle Size**: < 500KB (warning at 500KB, error at 1MB)

## 🛡️ Security

- Security headers configured in `next.config.mjs`
- Content Security Policy ready
- XSS protection enabled
- Frame options set to DENY

## 📝 License

© 2024 Alhagg Investment. All rights reserved.
