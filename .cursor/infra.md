# Infra Rules – Docker + Env + Logging

- Use Docker for all environments
- Maintain separate dev and prod environments
- Store secrets only in environment variables
- Do not commit `.env` files to source control
- Logging: structured logs; log errors server-side
- No client-side logging of secrets
- Use strict TypeScript
- Enforce linting and formatting
- Monitor build warnings and errors
- Server must fail fast on misconfigurations
- Keep Docker images minimal
- Avoid unnecessary dependencies
- Optimize Node.js memory and CPU usage
- Environment configs must match deployment
- Follow principle: secure by default, open only when required
