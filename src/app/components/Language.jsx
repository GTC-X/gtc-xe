"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDetectClickOutside } from "react-detect-click-outside";
import Link from "next/link";

const Language = (props) => {
  const { currentLanguage } = props;
  const locale = useLocale();
  const pathname = usePathname();
  const isAr = pathname.includes("/ar-AE");
  const router = useRouter();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setDropdownOpen(false);
    },
  });


  const languages = [
    { code: "en", label: "English", flagSrc: "/en.webp" },
    { code: "ar-AE", label: "العربية", flagSrc: "/ar.webp" },
    // Add more languages as needed
  ];

  return (
    <div className="dropdown dropdown-hover z-50 relative">
      <button
        ref={ref}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-trasparent text-white border border-gray-200 px-2 py-[3px] text-sm flex justify-start items-center gap-2 cursor-pointer capitalize"
      >
        <Image
          src={`/${locale || "en"}.webp`}
          width={22}
          height={16}
          alt={locale.toLowerCase()}
        />
        {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {dropdownOpen && (
        <ul
          tabIndex={0}
          className={`dropdown-content z-[99] mt-1 language-setting menu shadow bg-white border border-gray-300 absolute rounded-none flex flex-col gap-3 p-3 text-sm ltr:right-0 rtl:left-0 ${currentLanguage?.direction == "rtl" ? "arabic" : ""}`}
        >
          {languages.map((language) => (
            <li key={language.code}>
              <Link
                href={
                  pathnameWithoutLocale === "" ? "/" : pathnameWithoutLocale
                }
                locale={language.code}
                className="language p-2"
              >
                <Image
                  src={language.flagSrc}
                  width={16}
                  height={8}
                  alt={language.label}
                />
                {language.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;