'use client';
import React from 'react';

const PageContactUs = React.memo(() => {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
    );
});

export default PageContactUs;
