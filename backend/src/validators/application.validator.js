import { z } from "zod";

export const applicationSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/[^\d+]/g, ""))
    .refine((value) => /^\+?\d{9,15}$/.test(value), {
      message: "Invalid phone",
    }),
  company: z.string().trim().min(2, "Company is required").max(160),
});
