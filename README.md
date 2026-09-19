# Callion

Professional SIP / VoIP landing page (Next.js) and application API (Node.js + Express + Supabase).

## Project structure

```text
my-app/
├── app/                 Next.js frontend
├── lib/                 Frontend helpers (getApiUrl, form schema)
├── backend/             Express API (Supabase)
│   ├── src/             Routes, controllers, services, validators
│   ├── api/             Vercel serverless entry
│   └── database/        PostgreSQL schema
└── prisma/              Legacy Prisma schema (not used by the current API)
```

## 1. Frontend

```bash
npm install
copy .env.example .env
npm run dev
```

http://localhost:3000

Frontend environment:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

`NEXT_PUBLIC_` values are visible in the browser. Never put `SUPABASE_SERVICE_ROLE_KEY` here.

## 2. Backend

```bash
cd backend
npm install
copy .env.example .env
```

```env
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
FRONTEND_URL=http://localhost:3000
PORT=4000
```

From the repo root you can also run:

```bash
npm run server
```

http://localhost:4000

## 3. Supabase

1. Create a Supabase project.
2. Open the SQL editor.
3. Run `backend/database/schema.sql` to create the `applications` table.
4. Copy the project URL and **service role** key into `backend/.env`.

The service role key must stay on the server only (Vercel backend env, local `backend/.env`). Do not commit it and do not prefix it with `NEXT_PUBLIC_`.

## 4. API

`GET /api/health`

```json
{ "success": true, "message": "API is running" }
```

`POST /api/applications`

```json
{
  "name": "Ali",
  "phone": "+998901234567",
  "company": "Example LLC"
}
```

Success:

```json
{ "success": true, "message": "Ariza muvaffaqiyatli qabul qilindi" }
```

## 5. Local development

1. `npm install`
2. Create the Supabase table from `backend/database/schema.sql`
3. Copy `.env.example` files and fill values
4. `cd backend && npm install && npm run dev`
5. In another terminal: `npm run dev`

Submit the contact form on the landing page. A valid request is stored in `applications`.

## 6. Vercel deployment

Deploy **two** Vercel projects:

### Frontend (this repo root)

Root Directory: `.` (or `my-app` if the Git root is the parent folder)

Environment variables:

- `NEXT_PUBLIC_API_URL` = your backend URL, for example `https://your-api.vercel.app`

Do not invent a production domain. Use the URLs Vercel gives you, then your custom domain later.

### Backend (`backend/`)

Root Directory: `backend`

Environment variables:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `FRONTEND_URL` = your frontend origin, for example `https://your-app.vercel.app`
- `NODE_ENV=production`

The Express app is exported from `backend/api/index.js` for Vercel. Routes stay the same:

- `POST /api/applications`
- `GET /api/health`

Do not commit `.env` files.

## 7. Security notes

- Database and Supabase secrets live only in backend environment variables.
- Request bodies are validated with Zod on both frontend and backend.
- `POST /api/applications` is rate limited.
- CORS allows `FRONTEND_URL` (and localhost in development).
- API errors do not return stack traces, SQL, or secrets.
