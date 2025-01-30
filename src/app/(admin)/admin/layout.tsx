import type { Metadata } from "next";
import "../../globals.css";


export const metadata: Metadata = {
  title: "Esi's Kitchen",
  description: "We are food catering and serivice web platform that provides you with the best of experience.Taste the culture in your food.",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div

      >
        {children}
    </div>
   
  );
}
