import { heroFormSchema, type HeroFormData } from "../../schemas/heroForm.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./FormField";

export default function HeroForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeroFormData>({
    resolver: zodResolver(heroFormSchema),
  });

  const onSubmit = (data: HeroFormData) => {
    console.log("Заявка:", data);
  };

  return (
    <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-stretch z-10">
      <div className="w-full max-w-md bg-neutral-800 rounded-lg flex-1 flex items-stretch relative">
        <div className="p-8 w-full h-full flex flex-col justify-around gap-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            ПОМОЖЕМ ПОДОБРАТЬ ОБУЧЕНИЕ
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            <FormField
              name="name"
              placeholder="Ваше имя"
              register={register}
              errors={errors}
              type="text"
            />
            <FormField
              name="email"
              placeholder="Ваш Email"
              register={register}
              errors={errors}
              type="email"
            />
            <FormField
              name="phone"
              placeholder="Ваш номер телефона"
              register={register}
              errors={errors}
              type="tel"
            />
            <button
              type="submit"
              className="my-4 bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold py-3 rounded-lg cursor-pointer"
            >
              ХОЧУ УЧИТЬСЯ
            </button>
            <FormField
              name="agreeToPrivacyPolicy"
              placeholder="Отправляя заявку, вы даёте согласие на обработку своих персональных данных в соответствии с политикой конфиденциальности и принимаете условия оферты"
              register={register}
              errors={errors}
              type="checkbox"
            />
            <FormField
              name="corporateTraining"
              placeholder="Хочу купить обучение для компании"
              register={register}
              errors={errors}
              type="checkbox"
            />
          </form>
        </div>
        <img
          className="absolute -top-20 -left-20 w-40"
          src="/sec1_form_thing.png"
          alt="Decoration"
        />
      </div>
    </div>
  );
}
