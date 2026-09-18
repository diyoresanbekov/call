# Callion

Professional SIP / VoIP landing page with a Node.js API for application (ariza) submissions.

## Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Node.js, Express, Prisma, PostgreSQL

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a PostgreSQL database.

3. Copy environment variables:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

4. Put your database credentials into `.env`. Never commit real passwords.

```env
DATABASE_URL=postgresql://USERNAME:PASSWORD@HOST:5432/DATABASE_NAME
PORT=4000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000
```

5. Generate the Prisma client and run migrations:

```bash
npm run db:generate
npm run db:migrate
```

6. Start the API:

```bash
npm run server
```

7. Start the frontend (in another terminal):

```bash
npm run dev
```

Frontend: http://localhost:3000  
API: http://localhost:4000

## Scripts

- `npm run dev` — Next.js frontend
- `npm run server` — Express API (watch mode)
- `npm run build` — production frontend build
- `npm run start` — start the production frontend
- `npm run db:generate` — generate Prisma client
- `npm run db:migrate` — apply Prisma migrations
- `npm run db:migrate:dev` — create/apply migrations in development

## API

`POST /api/applications`

```json
{
  "name": "Ali Valiyev",
  "phone": "+998901234567",
  "company": "Example LLC",
  "email": "ali@example.com",
  "service": "SIP telefoniya",
  "message": "Kompaniyamiz uchun SIP yechim kerak"
}
```

Successful response:

```json
{
  "success": true,
  "message": "Arizangiz qabul qilindi"
}
```
