"use client";

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#FECB00] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://i.postimg.cc/j2GFyNr3/logo-chinelos.png" // Substitua pelo caminho da sua logo
              alt="Logo"
            />
          </div>

          {/* Mobile menu button */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
  className="h-6 w-6"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="black"  // Aqui forçamos a cor preta no traçado
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-4">
            <a href="https://instagram.com/gustavowwx" className="text-black px-3 py-2 rounded-md text-base font-medium">
              HOME
            </a>
            <a href="#about" className="text-black px-3 py-2 rounded-md text-base font-medium">
              CONTATO
            </a>
            <a href="#services" className="text-black px-3 py-2 rounded-md text-base font-medium">
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-black block px-3 py-2 rounded-md text-base font-medium">
              HOME
            </a>
            <a href="#about" className="text-black block px-3 py-2 rounded-md text-base font-medium">
            CONTATO
            </a>
            <a href="#services" className="text-black block px-3 py-2 rounded-md text-base font-medium">
            INSTAGRAM
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
