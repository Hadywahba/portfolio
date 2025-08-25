
import SubmitError from "../../errors/SubmitErrors";
import Spinner from "../../loader/Spinner";

export default function SubmitButton({ label, isPending, isError, error }) {
  return (
    <div>
      <button
        type="submit"
        disabled={isPending}
        className="text-white dark:text-black bg-text-dark-color dark:bg-text-color   focus:ring-4 focus:outline-none focus:ring-text-dark-color font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 0"
      >
        {isPending ? <Spinner color="text-blue" c /> : label}
      </button>
      <div className="mb-4">
        <SubmitError isError={isError} error={error} />
      </div>
    </div>
  );
}
