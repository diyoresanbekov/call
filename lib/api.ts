export function getApiUrl(): string {
  const value = process.env.NEXT_PUBLIC_API_URL?.trim();

  if (!value) {
    return "http://localhost:4000";
  }

  return value.replace(/\/$/, "");
}
