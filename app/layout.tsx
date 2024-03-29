import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "@/providers/toast-provider";
import ReactQuerry from "@/providers/react-querry";
export const metadata: Metadata = {
  title: {
    default: "Walking in Dominion",
    template: "%s - Walking in Dominion",
  },
  description:
    "We Walking in Dominion empower and equip the world to transform the poor and their communities physically, mentally, morally, and spiritually.",
};

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQuerry>
      <html lang="en">
        <Toaster />
        <body className={roboto.className}>
          <main className="relative overflow-hidden">
            <section className="bg h-screen fixed top-0 left-0 w-full text-[#111] -z-10" />
            <section className="text-white z-50">{children}</section>
          </main>
        </body>
      </html>
    </ReactQuerry>
  );
}
