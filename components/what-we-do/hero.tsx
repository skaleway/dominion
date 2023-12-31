import React from "react";
import PageTextHero from "../page-hero-text";
import Donate from "../donatebtn";

const Hero = () => {
  return (
    <section className="h-96 lg:px-20 px-4 relative flex justify-center flex-col gap-5">
      <PageTextHero content="What we do" />
      <p className="lg:text-2xl text-base">
        Put a smile on the faces of these children
      </p>
      <Donate />
    </section>
  );
};

export default Hero;
