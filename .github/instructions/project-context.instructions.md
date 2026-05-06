---
applyTo: "**/*"
description: "Project architecture and data flow for mymarketingpro-vue."
---

# mymarketingpro-vue architecture

- **Framework:** Vue 3
- **Language:** TypeScript
- Entry point: src/index.ts

## Directory structure

- `src/components/` - UI components
- `src/pages/` - Page components/routes
- `src/services/` - API and business logic
- `src/stores/` - State management
- `src/types/` - TypeScript definitions

## Data flow

- Components → Composables → Services → API

## Authentication

- Authentication via apiKey plugin option passed to services

## API integration

- Integrates with MyMarketingPro REST API via fetch
