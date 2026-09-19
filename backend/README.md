# Callion API

Node.js + Express backend for Callion application (ariza) submissions.

Data is stored in Supabase PostgreSQL. The service role key stays on the server only.

## Setup

```bash
cd backend
npm install
copy .env.example .env
```

Fill in:

```env
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
FRONTEND_URL=http://localhost:3000
PORT=4000
```

In the Supabase SQL editor, run `database/schema.sql`.

```bash
npm run dev
```

API: http://localhost:4000

## Endpoints

- `GET /api/health`
- `POST /api/applications`

```json
{
  "name": "Ali",
  "phone": "+998901234567",
  "company": "Example LLC"
}
```
