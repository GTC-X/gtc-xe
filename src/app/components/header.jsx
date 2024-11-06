"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import TopBar from "./topBar";
import LanguageMobile from "./mobileLanguage";
import { usePathname, useRouter } from "next/navigation";
import { useDetectClickOutside } from "react-detect-click-outside";

// Navigation Links
const navigation = [
  { name: "Home", href: "/", id: "home" },
  {
    name: "About",
    id: "about",
    subItems: [
      [{ name: "About The East Trade", href: "/about/about-us" }, { name: "Why Us", href: "/about/why-choose-us" }],
    ],
  },
  {
    name: "Trading",
    id: "trading",
    subItems: [
      [
        { name: "Forex Trading", href: "/trading/trade-forex" },
        { name: "Precious Metals", href: "/trading/precious-metal" },
        { name: "Stock CFDs", href: "/trading/stock-cfd" },
      ],
      [
        { name: "Equity Indices", href: "/trading/indicies" },
      ],
    ],
  },
  { name: "Open Live Account", href: "/account", id: "account" },
  { name: "MT4 / MT5 Trading Platform", href: "/platform", id: "platform" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [showMegaMenu, setShowMegaMenu] = useState(null); // Track open mega menu
  const pathname = usePathname();
  const router = useRouter();

  // Set the active item based on current pathname
  useEffect(() => {
    navigation.forEach((item) => {
      if (item.subItems) {
        item.subItems.flat().forEach((subItem) => {
          if (pathname.includes(subItem.href)) {
            setActiveItem(item.id); // Sets main menu item as active if submenu is selected
          }
        });
      } else if (pathname === item.href) {
        setActiveItem(item.id);
      }
    });
  }, [pathname]);

  // Function to detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ref = useDetectClickOutside({
    onTriggered: () => {
      setShowMegaMenu(null);
    },
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 md:pt-2 bg-[#1a1a1a] transition-all duration-300 ${isScrolled ? "bg-[#1a1a1a]" : "bg-gradient-to-r from-[#000f2f00] to-[#001c4400]"
        }`}
    >
      <TopBar />
      <div className="pb-2 bg-primary">
        <div className="container flex flex-row items-center justify-between py-3">
          {/* Logo */}
          <Link href="/">
            <img className="h-8 md:h-12" src="/logo-new.png" alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8 items-center" ref={ref}>
            {navigation.map((item) => (
              <div key={item.id} className="">
                <div
                  onClick={() => setShowMegaMenu(item.subItems ? item.id : null)}
                  className={`text-base hover:text-secondary cursor-pointer ${activeItem === item.id ? "border-b-2 hover:text-secondary text-secondary border-secondary pb-2" : "text-white"
                    } hover:text-white transition-all`}
                >
                  <Link href={item.href || "#"}>{item.name}</Link>
                </div>

                {item.subItems && showMegaMenu === item.id && (
                  <div className="absolute left-0 top-full grid grid-cols-2 bg-white shadow-lg w-full px-4 py-6  transition-transform transform duration-200 ease-out z-50">
                    <div />
                    <div className=" flex">
                      <div className="flex gap-8">
                        {item.subItems.map((column, columnIndex) => (
                          <div key={columnIndex} className="flex flex-col gap-2">
                            {column.map((subItem) => (
                              <div
                                key={subItem.href}
                                onClick={() => {
                                  router.push(subItem.href);
                                  setShowMegaMenu(null);
                                }}
                                className={`block cursor-pointer hover:text-secondary rounded-md  ${pathname === subItem.href ? "text-secondary" : "text-primary"
                                  }`}
                              >
                                {subItem.name}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex gap-6">
            <LanguageMobile />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <FaBarsStaggered aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Dialog */}
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 left-0 z-50 shadow-lg opacity-95 border border-white rounded-tr-lg rounded-br-lg w-[85%] overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="relative w-24 h-12">
                  <Image src="/logo-new.png" alt="Logo" fill className="object-contain" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <IoClose aria-hidden="true" className="h-6 w-6 text-white" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.id}>
                        {item.subItems ? (
                          <>
                            <span className="block px-3 py-2 text-base font-semibold leading-7 text-white">
                              {item.name}
                            </span>
                            <div className="pl-6">
                              {item.subItems.flat().map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block px-3 py-1 text-sm text-gray-300"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link href="#" className="bg-gradient rounded-full py-3 px-5 text-white w-96">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
