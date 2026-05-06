---
applyTo: "**/*"
description: "Developer workflows and environment settings for mymarketingpro-vue."
---

# Workflows

## Development

- **Start dev server:** `npm run dev` (port 5173)
- **Build:** `npm run build`
- **Type check:** `npm run type-check`

## Testing

- **Unit tests:** `npm run test`
- **Coverage:** `npm run test:coverage`
- **E2E tests:** `npm run test:e2e`

## Code quality

- **Lint:** `npm run lint`
- **Format:** `npm run format`

## Environment variables

| Variable        | Purpose            | Required |
| --------------- | ------------------ | -------- |
| `VITE_API_BASE_URL` | Base URL for the MyMarketingPro API | Yes      |
| `VITE_API_KEY` | API key for MyMarketingPro platform authentication | No       |
