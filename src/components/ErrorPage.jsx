import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "./Navbar.jsx";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div >
      <h1>Oops...</h1>
      <h2>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected error occured"}
      </h2>
      </div>
    </>
  );
};

export default ErrorPage;