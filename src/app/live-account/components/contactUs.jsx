"use client";
import React from 'react';

const RegistrationForm = React.memo(() => {
    return (
        <div style={{ width: '100%', height: '1000px', overflow: "auto", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
                src="https://mygtcportal.com/getview?view=register&token=exhowwwwe2owwwww&language=en-US"
                title="Registration Form"
                sandbox="allow-scripts allow-same-origin allow-forms"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                }}
            />
        </div>
    );
});

export default RegistrationForm;
