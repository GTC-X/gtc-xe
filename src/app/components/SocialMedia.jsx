import React from 'react';
import {
  FaFacebookF,
  FaSnapchat ,
  FaWhatsapp ,
  FaPhoneAlt ,
  FaYoutube,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiGlobalLine } from "react-icons/ri";
import Link from 'next/link';



const socialMediaLinks = [
  { icon: <FaFacebookF />, label: "Facebook", link: "https://www.facebook.com/EastFX.Ly?locale=ar_AR" },
  { icon: <FaSnapchat />, label: "FaSnapchat", link: "https://www.snapchat.com/add/eastfx.ly?share_id=489ly-zwc4Q&locale=ar-LY" },
  { icon: <FaWhatsapp  />, label: "FaWhatsapp ", link: "https://wa.me/message/NR6BJPSHIMA6F1" },
  { icon: <HiOutlineMail />, label: "Instagram", link: "mailto:info@theastrade.com" },
  { icon: <FaPhoneAlt  />, label: "phone", link: "tel:00218911730700" },
  { icon: <RiGlobalLine />, label: "Discord", link: "http://eastfx.ly/" },
];

const SocialMedia = () => {
  return (
    <div className="flex justify-center space-x-2">
      {socialMediaLinks.map((social, index) => (
        <div key={index} className="p-1 rounded-full border border-white hover:bg-secondary">
          <Link
            href={social.link}
            aria-label={social.label}
            className="text-gray-400 hover:text-white hover:bg-secondary"
          >
            {social.icon}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
