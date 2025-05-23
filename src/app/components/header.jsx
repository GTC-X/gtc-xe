"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FaBarsStaggered, FaChevronDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import TopBar from "./topBar";
import LanguageMobile from "./mobileLanguage";
import { usePathname, useRouter } from "next/navigation";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useTranslation } from "react-i18next";



const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null); // Track open dropdown
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();

  // Navigation Links
  const navigation = [
    { name: t("HomePage.navBar.home"), href: "/", id: "home" },
    {
      name: t("HomePage.navBar.aboutUs.about"),
      id: "about",
      subItems: [
        { name: t("HomePage.navBar.aboutUs.aboutEast"), href: "/about/about-us" },
        { name: t("HomePage.navBar.aboutUs.termsAndConditions"), href: "/about/terms" },
        { name: t("HomePage.navBar.aboutUs.whyUs"), href: "/about/why-choose-us" },
        { name: t("HomePage.navBar.aboutUs.contactUs"), href: "/about/contact-us" },
      ],
    },
    {
      name: t("HomePage.navBar.trading.trading"),
      id: "trading",
      subItems: [
        { name: t("HomePage.navBar.trading.forex"), href: "/trading/trade-forex" },
        { name: t("HomePage.navBar.trading.matel"), href: "/trading/precious-metal" },
        { name: t("HomePage.navBar.trading.stock"), href: "/trading/stock-cfd" },
        { name: t("HomePage.navBar.trading.equity"), href: "/trading/indicies" },
        { name: t("HomePage.navBar.trading.energies"), href: "/trading/energies" },
      ],
    },
    {
      name: t("HomePage.navBar.openAccount"), id: "account",
      subItems: [
        { name: "with Standard L10", href: "https://mygtcportal.com/getview?view=register&token=8ledowww8lowwwww" },
       ],
    },
    { name: t("HomePage.navBar.platform"), href: "/mt4-platform", id: "platform" },
  ];
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
      setShowDropdown(null);
    },
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 md:pt-2 bg-[#1a1a1a] transition-all duration-300 ${isScrolled ? "bg-[#1a1a1a]" : "bg-gradient-to-r from-[#000f2f00] to-[#001c4400]"
        }`}
    >
      <TopBar />
      <div className="pb-2 bg-primary">
        <div className="container flex flex-row items-center justify-between gap-2 py-2 md:py-0">
          {/* Logo */}
          <Link href="/">
            <img className="h-28 md:h-28" src="/Logo-Recovered.png" alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden md:flex gap-x-6" ref={ref}>
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.subItems && item.subItems.some((subItem) => pathname.includes(subItem.href)));

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.subItems && setShowDropdown(item.id)}
                  onMouseLeave={() => item.subItems && setShowDropdown(null)}
                >
                  <Link
                    href={item.href || "#"}
                    className={`text-base cursor-pointer flex items-center ${isActive ? "text-secondary" : "text-white"
                      }`}
                  >
                    <span>{item.name}</span>
                    {item.subItems && (
                      <FaChevronDown
                        className={`transition-transform text-sm mx-3 ${showDropdown === item.id ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && showDropdown === item.id && (
                    <div className="absolute left-0 z-50 pt-2">
                      <div className="bg-white rounded-md shadow-lg">
                        {item.subItems.map((subItem) => (
                          <div
                            key={subItem.href}
                            onClick={() => {
                              if (item?.id == "account") {
                                window.open(subItem?.href, "_blank")
                                setShowDropdown(null); // Hide dropdown on selection
                              } else {
                                router.push(subItem.href);
                                setShowDropdown(null); // Hide dropdown on selection
                              }
                            }}
                            className={`block cursor-pointer px-4 whitespace-pre py-2 ${pathname === subItem.href ? "text-secondary" : "text-primary"
                              } hover:bg-secondary hover:text-white`}
                          >
                            {subItem.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex gap-6 md:hidden">
            <LanguageMobile />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <FaBarsStaggered aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Dialog */}
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
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
                  <IoClose aria-hidden="true" className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flow-root mt-6">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="py-6 space-y-2">
                    {navigation.map((item) => (
                      <div key={item.id}>
                        {item.subItems ? (
                          <details className="group">
                            <summary className="flex items-center py-2 text-base font-semibold leading-7 text-white cursor-pointer ">
                              <span>{item.name}</span>
                              <FaChevronDown className="mx-3 text-sm text-white transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="pl-6 space-y-2">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`block px-3 py-1 text-sm ${pathname === subItem.href ? "text-secondary" : "text-gray-300"
                                    }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </details>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block rounded-lg py-2 text-base font-semibold leading-7 ${pathname === item.href ? "text-secondary" : "text-white"
                              }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link href="#" className="px-5 py-3 text-white rounded-full bg-gradient w-96">
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
