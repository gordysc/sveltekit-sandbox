import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean()
});

export type FormSchema = typeof formSchema;
