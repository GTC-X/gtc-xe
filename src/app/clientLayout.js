"use client";

import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import i18n from "../i18n"; // Import your i18n configuration
import Header from "./components/header";
import Footer from "./components/footer";
import TermsToast from "./components/home/TermsToast";

const ClientLayout = ({ children }) => {
    const [direction, setDirection] = useState("ltr");

    useEffect(() => {
        // Update direction based on the current language
        const currentLang = i18n.language;
        setDirection(currentLang === "ar" ? "rtl" : "ltr");

        // Listen to language changes and update the direction
        i18n.on("languageChanged", (lng) => {
            setDirection(lng === "ar" ? "rtl" : "ltr");
        });

        return () => {
            i18n.off("languageChanged");
        };
    }, []);

    return (
        <html lang={i18n.language} dir={direction}>
            <body>
                <NextUIProvider>
                    <Header />
                    <TermsToast />
                    <div className="pt-16 md:pt-28">{children}</div>
                    <Footer />
                </NextUIProvider>
            </body>
        </html>
    );
};

export default ClientLayout;
