"use client";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { PaginateContext } from "@/contexts/PaginateContext";
import { AuthorType } from "@/types/authorType";
import { FaBlogger } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const [isBurgerBarOpen, setIsBurgerBarOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [authors, setAuthors] = useState<AuthorType[]>([]);
  const { setCurrentPage } = useContext(PaginateContext);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsBurgerBarOpen(!isBurgerBarOpen);
    setIsDropdownOpen(false);
  };

  const getAuthors = async () => {
    const resp = await axios.get("http://127.0.0.1:1337/api/authors");
    setAuthors(resp.data.data);
  };

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setCurrentPage(1)}
        >
          <FaBlogger className="text-3xl text-sky-600 mr-4 hover:text-sky-700" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-sky-600 dark:text-white">
            Blog
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
          focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only"></span>
          <HiMenu className="text-3xl" />
        </button>

        <div
          className={`${
            isBurgerBarOpen ? "block" : "hidden"
          } w-full z-10 absolute md:static mt-56 md:mt-0 md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                onClick={() => {
                  setIsBurgerBarOpen(false);
                  setCurrentPage(1);
                }}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <button
              onClick={toggleDropdown}
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Author <RiArrowDownSLine className="text-xl ml-1" />
            </button>
            <div
              id="dropdownNavbar"
              className={`z-10  ${
                isDropdownOpen ? "block" : "hidden"
              } absolute mt-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                {authors &&
                  authors.map((author) => (
                    <Link
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsBurgerBarOpen(false);
                      }}
                      key={author?.id}
                      href={`/author/${author?.attributes.author}`}
                    >
                      <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        {author?.attributes.author}
                      </li>
                    </Link>
                  ))}
              </ul>
            </div>
            <li>
              <Link
                href="/about"
                onClick={() => setIsBurgerBarOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/create-blog"
                onClick={() => setIsBurgerBarOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Create blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
