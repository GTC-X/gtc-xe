import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    // Skip public files or API requests
    if (
        PUBLIC_FILE.test(pathname) ||
        pathname.startsWith("/api") ||
        pathname.includes("_next")
    ) {
        return;
    }

    // Check for locale in the URL
    const locale = pathname.split("/")[1];
    const supportedLocales = ["en", "fr", "es"]; // Add your supported locales
    const defaultLocale = "en";

    if (!supportedLocales.includes(locale)) {
        const url = request.nextUrl.clone();
        url.pathname = `/${defaultLocale}${pathname}`;
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};
