"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

// Navigation Links
const navigation = [
  { name: "Home", href: "/", id: "home" },
  { name: "About Us", href: "/", id: "about" },
  { name: "Trading", href: "/", id: "liquidity" },
  { name: "Open Live Account", href: "/", id: "inclusive" },
  { name: "MT4 / MT5 Trading Platform", href: "/", id: "technology" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home"); // State to track active item

  // Function to detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigationClick = (id) => {
    setActiveItem(id); // Set active item when a navigation item is clicked
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-2 bg-black transition-all duration-300 ${isScrolled ? " bg-black" : "bg-gradient-to-r from-[#000f2f00] to-[#001c4400]"
        }`}
    >
      <div className="container flex flex-row items-center justify-between py-3">
        {/* Logo */}
        <Link href="/">
          <img className="h-5 md:h-12" src="/logo-new.png" alt="Logo" />
        </Link>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu </span>
            <FaBarsStaggered aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigationClick(item.id)} // Handle click for active state
              className={`text-base cursor-pointer ${activeItem === item.id
                  ? "text-white border-b-2 border-secondary pb-2"
                  : "text-white"
                } hover:text-white transition-all`}
            >
              {item.icon ? (
                <Link href={item.href}>
                  <div className="flex items-center gap-1">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                </Link>
              ) : (
                <Link href={item.href}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Dialog */}
        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-[90%] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* Mobile Menu Logo */}
              <Link href="/" className="relative w-24 h-12">
                <Image src="/clogo.png" alt="Logo" fill className="object-contain" />
              </Link>
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <IoClose aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => handleNavigationClick(item.id)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="bg-gradient rounded-full py-3 px-5 text-white w-96"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
