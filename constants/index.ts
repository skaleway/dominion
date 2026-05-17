import { client } from "@/lib/sanity";
import { blogType, imageType } from "@/types";
import { unstable_cache } from "next/cache";
import { useMemo } from "react";

export const navbarRoutes = () => {
  const routes = useMemo(
    () => [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About Us",
        path: "/about",
      },
      {
        name: "What we Do",
        path: "/what-we-do",
      },
      {
        name: "Blog",
        path: "/blog",
      },
      {
        name: "Contact",
        path: "/contact",
      },
    ],
    []
  );

  return routes;
};

export const socialsIcons = () => {
  const socials = useMemo(
    () => [
      {
        name: "facebook",
        icon: "/icons/facebook.svg",
        path: "https://www.facebook.com/Dominioncharityorganisation",
      }
    ],
    []
  );

  return socials;
};

export const whatWeDo = () => {
  const what = useMemo(
    () => [
      {
        name: "Volunteer",
        icon: "/icons/volunteer.svg",
        text: "Join our community of dedicated volunteers committed to making a difference. Whether it’s lending a helping hand at events, contributing your skills, or participating in outreach programs, your time and effort contribute significantly to our mission ",
      },
      {
        name: "Donate",
        icon: "/icons/donate.svg",
        text: "Your generous donations fuel our initiatives and empower us to reach more individuals in need.Every contribution, no matter the size, plays a crucial role in creating positive change.Explore various donation options and see the tangible impact your support can have on the lives of those we serve",
      },
      {
        name: "Fundraise",
        icon: "/icons/fundraise.svg",
        text: " Becoming a champion for our cause by organising fundraising events, or campaigns. Engage your network, friends, and family to amplify our impact.Whether it’s a charity auction, or a virtual campaign, your fundraising efforts directly contribute to the success of our programs.",
      },
    ],
    []
  );

  return what;
};
export const whatWeTrain = () => {
  const what = useMemo(
    () => [
      {
        name: "Training for Mechanics",
        icon: "/icons/mechanic.svg",
      },
      {
        name: "Training for Builders",
        icon: "/icons/builders.svg",
      },
      {
        name: "Training for Agriculture",
        icon: "/icons/agriculture.svg",
      },
    ],
    []
  );

  return what;
};

export const Impacts = () => {
  const what = useMemo(
    () => [
      {
        name: "Amount Raised",
        icon: "/icons/ifund.svg",
        number: 2.5 + 'M',
      },
      {
        name: "People helped",
        icon: "/icons/ipeople.svg",
        number: 500,
      },
      {
        name: "Volunteer",
        icon: "/icons/ivol.svg",
        number: 30,
      },
    ],
    []
  );

  return what;
};

export const partners = () => {
  const what = useMemo(
    () => [
      {
        name: "Blessing Solidarity Home Foundation (BSHF)",
        location: "Bamenda, NW Region Cameroon, Africa",
        contact: ["Mrs. Awah Nicoline", "Tel: +237 676 283 367 "],
      },
      {
        name: "Rainbow Orphanage",
        location: "Lala Road, Mamfe SouthWest Region, Cameroon, Africa",
        contact: [
          "Mrs. Ahone Florence",
          "Tel: +237 677 029 767 ",
          " Email: ahoneflorence1@gmail.com",
        ],
      },
      {
        name: "St. Therese Orphanage",
        location: "Yaounde, Center Region Cameroon, Africa",
        contact: [
          "Mrs. Martha Teche Abei",
          "Tel: +237 677 982 578 ",
          " Email: techemartha66@gmail.com",
        ],
      },
      {
        name: "Shaping Destiny Orphanage",
        location: "Yaounde, Center Region Cameroon, Africa",
        contact: [
          "Mrs. Martha Teche Abei",
          "Tel: +237 677 982 578s",
          " Email: techemartha66@gmail.com",
        ],
      },
    ],
    []
  );

  return what;
};

export const contactForm = () => {
  const what = useMemo(
    () => [
      {
        name: "General Overseer",
        fields: ["Evangelist Afuh Azong Gustave", "+971 58 163 8492"],
      },
      {
        name: "President",
        fields: ["Josephine Achu Ade", "+1 651 325 8966"],
      },
      {
        name: "Website Administrator",
        fields: ["Philemon Tebo Tebo", "philballer41@gmail.com"],
      },
      {
        name: "General Inquiries",
        fields: ["widcointernational@gmail.com"],
      },
    ],
    []
  );

  return what;
};

export async function getBlogs(slug?: string) {
  if (slug) {
    const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query);

    return data;
  }
  const query = `*[_type == "blog"] | order(_createdAt desc)`;

  const data = await client.fetch(query);

  return data;
}
export async function getSlingle(slug: string) {
  if (slug) {
    const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query);

    return data;
  }
  return "nothing";
}

export const getPictures = async () => {
  const query = `*[_type == "pictures"]`;

  const data = await client.fetch(query);

  return data;
};

export const getCashedBlogs = unstable_cache(
  async () => await getBlogs(),
  [""],
  {
    revalidate: 1,
  }
);

export const getCashedPictures = unstable_cache(
  async () => await getPictures(),
  [""],
  {
    revalidate: 1,
  }
);

export const getCashedSingleBlog = unstable_cache(
  async (id) => await getSlingle(id),
  [""],
  {
    revalidate: 1,
  }
);

export async function getNewBlogs() {
  try {
    const data = await fetch("/api/blogs", { next: { revalidate: 1 } });

    const newData = await data.json();

    if (newData) {
      return newData as blogType[];
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getNewPictures() {
  try {
    const data = await fetch("/api/images", { next: { revalidate: 1 } });

    const newData = await data.json();

    if (newData) {
      return newData as imageType[];
    }
  } catch (error) {
    console.log(error);
  }
}

export const skeletonPicturesHeight = [
  200, 150, 499, 209, 288, 199, 120, 209, 100, 300,
];
