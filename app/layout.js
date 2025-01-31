import localFont from "next/font/local";
import "./globals.css";
import Footer from "./component/Footer";
import Header from "./component/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Espindo Tour & Travels",
  description: "Espindo Tour & Travels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add your favicon link */}
        <meta property="og:image" content="https://www.espindotourandtravels.com/share-logo.png" />
        <meta property="og:title" content="Espindo Tour and Travels" />
        <meta property="og:description" content="Best Tour and Travels Agency" />
        <meta property="og:url" content="https://www.espindotourandtravels.com" />
        <link rel="icon" href="/share-logo.png" />
       
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
