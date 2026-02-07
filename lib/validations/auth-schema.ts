import { z } from "zod";

export const loginSchema = z.object({
  email: z.email().trim().min(1, "Email is required").max(255, "Email too long"),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

export const signupSchema = z
  .object({
    email: z.email().trim().min(1, "Email is required").max(255, "Email too long"),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, { message: "Passwords don't match" });

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
