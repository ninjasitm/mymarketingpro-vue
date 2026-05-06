---
applyTo: "**/*"
description: "Coding standards, patterns, and conventions for mymarketingpro-vue."
---

# Coding Standards

## Primary Pattern: Composition API Plugin

```ts
useMyMarketingPro() composable
```

**Rules:**

- {{CODING_RULE_1}}
- {{CODING_RULE_2}}
- {{CODING_RULE_3}}

## Data Access Pattern

```ts
Service layer in src/services/
```

## API / Route Pattern

```ts
Service class pattern
```

## Naming Conventions

- Files: kebab-case for files, PascalCase for Vue components
- Components: PascalCase (e.g., MmpButton.vue)
- Functions: camelCase
- Variables: camelCase

## Code Quality

- Follow Vue 3 and TypeScript best practices
- Run linting before committing: `npm run lint`
- Format code consistently: `npm run format`
