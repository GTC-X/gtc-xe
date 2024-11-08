'use client'
import React from 'react';
import { FaApple, FaGooglePlay, FaDesktop, FaMobileAlt, FaFileAlt } from 'react-icons/fa';
import { CiMobile2 } from "react-icons/ci";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { AiFillWindows } from "react-icons/ai";
import { IoIosTabletPortrait, IoIosPhonePortrait } from "react-icons/io";
import { TiVendorAndroid } from "react-icons/ti";

import Image from "next/image";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { useTranslation } from 'react-i18next';


const DownloadSection = () => {
    const { t } = useTranslation()
    const downloadMacOptions = [
        { link: 'https://download.mql5.com/cdn/web/gtc.global.trade/mt4/gtcglobaltrade4setup.exe', icon: AiFillWindows, textKey: t("HomePage.downloadApp.mac.mt4pc") },
        { link: 'https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe', icon: AiFillWindows, textKey: t("HomePage.downloadApp.mac.mt5pc"), },
        { link: 'https://webtrade.gtcup.com/terminal', icon: CgWebsite, textKey: t("HomePage.downloadApp.mac.live1"), },
        { link: 'https://webtrade.gtcup.com/terminal', icon: CgWebsite, textKey: t("HomePage.downloadApp.mac.live2"), },
    ];

    const downloadSmartphoneOptions = [
        { link: 'https://download.mql5.com/cdn/mobile/mt4/android?server=GTCGlobalTrade-Server', icon: TiVendorAndroid, textKey: t("HomePage.downloadApp.smartPhone.mt4andriod") },
        { link: 'https://apps.apple.com/us/app/metatrader-4/id496212596', icon: FaApple, textKey: t("HomePage.downloadApp.smartPhone.mt4andriod") },
        { link: 'https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server', icon: TiVendorAndroid, textKey: t("HomePage.downloadApp.smartPhone.mt5andriod") },
        { link: 'https://download.mql5.com/cdn/mobile/mt5/ios?server=GTCGlobalTrade-Server', icon: FaApple, textKey: t("HomePage.downloadApp.smartPhone.mt5iphone") },

    ];
    const downloadOptions = [
        { link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/metatrader4.apk', icon: TiVendorAndroid, text: t("HomePage.downloadApp.tablets.mt4andriod") },
        { link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/metatrader5.apk', icon: FaApple, text: t("HomePage.downloadApp.tablets.mt4ipad") },

    ];
    return (
        <div className=" container text-white py-8 flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left Section */}
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold">{t("HomePage.downloadApp.heading")}</h2>
                <p className="text-secondary font-semibold">{t("HomePage.downloadApp.GTCAPP.downloadnow")}</p>
                <p>MT4 & MT5</p>
                <div className="flex space-x-4 mt-4">
                    <a href="#googleplay" className="border border-white rounded-lg text-white py-2 px-2 flex items-center space-x-2 hover:bg-gray-200 transition">
                        <FaApple className="text-base" />
                        <span className="text-sm" >App Store</span>
                    </a>
                    <a href="#googleplay" className="border border-white rounded-lg text-white py-2 px-2 flex items-center space-x-2 hover:bg-gray-200 transition">
                        <FaGooglePlay className="text-base" />
                        <span className="text-sm" >Google Play</span>
                    </a>
                </div>
            </div>


            <div className="content-out w-full">
                <div className="flex flex-col gap-3 md:flex-row items-start">
                    <div className="app-side md:basis-1/4 bg-secondary bg-opacity-40 p-5 border-secondary">
                        <h4 className="text-lg ltr:text-left rtl:text-right flex flex-row gap-2 items-center text-white">
                            <p className="text-secondary"><CiMobile2 size={40} /></p>
                            {t("HomePage.downloadApp.GTCAPP.title")}
                        </h4>
                        <div className="inside-content py-3">
                            <h3 className="text-base text-secondary leading-9">
                            {t("HomePage.downloadApp.GTCAPP.downloadnow")}
                            </h3>
                            <p className="text-xs  text-white"> {t("HomePage.downloadApp.GTCAPP.para2")}</p>
                            <div className="download-description py-4 text-white">
                                <p className="text-sm ltr:text-left rtl:text-right">
                                {t("HomePage.downloadApp.GTCAPP.para1")}
                                </p>
                            </div>
                            <div className="flex flex-row item-center justify-start gap-2">
                                <div className="relative w-full h-12">
                                    <Image
                                        src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/app.webp"
                                        alt="Icon"
                                        fill
                                        className="object-contain bg-white rounded-md"
                                    />
                                </div>
                                <div className="relative w-full h-12">
                                    <Image
                                        src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/google.webp"
                                        alt="Icon"
                                        fill
                                        className="object-contain bg-white rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-side md:basis-3/4">
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="ltr:pl-5 rtl:pr-5  ">
                                <h4 className="text-base text-left flex flex-row gap-2 items-center text-white">
                                    <p className="text-secondary text-sm"><MdOutlineDesktopWindows size={24} /></p>
                                    {t("HomePage.downloadApp.mac.title")}
                                </h4>
                                <div className="inside-content py-3">
                                    <ul className="leading-7 text-sm gap-4">
                                        {downloadMacOptions.map((option, index) => (
                                            <li key={index} className="border-b text-sm border-secondary border-opacity-50 text text-left text-white">
                                                <Link className="flex text-sm flex-row gap-3 items-center py-3" href={option.link}>
                                                    <p className="text-secondary"><option.icon size={20} /></p>

                                                    {(option.textKey)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="pl-5 md:pl-0 border-opacity-35">
                                <h4 className="text-base text-left flex flex-row gap-2 items-center text-white">
                                    <p className="text-secondary text-sm"><IoIosPhonePortrait size={24} /></p>
                                    {t("HomePage.downloadApp.smartPhone.title")}
                                </h4>
                                <div className="inside-content py-3">
                                    <ul className="leading-7 text-sm gap-4">
                                        {downloadSmartphoneOptions.map((option, index) => (
                                            <li key={index} className="border-b border-secondary border-opacity-50 text text-left text-white">
                                                <Link className="flex text-sm flex-row gap-3 items-center py-3" href={option.link}>
                                                    <p className="text-secondary"><option.icon size={30} /></p>
                                                    {(option.textKey)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="pl-5 md:pl-0">
                                <h4 className="text-base text-left flex flex-row gap-2 items-center text-white">
                                    <p className="text-secondary text-sm"><IoIosTabletPortrait size={24} /></p>
                                    {t("HomePage.downloadApp.tablets.title")}
                                </h4>
                                <div className="inside-content py-3">
                                    <ul className="leading-7 text-sm gap-4">
                                        {downloadOptions.map((option, index) => (
                                            <li key={index} className="border-b border-secondary border-opacity-50 text text-left text-white">
                                                <Link className="flex text-sm flex-row gap-3 items-center py-3" href={option.link}>
                                                    <p className="text-secondary"><option.icon size={30} /></p>
                                                    {option.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default DownloadSection;
