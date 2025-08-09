"use client";

import { useState, useEffect } from "react";
import Logo from "./generics/logo";
import Button from "./generics/button";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Как это работает" },
    { href: "/", label: "Инструкции" },
    { href: "/", label: "Продукты" },
    { href: "/", label: " База знаний" },
  ];

  return (
    <header className="sticky top-0">
      <div className="z-10 shadow-sm h-[60px] flex items-center justify-center w-full bg-white">
        <div className="mx-auto p-4 sm:max-w-xl md:max-w-3xl xl:max-w-6xl w-full flex items-center justify-between">
          <Logo type="black" />

          <nav className="hidden md:flex items-center gap-4 xl:gap-12">
            {navLinks.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="text-sm hover:text-green-500 transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Button>Вход</Button>
          </nav>

          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={30} /> : <MenuIcon size={30} />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-white flex flex-col justify-center items-center z-5 transform transition-transform duration-300 ${
          isOpen ? "translate-y-[60px]" : "-translate-y-full"
        }`}
      >
        <ul className="flex items-center flex-col gap-8 text-lg">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button>Вход</Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
