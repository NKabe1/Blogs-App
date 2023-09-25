import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBar";
import Footer from "@/components/Footer";
import { PaginateProvider } from "@/providers/PaginateProvider"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog for all kind of readers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PaginateProvider>
          <Navbar />
          <SearchBox />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </PaginateProvider>
      </body>
    </html>
  );
}
