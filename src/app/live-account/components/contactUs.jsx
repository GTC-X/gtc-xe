"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RegistrationForm = React.memo(() => {
  const { t } = useTranslation()
  const [selected, setSelected] = useState("standard")
  return (
    <div className='container py-12'>
      <div className="flex justify-center gap-4 mb-10">
        <button className={`${selected == "standard" ? "bg-black text-white" : "bg-gray-200 text-black"} py-1 px-4 rounded-full focus:outline-none`}
          onClick={() => setSelected("standard")}
        >
          Standard L0
        </button>
        <button className={`${selected == "ecn" ? "bg-black text-white" : "bg-gray-200 text-black"} py-1 px-4 rounded-full focus:outline-none`}
          onClick={() => setSelected("ecn")}
        >
          ECN
        </button>
      </div>
      <div style={{ width: '100%', height: '1000px', overflow: "auto", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe
          src={selected == "standard" ? "https://mygtcportal.com/getview?view=register&token=e4biowwwAowwwwww?lang=en-US" : "https://mygtcportal.com/getview?view=register&token=e4biowwwsowwwwww?lang=en-US"}
          title="Registration Form"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </div>
    </div>
  );
});

export default RegistrationForm;
