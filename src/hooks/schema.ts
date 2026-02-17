import { z } from "zod";

export const contactSchema = z.object({
  user_name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre es demasiado largo"),
  user_email: z.string().email("Por favor, ingresá un email válido"),
  message: z
    .string()
    .min(10, "El mensaje debe ser más descriptivo (mín. 10 caracteres)")
    .max(1000, "El mensaje no puede exceder los 1000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
