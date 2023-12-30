import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, to }) => {
  return (
    <Link to={to}>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
