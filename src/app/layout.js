// src/app/layout.js
import './globals.css';
import "react-multi-carousel/lib/styles.css";
import ClientLayout from './clientLayout';

export default function RootLayout({ children }) {
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
}
