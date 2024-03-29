import { urlFor } from "@/lib/sanityImageUrl";
import { blogType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = ({ post }: { post: blogType }) => {
  const date = post._createdAt.split("T")[0];

  return (
    <Link href={`/blog/${post.slug.current}`} className="flex flex-col group">
      <Image
        alt={post.title}
        src={urlFor(post.previewImage).url()}
        width={600}
        height={500}
        className="rounded-[8px] w-[600px] max-h-[300px] object-cover"
      />
      <section className="flex flex-col gap-4 px-2 mt-3">
        <p className="text-2xl truncate-heading group-hover:underline group-hover:delay-150">
          {post.title}
        </p>
        <p className="font-thin truncate-text">{post.overview}</p>
        <section className="flex items-center justify-between mt-5">
          <p>By admin</p>
          <p>{post.releaseDate ? post.releaseDate : date}</p>
        </section>
      </section>
    </Link>
  );
};

export default Post;
