import React from "react";

const ValidationError = ({ errors, name }) => {
  const getNestedError = (obj, path) => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };

  const errorMessage = getNestedError(errors, name);

  if (!errorMessage) return null;

  return (
    <div className="mt-2 px-5 text-base text-text-dark-color dark:text-text-color">
      {errorMessage.message || errorMessage}
    </div>
  );
};

export default ValidationError;
