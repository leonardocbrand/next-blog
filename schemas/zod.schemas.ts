import { z } from "zod";

export const newUserSchema = z.object({
  name: z.string().min(6, "O nome precisa de no mínimo 6 caracteres"),
  email: z
    .string()
    .email("Fomato de email inválido")
    .min(6, "O email precisa de no mínimo 6 caracteres"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
});

export type NewUserFormData = z.infer<typeof newUserSchema>;
