import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingNavDemo from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gagan Yarramsetty",
  description: "A Personal Portfolio Of Gagan Yarramsetty 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script defer src="https://cloud.umami.is/script.js" data-website-id="3744b992-6d1e-44be-b4c8-1b34457dc4f6"></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden md:block">
      <FloatingNavDemo/>
        </div>

        {children}
      </body>
    </html>
  );
}
