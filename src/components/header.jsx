import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md ">
      <div className="container mx-auto px- py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold tracking-wide hover:text-gray-200"
        >
          REDUX SHOPPING CART
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                className="hover:text-gray-200 transition-colors duration-200"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-200 transition-colors duration-200"
                to="/cart"
              >
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
