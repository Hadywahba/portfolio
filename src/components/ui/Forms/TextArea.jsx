import React from "react";
import ValidationError from "../../errors/ValidationError";

export default function TextArea({
  label,
  rows,
  id,
  placeholder,
  name,
  register,
  errors,
}) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className="block p-2.5 resize-none w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400   border-gray-300 focus:border-text-dark-color dark:focus:border-text-color border-gray/25 placeholder-gray-500  rounded-md border  text-sm text-gray-900 dark:text-white focus:border-2 focus:outline-none"
        placeholder={placeholder}
        {...register(name)}
      />
      <div className="my-4">
        <ValidationError errors={errors} name={name} />
      </div>
    </div>
  );
}
