'use client'
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import parse from 'html-react-parser';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="container text-white py-10 text-sm">
      {/* Live Chat and Links */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span className="text-lg">💬</span>
          <span className="font-medium">{t("footer.liveChat")}</span>
        </div>

        <div className="flex justify-center gap-4">
          <div className="p-1 rounded-full border border-white">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="text-gray-400   hover:text-white"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="p-1 rounded-full border border-white">
            <a
              href="#twitter"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="p-1 rounded-full border border-white">
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="p-1 rounded-full border border-white">
            <a
              href="#instagram"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="p-1 rounded-full border border-white">
            <a
              href="#youtube"
              aria-label="YouTube"
              className="text-gray-400 hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="p-1 rounded-full border border-white">
            <a
              href="#discord"
              aria-label="Discord"
              className="text-gray-400 hover:text-white"
            >
              <FaDiscord />
            </a>
          </div>
          <div className="p-1 rounded-full border border-white">
            <a
              href="#telegram"
              aria-label="Telegram"
              className="text-gray-400 hover:text-white"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
      <div className="flex space-x-6 mb-6">
        <a href="#legal" className="hover:underline">
          {t("footer.document")}
        </a>
        <a href="#risk" className="hover:underline">
          {t("footer.risk")}
        </a>
        <a href="#cookies" className="hover:underline">
          {t("footer.cookies")}
        </a>
      </div>

      {/* Warnings and Disclaimer */}
      <div className="text-gray-400 mb-6">
        <p className="mb-4"
        >{parse(t("footer.desc1"))}</p>
        <p className="mb-4"
        >{parse(t("footer.desc2"))}</p>
        <p
        >{parse(t("footer.desc3"))}</p>
      </div>
    </footer>
  );
};

export default Footer;
