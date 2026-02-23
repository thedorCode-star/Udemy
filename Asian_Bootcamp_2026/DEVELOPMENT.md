# Professional Development Workflow

## Overview
This project follows a professional development workflow with automated testing and CI/CD pipeline.

### Branches
- **main** - Production branch (stable releases)
- **dev** - Development branch (active development)

## Development Process

### 1. Make Changes on Dev Branch
```bash
git checkout dev
# Make your changes in the dev branch
git add .
git commit -m "Feature: add new content"
git push origin dev
```

### 2. Run Tests Locally
Before pushing, always run tests locally:
```bash
npm test                    # Run all tests in all browsers
npm run test:headed        # Run tests with visible browser
npm run test:debug         # Run tests with debugger
```

### 3. Create Pull Request
Go to GitHub and create a PR from `dev` → `main`

### 4. CI/CD Pipeline Runs Automatically
The GitHub Actions workflow will:
- ✓ Install dependencies
- ✓ Run all tests across multiple browsers (Chromium, Firefox)
- ✓ Validate HTML quality
- ✓ Generate test report
- ✓ Fail if any tests don't pass

### 5. Merge to Main
Once all checks pass, merge the PR to `main`

---

## Testing Framework: Playwright

### Running Tests
```bash
npm test                          # Run all tests
npm run test:headed               # See tests running in browser
npm run test:debug                # Debug mode
npx playwright test --ui          # UI mode (interactive)
```

### Test Files Location
All tests are in the `tests/` directory:
- `heading.spec.js` - Tests for heading elements
- `paragraph.spec.js` - Tests for paragraph elements

### Example Test Structure
```javascript
const { test, expect } = require('@playwright/test');

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/path-to-file');
    await expect(page.locator('h1')).toContainText('Expected');
  });
});
```

---

## CI/CD Pipeline

### Workflow File
`.github/workflows/ci.yml` - Automatically runs on:
- Push to `main` or `dev`
- Pull requests to `main`

### Jobs
1. **Test** - Runs Playwright tests on all browsers
2. **Lint** - Code quality checks
3. **Merge Check** - Ensures all checks pass before merge

### View Results
For each PR on GitHub:
- Check the "Checks" tab
- Download test artifacts: `playwright-report/`

---

## Commands Quick Reference
```bash
npm install              # Install dependencies (run once)
npm test                 # Run all tests
npm run dev              # Start local server on http://localhost:8000
npm run test:headed      # See tests running
npm run test:debug       # Debug tests
```

---

## Professional Best Practices

✅ **Always work on `dev` branch**
✅ **Run tests before pushing**
✅ **All tests must pass on CI/CD**
✅ **Never push directly to `main`**
✅ **Use descriptive commit messages**
✅ **Create meaningful pull requests**

---

## Need Help?
- View test report: `npm run test` generates HTML report
- Debug failing test: `npm run test:debug`
- Check GitHub Actions: https://github.com/thedorCode-star/Udemy/actions
