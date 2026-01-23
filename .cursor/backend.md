# Backend Rules – Next.js API + Prisma + OAuth2

- API routes live under `app/api/**/route.ts`
- One responsibility per API route
- Use REST only; no GraphQL/tRPC
- Validate all input at boundary
- Return consistent response shapes
- Delegate business logic to `/lib/services`
- No DB or auth logic inside Client Components
- Use Prisma for Postgres access
- Use environment variables for secrets
- Protect all routes needing auth
- OAuth2 via Google only; never hardcode tokens
- Server Components can access secrets and DB
- Do not expose internal errors to client
- Handle errors explicitly; log them
- Keep API route files focused and small
- Use caching only when safe (ISR, `revalidate`)
