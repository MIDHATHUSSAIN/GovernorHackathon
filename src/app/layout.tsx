import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componenets/Navbar";
import Navbar2 from "@/componenets/Navbar2";
import Footer from "@/componenets/Footer";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >   <Navbar/>
         <Navbar2/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
