---
applyTo: "**/*"
description: "Project-specific coding patterns and shared utilities for mymarketingpro-vue."
---

# Patterns and conventions

## State management

- State modules live in `src/composables`.
- Use Composition API with provide/inject for state management.
- State managed via composables and Vue's provide/inject

## API patterns

- API services live in `src/services`.
- Services in src/services/ encapsulate all API calls

## Component patterns

- Components follow Composition API pattern.
- Composition API with provide/inject for plugin-level state

## Utilities

- Shared utilities live in `src/utils`.
- Pure functions in src/utils/
