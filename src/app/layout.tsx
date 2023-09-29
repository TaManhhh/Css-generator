import Header from "@/components/Hearder/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSS Generator | Section Cloud",
  description: "CSS Generator | Section Cloud",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="mb-[30px]">
            <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
