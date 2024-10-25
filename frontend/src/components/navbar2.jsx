// import React from "react";
import { Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Navbar2() {
  const navigate = useNavigate();
  function Logout() {
    toast.warning("Logged out successfully..");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  }
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="bg-white border-gray-200 dark:bg-gray-900 ">
        <Navbar
          className=" max-w-screen-xl dark:bg-gray-900  items-center justify-between mx-auto p-4"
          fluid
        >
          <Navbar.Brand href="/">
            <img src="./pic.png" className=" h-10" alt="Flowbite Logo" />
            <span className="self-center m-3 font-Cottage text-2xl font-semibold whitespace-nowrap dark:text-white">
              Urban-Bites{" "}
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="font-medium   p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Navbar.Link
              className=" dark:text-yellow-400 hover:text-white md:hover:text-white   rounded dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              href="/"
              active
            >
              <Link to={"/"} className="font-Whimster text-2xl">
                Home{" "}
              </Link>
            </Navbar.Link>

            <Navbar.Link
              active
              className=" dark:text-yellow-400 hover:text-white  md:hover:text-white-700   dark:hover:bg-gray-700 md:dark:hover:bg-transparent  "
            >
              <Link to={"/menu"} className="font-Whimster text-2xl ">
                Menu{" "}
              </Link>
            </Navbar.Link>

            <Navbar.Link
              href="#"
              className="hover:text-white  md:hover:text-white-700  dark:text-yellow-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent "
              active
            >
              {token ? (
                <Link to={"/order"} className="font-Whimster text-2xl ">
                  Order{" "}
                </Link>
              ) : null}
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className=" dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:hover:text-white-700 hover:text-white  md:p-0 dark:text-yellow-400 "
              active
            >
              <Link to={"/about"} className="font-Whimster text-2xl ">
                About{" "}
              </Link>
            </Navbar.Link>
            <Navbar.Link
              active
              className=" text-yellow-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-yellow-400 dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent  "
            >
              {token ? (
                <Link to={"/cart"} className="font-Whimster text-2xl ">
                  {" "}
                  Cart{" "}
                </Link>
              ) : null}
            </Navbar.Link>
            <Navbar.Link
              active
              className=" text-yellow-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-yellow-400 dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent  "
            >
              <span
                onClick={Logout}
                className=" cursor-pointer font-Whimster text-2xl "
              >
                {" "}
                Logout{" "}
              </span>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
