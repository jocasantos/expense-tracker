import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-slate-900 flex justify-center items-center min-h-screen w-full">
      {children}
    </main>
  );
};

export default Layout;
