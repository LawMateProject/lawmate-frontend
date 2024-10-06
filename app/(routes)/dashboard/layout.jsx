import React from "react";
import SideNav from "./_components/SideNav";
import Header from "@/app/_components/Header";

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="fixed md:w-64 hidden md:block  border-r border-gray-100 shadow-md">
        <SideNav />
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
}

export default DashboardLayout;
