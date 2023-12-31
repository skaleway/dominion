import Logo from "@/components/logo";
import React, { ReactNode } from "react";

const WhatWeDo = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen flex items-center justify-center flex-col gap-10">
      <Logo />
      <section className="w-[90%] h-fit rounded-lg p-10 lg:w-1/3 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-lg z-[-1]" />
        {children}
      </section>
    </main>
  );
};

export default WhatWeDo;
