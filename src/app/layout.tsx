import type { Metadata } from "next";
import Header from "@/sections/Header";
import "./globals.css";
import { MyContextProvider } from "./context";


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
          {children}
        </body>
      </MyContextProvider>
    </html>
  );
}
