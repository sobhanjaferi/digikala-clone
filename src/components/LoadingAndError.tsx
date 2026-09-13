import { ReactElement } from "react";

function LoadingAndError({
  isError,
  isPending,
  isFetching,
}: {
  isError: boolean;
  isPending: boolean;
  isFetching: boolean;
}): ReactElement {
  return (
    <>
      {isError && (
        <p className="m-auto w-130 text-2xl text-center bg-red-400 text-white p-2 rounded-xl shadow-md shadow-red-300">
          !data not found please check your conection
        </p>
      )}
      {isPending || isFetching ? (
        <p className="m-auto text-2xl text-center" dir="ltr">
          Loading ...
        </p>
      ) : null}
    </>
  );
}

export default LoadingAndError;
