import React from "react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { HeroFormData } from "../../schemas/heroForm.schema";
import { AnimatePresence, motion } from "framer-motion";

interface FormFieldProps {
  name: keyof HeroFormData;
  placeholder: string;
  register: UseFormRegister<HeroFormData>;
  errors: FieldErrors<HeroFormData>;
  type?: "text" | "email" | "tel" | "checkbox";
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  placeholder,
  register,
  errors,
  type = "text",
}) => {
  if (type === "checkbox") {
    return (
      <div className="relative flex flex-col">
        <label className="flex text-sm items-start gap-2 cursor-pointer">
          <input
            {...register(name)}
            type="checkbox"
            className="w-4 h-4 mt-1 accent-blue-500"
          />
          {placeholder}
        </label>
        <AnimatePresence>
          {errors[name] && (
            <motion.p
              key="nameError"
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-red-400 mt-3"
            >
              {errors[name]?.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`px-4 py-3 rounded-lg bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
          errors[name] ? "ring-red-500" : "focus:ring-blue-500"
        }`}
      />
      <AnimatePresence>
        {errors[name] && (
          <motion.p
            key="nameError"
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-red-400 mt-3"
          >
            {errors[name]?.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
