
## Getting Started

First, run the development server:

```bash
pnpm i
pnpm dev
```

## Migrate Data

Create a new migration:
```bash
pnpm migrate:create <migration-name>
```

Run migrations up:
```bash
pnpm migrate:up
```

Run migrations down:
```bash
pnpm migrate:down <migration-name>
```

Remove old migrations from collection:
```bash
pnpm migrate:prune
```

Make sure to set your MongoDB URI in .env file:
```
MONGODB_URI=mongodb+srv://...
```
