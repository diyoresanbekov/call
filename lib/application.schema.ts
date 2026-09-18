import { z } from "zod";

export const APPLICATION_SERVICES = [
  "SIP telefoniya",
  "IP-ATS",
  "Call center",
  "Demo",
] as const;

export const applicationFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/[^\d+]/g, ""))
    .refine((value) => /^\+?\d{9,15}$/.test(value), {
      message: "Invalid phone",
    }),
  company: z.string().trim().min(2).max(160),
  email: z
    .string()
    .trim()
    .max(160)
    .optional()
    .transform((value) => (value ? value : undefined))
    .refine((value) => value === undefined || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: "Invalid email",
    }),
  service: z.enum(APPLICATION_SERVICES),
  message: z
    .string()
    .trim()
    .max(2000)
    .optional()
    .transform((value) => (value ? value : undefined)),
  lines: z.number().int().min(1).max(500).optional(),
});

export type ApplicationFormInput = z.infer<typeof applicationFormSchema>;
