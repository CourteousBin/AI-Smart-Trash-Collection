"use client";

import { useState, useEffec } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// head
import Header from "@/components/Header";

// sidbar
import Sidebar from "@/components/Sidebar";
const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalEarnings, setTotalEarnings] = useState(0);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 设置元素的最小高度为 100vh（视口高度），确保该元素至少占据整个屏幕的高度。 */}
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {/* header */}
          <Header
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            totalEarnings={totalEarnings}
          />

          <div className="flex flex-1">
            {/* sidebar */}
            <Sidebar open={sidebarOpen} />
            <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
