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
        path: "#",
      },
      {
        name: "Twitter",
        icon: "/icons/twitter.svg",
        path: "#",
      },
      {
        name: "instagram",
        icon: "/icons/instagram.svg",
        path: "#",
      },
      {
        name: "linkedin",
        icon: "/icons/linkedin.svg",
        path: "#",
      },
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
        number: 2.5,
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
        contact: ["Mrs. Ahone Florence", "Tel: +237 677 029 767 "],
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
          "Mrs. Ahone Florence",
          "Tel: +237 677 029 767 ",
          " Email: ahoneflorence1@gmail.com",
        ],
      },
      {
        name: "Shaping Destiny Orphanage",
        location: "Yaounde, Center Region Cameroon, Africa",
        contact: [
          "Mrs. Ahone Florence",
          "Tel: +237 677 029 767 ",
          " Email: ahoneflorence1@gmail.com",
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
        fields: ["Elvis Fusina", "fusinaelvis@gmail.com"],
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
