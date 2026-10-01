import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password"),
});

export function getFieldErrors<K extends string>(
  error: z.ZodError,
): Partial<Record<K, string>> {
  const result: Partial<Record<K, string>> = {};

  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in result)) {
      result[key as K] = issue.message;
    }
  }

  return result;
}