import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="grid h-screen place-content-center gap-y-4 text-center">
      <h1 className="text-9xl font-extrabold">404</h1>
      <h2 className="text-4xl font-thin">Oops! Page not found</h2>
      <Link to={"/"} className="flex justify-center rounded bg-pink-500 p-4 text-xl text-white shadow-xl">
        Go Back
      </Link>
    </div>
  );
}
