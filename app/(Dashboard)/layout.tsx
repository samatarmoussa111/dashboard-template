"use client";

import Sidebar from "@/app/(Dashboard)/components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <div className=" h-[80px] md:pl-56 fixed inset-y-0 w-full z-50 ">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
        <div className="md:p-6 mx-auto">{children}</div>
      </main>
    </div>
  );
}
