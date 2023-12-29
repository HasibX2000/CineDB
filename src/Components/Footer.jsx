import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <footer>
      <footer className="z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 text-center">
        <span className="text-sm text-gray-500  sm:text-center dark:text-gray-400">
          &copy; {date} &nbsp;
          <Link to="/" className="hover:underline">
            CineDB
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 text-center justify-center">
          <li>
            <Link
              to="https://facebook.com/HasibX2000"
              className="hover:underline me-4 md:me-6"
              target="_blank"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/HasibX2000"
              className="hover:underline me-4 md:me-6"
              target="_blank"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              to="https://linkedin.com/in/HasibX2000"
              className="hover:underline me-4 md:me-6"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              to="https://wa.me/8801754752096"
              className="hover:underline"
              target="_blank"
            >
              WhatsApp
            </Link>
          </li>
        </ul>
      </footer>
    </footer>
  );
};

export default Footer;
