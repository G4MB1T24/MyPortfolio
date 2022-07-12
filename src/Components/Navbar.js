import React, { useEffect } from "react";
import gitlogo from "./assets/github.svg";
import { Link } from "react-scroll";
import { Link as Link2, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font p-2 mt-0 md:fixed w-full z-10 top-0">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link2
            to="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Gambit</span>
          </Link2>
          <nav className="cursor-pointer	 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link2
              to="/"
              className={`mr-5 hover:text-white hover:border-b-2 border-white  ease-in duration-200 ${
                location.pathname === "/" ? "border-b-2 border-white" : ""
              } `}
            >
              Home
            </Link2>

            {location.pathname !== "/" ? (
              <Link2
                to={"/"}
                spy={true}
                smooth={true}
                offset={-200}
                duration={400}
                className={`mr-5 cursor-default `}
              >
                Projects
              </Link2>
            ) : (
              <Link
                to="project-s"
                spy={true}
                smooth={true}
                offset={-200}
                duration={400}
                className={`mr-5  hover:text-white hover:border-b-2 border-white `}
              >
                Projects
              </Link>
            )}

            <Link2
              to="/links"
              className={`mr-5 hover:text-white hover:border-b-2 border-white  ease-in duration-200 ${
                location.pathname === "/links" ? "border-b-2 border-white" : ""
              } `}
            >
              Connections
            </Link2>
            <Link2
              to="tech"
              className={`mr-5 hover:text-white hover:border-b-2 border-white  ease-in duration-200 ${
                location.pathname === "/tech" ? "border-b-2 border-white" : ""
              } `}
            >
              Tech Stack
            </Link2>
          </nav>

          <a href={"https://github.com/G4MB1T24"}>
            <img src={gitlogo} alt="" />
          </a>
        </div>
      </header>
      <br />
      <br />
    </>
  );
}
