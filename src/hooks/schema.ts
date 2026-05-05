import { z } from "zod";
import { type Language, getTranslations } from "@/i18n/translations";

export type ContactFormData = {
  user_name: string;
  user_email: string;
  message: string;
};

export const getContactSchema = (lang: Language) => {
  const t = getTranslations(lang);

  return z.object({
    user_name: z
      .string()
      .min(2, t.validation.nameMin)
      .max(50, t.validation.nameMax)
      .regex(/^[A-Za-z ]+$/, t.validation.namePattern),
    user_email: z.string().email(t.validation.emailInvalid),
    message: z
      .string()
      .min(10, t.validation.messageMin)
      .max(1000, t.validation.messageMax),
  });
};
