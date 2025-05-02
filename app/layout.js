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
        <meta property="og:title" content="Get ready to uncover the magic of Jaipur with Espindo, your ultimate Jaipur travel agent! Picture yourself strolling through the Pink City's vibrant streets." />
        <meta property="og:description" content="Best Tour and Travels Agency" />
        <meta property="og:url" content="https://www.espindotourandtravels.com" />
        <link rel="icon" href="/share-logo.png" />
       
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

{/* <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-[150px] font-bold text-gray-800 leading-none">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Not Found</h2>
      <p className="text-gray-500 text-lg">
        The resource requested could not be found on this server!
      </p>
    </div> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
