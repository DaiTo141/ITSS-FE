import React from "react";
import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <div className="w-full  bg-[#F8EEDC]">
      <div>
        <Header />
      </div>
      <div className="pb-32">{children}</div>
    </div>
  );
}
