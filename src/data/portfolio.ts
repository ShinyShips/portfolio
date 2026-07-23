export interface WorkItem {
  company: string;
  href: string;
  period: string;
  role: string;
  detail: string;
}

export interface EducationItem {
  school: string;
  href: string;
  degree: string;
  period: string;
}

export interface PostcardProject {
  title: string;
  href: string;
  image: string;
  alt: string;
  description: string;
  meta: string;
  note: string;
}

export interface ParcelProject {
  title: string;
  href: string;
  image: string;
  description: string;
}

export type AboutSegment =
  | string
  | {
      text: string;
      href: string;
      emphasis?: boolean;
    };

export interface PortfolioData {
  name: string;
  url: string;
  email: string;
  description: string;
  hero: {
    eyebrow: string;
    titleLead: string;
    titleRecipient: string;
    introduction: string;
    note: string;
    portrait: {
      image: string;
      alt: string;
      postage: string;
    };
  };
  about: readonly AboutSegment[];
  footer: string;
  social: {
    github: string;
    linkedin: string;
  };
  work: readonly WorkItem[];
  education: readonly EducationItem[];
  skills: readonly string[];
  projects: readonly PostcardProject[];
  minorProjects: readonly ParcelProject[];
}

export const portfolio: PortfolioData = {
  name: "Andy Nguyen",
  url: "https://atn.dev",
  email: "andy@atn.dev",
  description:
    "UX/Design Engineer blending creativity and technology through accessible, user-friendly products.",
  hero: {
    eyebrow: "FROM THE DESK OF ANDY NGUYEN",
    titleLead: "ATTN",
    titleRecipient: "You",
    introduction:
      "Special delivery — a UX/Design Engineer who blends creativity and technology. Accessible, user-friendly, postage paid.",
    note: "handle with care ↴",
    portrait: {
      image: "/me.png",
      alt: "Andy Nguyen",
      postage: "USA · 2026",
    },
  },
  about: [
    "Software Engineering at ",
    {
      text: "Stevens Institute of Technology",
      href: "https://stevens.edu",
    },
    ", now pursuing an MS in Computer Science at ",
    {
      text: "Georgia Tech",
      href: "https://gatech.edu",
    },
    ". I interned at Colgate-Palmolive and L3Harris, and today I help build the ",
    {
      text: "next generation of GPS at L3Harris",
      href: "https://www.l3harris.com/",
      emphasis: true,
    },
    ". Mentor & alum of FIRST Robotics Team 3314, The Mechanical Mustangs of Clifton, NJ.",
  ],
  footer: "© 2026 ANDY NGUYEN · POSTAGE PAID AT ATN.DEV",
  social: {
    github: "https://github.com/ShinyShips",
    linkedin: "https://www.linkedin.com/in/andy-nguyen-798610126/",
  },
  work: [
    {
      company: "L3Harris Technologies",
      href: "https://www.l3harris.com/",
      period: "2021 — NOW",
      role: "Sr. Associate SWE",
      detail: "Next-gen GPS",
    },
    {
      company: "Colgate-Palmolive",
      href: "https://www.colgatepalmolive.com/en-us",
      period: "2019 — 2020",
      role: "App & Software Dev Intern",
      detail: "Internal tools & web products",
    },
    {
      company: "Thingee Corp.",
      href: "https://thingee.com/",
      period: "2017",
      role: "UI/UX Design Intern",
      detail: "Presentation software",
    },
  ],
  education: [
    {
      school: "Georgia Tech",
      href: "https://gatech.edu",
      degree: "MS Computer Science",
      period: "2026 — 2028",
    },
    {
      school: "Stevens Institute of Technology",
      href: "https://stevens.edu",
      degree: "BEng Software Engineering",
      period: "2016 — 2021",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Python",
    "Java",
    "Astro",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "Redux",
    "Jest",
    "React Testing Library",
    "Git",
    "Jira",
    "Balsamiq",
    "Figma",
  ],
  projects: [
    {
      title: "Maneuver",
      href: "https://frc-maneuver.com",
      image: "/maneuver.png",
      alt: "Maneuver robotics scouting dashboard",
      meta: "FRC SCOUTING PWA · REACT/TS",
      note: "wish you were here (at a robotics tournament)",
      description:
        "Offline-first scouting, live match data, and resilient field-side transfers.",
    },
    {
      title: "HudsonHapps",
      href: "https://hudsonhapps.com",
      image: "/HudsonHapps.png",
      alt: "HudsonHapps local deals website",
      meta: "LOCAL DEALS APP · NEXT.JS",
      note: "greetings from Hudson County, NJ",
      description:
        "Local food, drink, and event deals for the Hudson County community.",
    },
    {
      title: "Piper’s Patterns",
      href: "https://aesthetic-bavarois-c0b782.netlify.app/",
      image: "/piper.png",
      alt: "Piper's Patterns ecommerce storefront",
      meta: "SHOPIFY STORE · ASTRO",
      note: "xoxo, the dog bandana business",
      description:
        "A custom responsive Shopify storefront for handmade dog bandanas.",
    },
  ],
  minorProjects: [
    {
      title: "Surface Pro Availability Tracker",
      href: "https://github.com/ShinyShips/check-surface-stock",
      image: "/surface.png",
      description: "Stock alerts via GitHub Actions + Discord webhooks",
    },
    {
      title: "Maneuver Utilities",
      href: "https://github.com/ShinyShips/maneuver-utilities",
      image: "/maneuver.png",
      description: "Set-cover & data tools for FRC scouting, in Python",
    },
  ],
} as const;
