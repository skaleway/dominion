import Image from "next/image";
import * as React from "react";
import Header from "../header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Family = () => {
  const images = [
    "/icons/Founder.svg",
    "/icons/President.svg",
    "/icons/Secretary.svg",
    "/icons/Finance.svg",
    "/icons/bocav.jpg"
  ];

  const names = [
    {
      name: "Azong Gustave Afuh",
      position: "President"
    },
    {
      name: "Langason Josephine Lum Fusina",
      position: "1st Vice President"
    },
    {
      name: "Chefor Ntukem epse Fru Blanding",
      position: "Secretary"
    },
    {
      name: "Awah Nicoline Sirri",
      position: "Treasurer"
    },
    {
      name: "Mbih Bocav",
      position: "Marketing and Communications Offier"
    }
  ];

  return (
    <section className="bg-white text-[#111] py-20 lg:py-28 px-4 lg:px-8 xl:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-3xl mx-auto">
          <Header content="Our Leadership Team" />
          <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
            Meet the dedicated leaders driving our mission forward and making a lasting impact in communities across Cameroon.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 grid grid-cols-5">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="relative w-full h-80 overflow-hidden bg-neutral-100">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={image}
                      width={400}
                      height={400}
                      alt={names[index]?.name || `Team member ${index + 1}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#111] mb-1 group-hover:text-primary transition-colors duration-200">
                      {names[index]?.name || "Team Member"}
                    </h3>
                    <p className="text-primary text-sm">
                      {names[index]?.position || "Position"}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex -left-12" />
          <CarouselNext className="hidden lg:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Family;
