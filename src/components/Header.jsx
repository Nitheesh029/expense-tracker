import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Link = ({ to, children, className, onClick }) => (
  <a href={to} className={className} onClick={onClick}>
    {children}
  </a>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-lg border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105"
        >
          ExpenseTracker
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-1">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium relative group"
          >
            Dashboard
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link
            to="/add-expense"
            className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium relative group"
          >
            Add Expense
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link
            to="/expenses"
            className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium relative group"
          >
            Expenses
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 font-medium transform hover:-translate-y-0.5"
          >
            Login
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700 transform rotate-0 transition-transform duration-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 transform rotate-0 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-100 shadow-inner">
          <Link
            to="/"
            className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border-l-4 border-transparent hover:border-blue-600 font-medium"
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
          <Link
            to="/add-expense"
            className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border-l-4 border-transparent hover:border-blue-600 font-medium"
            onClick={toggleMenu}
          >
            Add Expense
          </Link>
          <Link
            to="/expenses"
            className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border-l-4 border-transparent hover:border-blue-600 font-medium"
            onClick={toggleMenu}
          >
            Expenses
          </Link>
          <Link
            to="/login"
            className="block mx-4 my-3 px-4 py-2 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 font-medium hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
