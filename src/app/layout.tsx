import type { Metadata } from "next";
import Header from "@/sections/Header";
import "./globals.css";
import { MyContextProvider } from "./context";
import { Analytics } from "@vercel/analytics/next";


export const metadata: Metadata = {
  title: "Rehan Portfolio",
  description: "A Next.js Developer Integrating AI with his websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <MyContextProvider>
        <body
          className={`antialiased`}
        >
          <Header />
          <Analytics />
          {children}
        </body>
      </MyContextProvider>
    </html>
  );
}
