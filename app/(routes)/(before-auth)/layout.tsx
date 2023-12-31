import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";

const BeforeAuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section className="">{children}</section>
      <Footer />
    </main>
  );
};

export default BeforeAuthLayout;
