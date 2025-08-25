import React from 'react';
const SubmitError = ({ isError, error }) => {
  if (!isError) return null;

  const errorMessage = error?.response?.data?.message;

  return (
    <div className="rounded-lg border border-red-500 bg-rose-50 p-3 text-xs text-text-dark-color dark:text-text-color">
      {Array.isArray(errorMessage) ? (
        errorMessage.map((err, index) => (
          <p key={index}>* {err}</p>
        ))
      ) : (
        <p>
          {errorMessage ??
            error?.message ??
            'An error occurred. Please try again.'}
        </p>
      )}
    </div>
  );
};

export default SubmitError;
