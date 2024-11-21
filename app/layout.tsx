"use client"
import localFont from "next/font/local";

import Script from "next/script";

import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import "../assets/css/font-awesome-all.css" ;
import "../assets/css/flaticon.css" ;
import "../assets/css/owl.css" ;
import "../assets/css/bootstrap.css" ;
import "../assets/css/jquery.fancybox.min.css" ;
import "../assets/css/animate.css" ;
import "../assets/css/nice-select.css" ;
import "../assets/css/color.css" ;
import "../assets/css/style.css" ;
import "../assets/css/responsive.css" ;

import { usePathname } from "next/navigation";



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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link
    href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
    <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
            <Script  src="/assets/js/jquery.js" />
      <Script  src="assets/js/jquery.js" />
    <Script  src="/assets/js/popper.min.js" />
    <Script  src="/assets/js/bootstrap.min.js" />
    <Script  src="/assets/js/owl.js" />
    <Script  src="/assets/js/wow.js" />
    <Script  src="/assets/js/validation.js" />
    <Script  src="/assets/js/jquery.fancybox.js" />
    <Script  src="/assets/js/appear.js" />
    <Script  src="/assets/js/scrollbar.js" />
    <Script  src="/assets/js/jquery.nice-select.min.js" />
    <Script  src="/assets/js/isotope.js" />


    <Script  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CE0deH3Jhj6GN4YvdCFZS7DpbXexzGU" />
    <Script  src="/assets/js/gmaps.js" />
    <Script  src="/assets/js/map-helper.js" />


    <Script  src="/assets/js/script.js" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        {/* <BootstrapClient /> */}
 
      </body>

    </html>
  );
}


