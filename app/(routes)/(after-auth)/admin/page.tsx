import Blogs from "@/components/blog/blogs";
import CreatePost from "@/components/createpost";
import Logo from "@/components/logo";
import PageTextHero from "@/components/page-hero-text";
import { auth } from "@clerk/nextjs";
import React from "react";

const Create = async () => {
  const { userId } = await auth();

  return (
    <section>
      <section className="flex flex-col gap-10">
        <section className="padding flex flex-col gap-10">
          <Logo />
          <PageTextHero content="Create Post" />
        </section>
        <section className="padding bg-white text-[#111]">
          <CreatePost userId={userId} />
        </section>
      </section>
      <Blogs />
    </section>
  );
};

export default Create;
