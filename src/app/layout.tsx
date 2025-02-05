import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import NavBar from "@/components/customs/navbar";

const poppins = localFont({
  src: [
    
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '400',
      style: 'italic',
    }
  ]
})

export const metadata: Metadata = {
  title: "Esi's Kitchen",
  description: "This is a booking platform for esi's kitchen that allows you to make plans for an upcomming event. You dont always need to wait for last minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <NavBar/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
