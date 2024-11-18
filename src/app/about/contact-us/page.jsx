'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const PageContactUs = React.memo(() => {
    const { t } = useTranslation()
    return (
        <div className='bg-white py-10'>
            <div className=' container mx-auto'>
                <div className="flex flex-col  order-2 md:order-1 ">
                    <h1 className="text-3xl font-bold mt-2">{t("aboutUs.contactUs.title")}</h1>
                    <p className="text-sm mt-2">{t("aboutUs.contactUs.para1")}</p>
                    <p className="text-sm mt-3">{t("aboutUs.contactUs.para2")}</p>
                </div>
                <div className='mt-16'>
                    <h1 className="text-3xl font-bold mt-2">{t("aboutUs.contactUs.formTitle")}</h1>
                    <div style={{ width: '100%', height: '570px', overflow: "auto" }}>
                        <iframe
                            src="https://demo-registration-26be-ebc266552f8e.herokuapp.com/forms/frame" // or remove `language` if not needed
                            title="Registration Form"
                            sandbox="allow-scripts allow-same-origin"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default PageContactUs;
