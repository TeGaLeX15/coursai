import { z } from "zod";

export const heroFormSchema = z.object({
  name: z.string().min(1, "Введите Ваше имя"),
  email: z.string().email("Введите корректный email"),
  phone: z
    .string()
    .regex(/^\+?[0-9]{1,14}$/, "Введите корректный номер телефона"),
  agreeToPrivacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласие на обработку персональных данных",
  }),
  corporateTraining: z.boolean().optional(),
});

export type HeroFormData = z.infer<typeof heroFormSchema>;
