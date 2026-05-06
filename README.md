# mymarketingpro-vue

Vue 3 plugin for MyMarketingPro.com — provides components, composables, and utilities for integrating with the MyMarketingPro platform API.

## Tech Stack

- **Framework:** Vue 3
- **Language:** TypeScript
- **Styling:** CSS / SCSS
- **Package Manager:** npm

## Template Placeholders

The following placeholders must be replaced when customizing this template:

| Placeholder             | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| mymarketingpro-vue        | Project name (kebab-case).                                 |
| Vue 3 plugin for MyMarketingPro.com — provides components, composables, and utilities for integrating with the MyMarketingPro platform API. | Short description of the project.                          |
| Vue 3           | Primary framework (with version if applicable).            |
| TypeScript            | Primary programming language (with version if applicable). |
| CSS / SCSS             | Styling solution (e.g., Tailwind, CSS Modules).            |
| npm     | Package manager (npm, pnpm, yarn, bun).                    |
| 18+        | Required Node.js version.                                  |
| https://github.com/ninjasitm/mymarketingpro-vue            | Repository URL.                                            |
| 5173            | Development server port.                                   |
| src/
│   ├── index.ts
│   ├── plugin.ts
│   ├── components/
│   ├── composables/
│   ├── services/
│   ├── types/
│   └── utils/
├── tests/
├── docs/       | High-level source folder structure.                        |
| MIT        | License identifier (e.g., MIT, Apache-2.0).                |
| src             | Source directory (e.g., src, app, lib).                    |
| tests            | Test directory (e.g., tests, test, spec).                  |
| ts      | Primary file extension (e.g., ts, js, tsx).                |
| main      | Default git branch (e.g., main, master).                   |

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

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`.

## Project Structure

```
mymarketingpro-vue/
├── src/
│   ├── src/
│   ├── index.ts
│   ├── plugin.ts
│   ├── components/
│   ├── composables/
│   ├── services/
│   ├── types/
│   └── utils/
├── tests/
├── docs/
├── tests/
├── docs/
├── .cursor/           # Cursor IDE configuration
├── .github/           # GitHub configuration
└── package.json
```

## Scripts

| Command                         | Description              |
| ------------------------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run test`  | Run tests                |
| `npm run lint`  | Run linter               |

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
- `/assign-tasks` — Convert requirements into tickets in `GitHub Issues`.

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
