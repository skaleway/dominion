import Image from "next/image";
import React from "react";
import Donate from "../donatebtn";
import { Impacts } from "@/constants";

const Hero = () => {
  const impacts = Impacts();

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center px-4 lg:px-8 xl:px-20 pt-32 pb-20 overflow-hidden bg">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 text-white">
            <div className="flex flex-col gap-4">
              <p className="text-primary text-sm lg:text-base font-semibold uppercase tracking-wider">
                Together We Can
              </p>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight">
                Let's make a{" "}
                <span className="text-primary">difference</span>
              </h1>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed max-w-xl">
                WIDCA is shaping the lives of women and young people by giving them equal opportunities to live a better life through empowerment, education, and sustainable development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Donate />
             
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {impacts.map((impact, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <p className="text-2xl lg:text-3xl font-bold text-primary">
                    {impact.number}+
                  </p>
                  <p className="text-xs lg:text-sm text-neutral-400">
                    {impact.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Image
                    src="/icons/analytic.svg"
                    width={40}
                    height={40}
                    alt="dominion analytic icons"
                    className="opacity-90"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Our Reach</p>
                  <p className="text-neutral-400 text-sm">Active across Cameroon</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-neutral-300 text-sm">Communities Reached</span>
                  <span className="text-primary font-bold">50+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-neutral-300 text-sm">Programs Active</span>
                  <span className="text-primary font-bold">15+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-neutral-300 text-sm">Years of Service</span>
                  <span className="text-primary font-bold">10+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
