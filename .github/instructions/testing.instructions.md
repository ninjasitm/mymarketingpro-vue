---
applyTo: "**/*"
description: "Testing standards and conventions for mymarketingpro-vue."
---

# Testing Standards

## Commands

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
N/A (no E2E tests configured for this plugin library)
```

## Test Structure

```ts
import { describe, it, expect } from 'vitest'
import { createApp } from 'vue'
import { MyMarketingProPlugin } from '../../src'

describe('MyMarketingProPlugin', () => {
  it('installs without errors', () => {
    const app = createApp({})
    expect(() => app.use(MyMarketingProPlugin)).not.toThrow()
  })
})
```

## Test File Naming

- Unit tests: `*.test.ts`
- Integration tests: `*.integration.test.ts`
- E2E tests: `N/A`

## Test Location

- Unit tests live alongside source files or in `tests/`
- Integration tests in `tests/integration/`
- E2E tests in `N/A/`

## Coverage Requirements

- Minimum coverage: 80%
- Critical paths must have integration or E2E coverage
- New features require tests before merging
