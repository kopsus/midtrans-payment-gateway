import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z.string().email("Email tidak valid"),
});

export type IForgotPassword = z.infer<typeof ForgotPasswordSchema>;
