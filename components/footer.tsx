"use client";

import React from "react";
import Logo from "./logo";
import { navbarRoutes, socialsIcons } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const routes = navbarRoutes();
  const pathname = usePathname();
  const socials = socialsIcons();

  return (
    <footer className="bg-[#111] padding">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Main Footer Content */}
        <section className="flex lg:flex-row flex-col lg:justify-between lg:items-start gap-12 lg:gap-8">
          {/* Logo and Mission Section */}
          <section className="flex flex-col gap-6 lg:max-w-md">
            <Logo />
            <p className="text-base text-gray-300 leading-relaxed">
              We empower and equip the world to transform the poor and their
              communities physically, mentally, morally, and spiritually
            </p>
          </section>

          {/* Quick Links Section */}
          <section className="flex flex-col gap-6">
            <p className="text-2xl font-semibold relative before:h-full before:w-[3px] before:bg-primary before:absolute before:left-[-10px] pl-3">
              Quick links
            </p>
            <ul className="flex flex-col gap-3">
              {routes.map((route, index) => (
                <Link
                  href={route.path}
                  key={index}
                  className={cn(
                    "font-normal text-base text-gray-300 hover:text-primary transition-colors duration-200",
                    pathname === route.path && "text-primary"
                  )}
                >
                  {route.name}
                </Link>
              ))}
            </ul>
          </section>

          {/* Social Links Section - Desktop Only */}
          <section className="hidden lg:flex flex-col gap-6 items-start">
            <p className="text-2xl font-semibold relative before:h-full before:w-[3px] before:bg-primary before:absolute before:left-[-10px] pl-3">
              Follow Us
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  href={social.path}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    width={24}
                    height={24}
                    alt={social.name}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </section>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Copyright and Social Links - Mobile */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400 text-center lg:text-left">
            Copyright 2026 Walking In Dominion. All Rights Reserved
          </p>
          {/* Social Links - Mobile (shown below copyright) */}
          <div className="flex items-center gap-4 lg:hidden">
            {socials.map((social) => (
              <Link
                href={social.path}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  width={24}
                  height={24}
                  alt={social.name}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
