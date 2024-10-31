import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container text-white py-10 text-sm">
      {/* Live Chat and Links */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span className="text-lg">💬</span>
          <span className="font-medium">LIVE CHAT</span>
        </div>

        <div className="flex justify-center space-x-4">
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
          Legal Forms & Documents
        </a>
        <a href="#risk" className="hover:underline">
          Risk Warnings
        </a>
        <a href="#cookies" className="hover:underline">
          Cookies Policy
        </a>
      </div>

      {/* Warnings and Disclaimer */}
      <div className="text-gray-400 mb-6">
        <p className="mb-4">
          <span className="font-semibold text-white">
            High Risk Investment Warning:
          </span>{" "}
          Contracts for Difference (CFDs) are complex financial products that
          are traded on margin. Trading CFDs carries a high degree of risk. It
          is possible to lose all your capital. These products may not be
          suitable for everyone and you should ensure that you understand the
          risks involved. Seek independent expert advice if necessary and
          speculate only with funds that you can afford to lose. Please think
          carefully whether such trading suits you, taking into consideration
          all the relevant circumstances as well as your personal resources. We
          do not recommend clients posting their entire account balance to meet
          margin requirements. Clients can minimise their level of exposure by
          requesting a change in leverage limit. For more information please
          refer to TETC’s Risk Disclosure.
        </p>
        <p className="mb-4">
          <span className="font-semibold text-white">Disclaimer:</span> The
          content of this page is for information purposes only and it is not
          intended as a recommendation or advice. Any indication of past
          performance or simulated past performance included in advertisements
          published by TETC is not a reliable indicator of future results. The
          customer carries the sole responsibility for all the businesses or
          investments that are carried out at TETC.
        </p>
        <p>
          <span className="font-semibold text-white">TETC</span> is authorized
          and regulated under the{" "}
          <span className="font-semibold text-white">
            Dubai Financial Services Authority
          </span>{" "}
          with license number <span className="text-white">F000000</span>.
        </p>
      </div>

      {/* Social Media Icons */}
    </footer>
  );
};

export default Footer;
