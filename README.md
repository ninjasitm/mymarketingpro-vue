# mymarketingpro-vue

Vue 3 plugin for MyMarketingPro.com — provides components, composables, and utilities for integrating with the MyMarketingPro platform API.

## Tech Stack

- **Framework:** Vue 3
- **Language:** TypeScript
- **Styling:** CSS / SCSS
- **Package Manager:** npm

## Installation

```bash
npm install mymarketingpro-vue
```

## Usage

### Vue 3

```typescript
import { createApp } from 'vue'
import { createMyMarketingPro } from 'mymarketingpro-vue'
import App from './App.vue'

const app = createApp(App)

app.use(createMyMarketingPro({
  baseUrl: 'https://api.mymarketingpro.com',
  apiKey: 'your-api-key',
}))

app.mount('#app')
```

### Nuxt

Register the plugin in `nuxt.config.ts`:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  plugins: ['mymarketingpro-vue/nuxt'],

  runtimeConfig: {
    // Server-side only (private)
    mmpApiKey: process.env.MMP_API_KEY,

    public: {
      // Exposed to the client
      mmpBaseUrl: process.env.MMP_BASE_URL,
      mmpLocale: process.env.MMP_LOCALE,
    },
  },
})
```

| Runtime config key              | Visibility     | Description                     |
| ------------------------------- | -------------- | ------------------------------- |
| `runtimeConfig.mmpApiKey`       | Server-side    | Private API key                 |
| `runtimeConfig.public.mmpBaseUrl` | Client + Server | Base URL for the MMP API      |
| `runtimeConfig.public.mmpLocale` | Client + Server | Default locale (e.g. `en-US`) |

All keys are optional — omit any that are not needed.

## Project Structure

```
mymarketingpro-vue/
├── src/
│   ├── index.ts           # Vue plugin entry point
│   ├── nuxt.ts            # Nuxt plugin entry point
│   ├── plugin.ts          # Vue plugin definition
│   ├── components/        # Vue components
│   ├── composables/       # Vue composables (useXxx)
│   ├── services/          # API service layer
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── tests/
│   └── unit/              # Unit tests (Vitest)
├── docs/
│   ├── api/               # API documentation
│   ├── architecture/      # Architecture decision records
│   ├── features/          # Feature specs and plans
│   └── fixes/             # Fix logs
├── .cursor/               # Cursor IDE configuration
├── .github/               # GitHub Copilot configuration
└── package.json
```

## Scripts

| Command              | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start development server |
| `npm run build`      | Build for production     |
| `npm run test`       | Run tests                |
| `npm run lint`       | Run linter               |

## Development

See the following files for AI-assisted development:

- [AGENTS.md](AGENTS.md) - AI agent context
- [.cursor/rules/](.cursor/rules/) - Cursor IDE rules
- [.github/copilot-instructions.md](.github/copilot-instructions.md) - GitHub Copilot instructions

## AI Instructions and Commands

This repository includes AI instruction files to standardize development workflows across tools. The `.cursor/` and `.github/` folders define how AI assistants should analyze, plan, implement, and review changes.

### Planning

- `/specify` — Create or refine a feature specification.
- `/plan` — Produce an implementation plan with steps and dependencies.
- `/tasks` — Break work into actionable tasks.
- `/assign-tasks` — Convert requirements into tickets in GitHub Issues.

### Implementing

- `/implement-feature` — Implement a feature from tasks/specs with validation.
- `/implement-fixes` — Apply focused bug fixes with testing and PR notes.

### Reviewing

- `/review` — Run a structured code review checklist for changes.
- `/review-pr` — Review pull requests with architecture, testing, and security checks.

### Code Management

- `/commit-push` — Create conventional commits and push safely to a feature branch.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT
