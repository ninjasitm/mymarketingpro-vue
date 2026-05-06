---
applyTo: "**/*"
description: "Deployment configuration and commands for mymarketingpro-vue."
---

# Deployment

## Target Platform

- **Platform:** npm
- **Environment:** npm registry (public package)

## Deploy Commands

```bash
# Deploy to npm
npm publish

# Build for production
npm run build
```

## Environment Variables

| Variable        | Description        | Required |
| --------------- | ------------------ | -------- |
| `{{ENV_VAR_1}}` | {{ENV_VAR_1_DESC}} | Yes      |
| `{{ENV_VAR_2}}` | {{ENV_VAR_2_DESC}} | No       |

## CI/CD

```yaml
# .github/workflows/deploy.yml (or equivalent)
name: Publish to npm

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
          registry-url: "https://registry.npmjs.org"
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Pre-Deployment Checklist

- [ ] All tests pass
- [ ] Linting passes
- [ ] Build completes without errors
- [ ] Environment variables configured
- [ ] Database migrations applied (if applicable)
