import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-black w-full h-full flex flex-col place-items-center justify-center">
      <h1 className="font-semibold text-4xl">Oops!</h1>
      <p className=" mt-10 ">Sorry, an unexpected error has occurred.</p>
      <p className=" mt-6 text-primary-gray italic">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
