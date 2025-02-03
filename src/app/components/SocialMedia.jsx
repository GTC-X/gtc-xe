'use client';
import React, { useState } from "react";
import {
  FaFacebookF,
  FaSnapchat,
  FaWhatsapp,
  FaPhoneAlt,
  FaYoutube,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiGlobalLine } from "react-icons/ri";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";

const socialMediaLinks = [
  {
    icon: <FaFacebookF size={18} className="text-secondary" />,
    bg: "bg-secondary",
    label: "Facebook",
    link: "https://www.facebook.com/share/1CWgqbhdkd/?mibextid=kFxxJD",
  },
  {
    icon: <FaTiktok size={18} className="text-secondary" />,
    bg: "bg-secondary",
    label: "TikTok",
    link: "https://www.tiktok.com/@eastfx.ly?_t=ZS-8tYVXDXI6UM&_r=1",
  },
  {
    icon: <FaSnapchat size={18} className="text-secondary" />,
    bg: "bg-secondary",
    label: "Snapchat",
    link: "https://www.snapchat.com/add/eastfx.ly?share_id=489ly-zwc4Q&locale=ar-LY",
  },
  {
    icon: <FaWhatsapp size={18} className="text-secondary" />,
    bg: "bg-secondary",
    label: "WhatsApp",
    link: "https://wa.me/message/NR6BJPSHIMA6F1",
  },
  {
    icon: <HiOutlineMail size={18} className="text-secondary" />,
    bg: "bg-secondary",
    label: "Email",
    link: "mailto:info@theastrade.com",
  },
  {
    icon: <FaPhoneAlt size={18} className="text-secondary" />,
    bg: "bg-secondary",
    label: "Phone",
    link: "tel:00218911730700",
  },

];

const SocialMedia = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="flex flex-col items-end fixed top-1/3 right-0 gap-1.5">
      {socialMediaLinks.map((social, index) => (
        <div
          key={index}
          className={`flex items-center w-fit p-2 rounded-tl-full rounded-bl-full transition-all duration-300 ease-in-out transform ${active === index ? "scale-105 shadow-lg" : "scale-100"
            } ${social?.bg}`}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
        >
          <Link
            href={social.link}
            aria-label={social.label}
            className="flex items-center text-white"
          >
            {/* Icon */}
            <div
              className={`bg-white p-1.5 rounded-full transition-transform duration-300 ${active === index ? "scale-125" : "scale-100"
                }`}
            >
              {social.icon}
            </div>
            {/* Label */}
            {active === index &&
              <span
                className={`ml-3 whitespace-nowrap transition-all duration-300 ease-in-out transform ${active === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-5"
                  }`}
              >
                {social.label}
              </span>
            }
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
