import React from "react";
import ValidationError from "../../errors/ValidationError";

export default function TextInput({
  label,
  type,
  id,
  placeholder,
  register,
  errors,
  name,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400   border-gray-300 focus:border-text-dark-color dark:focus:border-text-color border-gray/25 placeholder-gray-500 block w-full rounded-md border p-2.5 text-sm text-gray-900 dark:text-white focus:border-2 focus:outline-none"
        placeholder={placeholder}
        required
        {...register(name)}
      />

      <div className="">
        <ValidationError errors={errors} name={name} />
      </div>
    </div>
  );
}
