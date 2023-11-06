import { z } from "zod";

export const newUserSchema = z.object({
  name: z.string().min(6, "O nome precisa de no mínimo 6 caracteres"),
  email: z
    .string()
    .email("Fomato do email inválido"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
});

export type NewUserFormData = z.infer<typeof newUserSchema>;

export const userLoginSchema = z.object({
  email: z
  .string()
  .email("Fomato do email inválido"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
})

export type UserLoginFormData = z.infer<typeof userLoginSchema>