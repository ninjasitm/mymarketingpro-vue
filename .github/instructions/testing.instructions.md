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
{{E2E_TEST_COMMAND}}
```

## Test Structure

```ts
{{TEST_EXAMPLE}}
```

## Test File Naming

- Unit tests: `*.test.ts`
- Integration tests: `*.integration.test.ts`
- E2E tests: `{{E2E_TEST_PATTERN}}`

## Test Location

- Unit tests live alongside source files or in `tests/`
- Integration tests in `tests/integration/`
- E2E tests in `{{E2E_TEST_DIR}}/`

## Coverage Requirements

- Minimum coverage: 80%
- Critical paths must have integration or E2E coverage
- New features require tests before merging
