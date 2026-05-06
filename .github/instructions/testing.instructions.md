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
{{TEST_COVERAGE_COMMAND}}

# Run E2E tests
{{E2E_TEST_COMMAND}}
```

## Test Structure

```ts
{{TEST_EXAMPLE}}
```

## Test File Naming

- Unit tests: `{{TEST_FILE_PATTERN}}`
- Integration tests: `{{INTEGRATION_TEST_PATTERN}}`
- E2E tests: `{{E2E_TEST_PATTERN}}`

## Test Location

- Unit tests live alongside source files or in `tests/`
- Integration tests in `{{INTEGRATION_TEST_DIR}}/`
- E2E tests in `{{E2E_TEST_DIR}}/`

## Coverage Requirements

- Minimum coverage: {{COVERAGE_THRESHOLD}}
- Critical paths must have integration or E2E coverage
- New features require tests before merging
