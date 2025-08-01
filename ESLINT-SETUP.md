# ESLint Pre-commit Hook Setup

This project uses ESLint with Husky and lint-staged to ensure code quality by automatically running linters before commits.

## How it works

When you attempt to commit changes, the pre-commit hook will:

1. Run ESLint on your staged files
2. Block the commit if there are any ESLint errors
3. Allow the commit if all checks pass

## Manual Commands

You can also run these checks manually:

\`\`\`bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically where possible
npm run lint:fix
\`\`\`

## Bypassing the pre-commit hook

In rare cases where you need to bypass the pre-commit hook (not recommended):

\`\`\`bash
git commit -m "Your commit message" --no-verify
\`\`\`

## Troubleshooting

If you encounter issues with the pre-commit hook:

1. Make sure Husky is installed: `npm run prepare`
2. Check if the hook is executable: `chmod +x .husky/pre-commit`
3. Verify your ESLint configuration: `.eslintrc.json`
