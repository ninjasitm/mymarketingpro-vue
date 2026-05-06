# mymarketingpro-vue

Vue 3 plugin for MyMarketingPro.com — provides components, composables, and utilities for integrating with the MyMarketingPro platform API.

## Tech Stack

- **Framework:** Vue 3
- **Language:** TypeScript
- **Styling:** CSS / SCSS
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ninjasitm/mymarketingpro-vue
cd mymarketingpro-vue

# Install dependencies
npm install
```

### Usage

```typescript
import { createApp } from 'vue'
import { MyMarketingProPlugin } from 'mymarketingpro-vue'
import App from './App.vue'

const app = createApp(App)

app.use(MyMarketingProPlugin, {
  baseUrl: 'https://api.mymarketingpro.com',
  apiKey: 'your-api-key',
})

app.mount('#app')
```

## Project Structure

```
mymarketingpro-vue/
├── src/
│   ├── index.ts           # Plugin entry point
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
