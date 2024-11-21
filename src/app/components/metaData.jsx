"use client"

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const MetaData = ({ title, description }) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        // Update the document title
        document.title = title

        // Check if the meta description exists
        let metaDescription = document.querySelector("meta[name='description']");
        if (!metaDescription) {
            // Create the meta description tag if it doesn't exist
            metaDescription = document.createElement("meta");
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        // Update the content of the meta description
        metaDescription.content = description
    }, [t, i18n.language]);

    return null
}

export default MetaData