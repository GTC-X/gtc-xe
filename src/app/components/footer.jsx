'use client'
import React from "react";
import { useTranslation } from "react-i18next";
 
import parse from 'html-react-parser';
import SocialMedia from "./SocialMedia";

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

        <SocialMedia />
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
