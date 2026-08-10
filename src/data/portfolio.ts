export interface WorkItem {
  company: string;
  href: string;
  summary: {
    company?: string;
    period: string;
    role: string;
    detail: string;
  };
  details: {
    period: string;
    role: string;
    logo?: string;
    responsibilities: readonly string[];
    technologies: readonly string[];
  };
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
  sourceHref?: string;
  image: string;
  alt: string;
  descriptionLead?: string;
  description: string;
  meta: string;
  note: string;
  period: string;
  technologies: readonly string[];
}

export interface ParcelProject {
  title: string;
  href: string;
  image: string;
  summary: string;
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
  pages: {
    work: PageIntroduction;
    projects: PageIntroduction;
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

export interface PageIntroduction {
  eyebrow: string;
  titleLead: string;
  title: string;
  introduction: string;
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
  pages: {
    work: {
      eyebrow: "EMPLOYMENT RECORD · 2017 — PRESENT",
      titleLead: "RE",
      title: "Work",
      introduction:
        "The full duty manifest — every posting, opened and itemized.",
    },
    projects: {
      eyebrow: "POSTCARDS & PARCELS · THE FULL COLLECTION",
      titleLead: "ENCL",
      title: "Projects",
      introduction:
        "Every enclosure, unpacked — what it is, what it’s built with, and where it lives.",
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
    ". I interned at Colgate-Palmolive and L3Harris, and today I’m creating ",
    {
      text: "a modern metadata-driven React application at L3Harris",
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
      summary: {
        period: "2021 — NOW",
        role: "Sr. Associate SWE",
        detail: "Metadata-driven React app",
      },
      details: {
        period: "JAN 2021 — PRESENT",
        role: "Senior Associate Software Engineer",
        logo: "/LHX.png",
        responsibilities: [
          "Led a complete overhaul of performance and UX by developing a Single Page Application for a real-time, data-intensive touchscreen embedded system using React and Redux.",
          "Designed new user interfaces in Figma that kept the style users were accustomed to while improving visual feedback and minimizing distractions.",
          "Currently creating a modern metadata-driven React application.",
        ],
        technologies: ["React", "Redux", "Java", "Python", "Figma"],
      },
    },
    {
      company: "Colgate-Palmolive",
      href: "https://www.colgatepalmolive.com/en-us",
      summary: {
        period: "2019 — 2020",
        role: "App & Software Dev Intern",
        detail: "Internal tools & web products",
      },
      details: {
        period: "JUN 2019 — DEC 2020",
        role: "Application & Software Development Intern",
        logo: "/CP.png",
        responsibilities: [
          "Implemented a full-stack internal bug-bounty website — a centralized platform for reporting and tracking issues — using MongoDB, Express, React, and Node.js.",
          "Built the front-end for an intern database, streamlining HR processes, using Angular, HTML, and SCSS.",
        ],
        technologies: [
          "MongoDB",
          "Express",
          "React",
          "Node.js",
          "Angular",
          "SCSS",
        ],
      },
    },
    {
      company: "Thingee Corporation",
      href: "https://thingee.com/",
      summary: {
        company: "Thingee Corp.",
        period: "2017",
        role: "UI/UX Design Intern",
        detail: "Presentation software",
      },
      details: {
        period: "AUG — DEC 2017",
        role: "UI/UX Design Intern",
        responsibilities: [
          "Designed web and iOS UI/UX features for slide-deck and keynote presentation software, improving user experience and engagement, using Balsamiq Mockups.",
        ],
        technologies: ["Balsamiq", "UI/UX"],
      },
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      href: "https://gatech.edu",
      degree: "MS, Computer Science",
      period: "2026 — 2028",
    },
    {
      school: "Stevens Institute of Technology",
      href: "https://stevens.edu",
      degree: "BEng, Software Engineering",
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
      period: "JUL 2025 — PRESENT",
      sourceHref: "https://github.com/ShinyShips/Maneuver",
      technologies: [
        "React",
        "TypeScript",
        "PWA",
        "IndexedDB",
        "TailwindCSS",
        "shadcn UI",
        "WebRTC",
      ],
      descriptionLead:
        "Open-source, offline-first scouting and strategy suite for FIRST Robotics Competition teams, reaching 8,000+ users since 2025.",
      description:
        "Maneuver combines match and pit scouting, interactive analytics, alliance selection, and match-strategy planning in a PWA designed for the unreliable connectivity of robotics competitions. Built on a year-agnostic React/TypeScript framework, Maneuver stores data locally with IndexedDB and supports resilient multi-device data sharing through Luby Transform QR fountain codes and WebRTC.",
    },
    {
      title: "Team 3314 Website",
      href: "https://frc3314.com/",
      sourceHref: "https://github.com/ShinyShips/team-3314-website",
      image: "/team-3314.jpg",
      alt: "Mechanical Mustangs Team 3314 website homepage",
      meta: "FRC TEAM WEBSITE · ASTRO",
      note: "built for the Mechanical Mustangs",
      period: "JUL 2026",
      technologies: [
        "Astro",
        "JavaScript",
        "CSS",
        "Netlify Functions",
        "Google APIs",
      ],
      description:
        "A fast, accessible public website for FRC Team 3314, the Mechanical Mustangs of Clifton High School. The static-first Astro build includes season archives, sponsor and alumni data, live calendar and Drive-document integrations, and protected team documents through a Netlify Function.",
    },
    {
      title: "HudsonHapps",
      href: "https://hudsonhapps.com",
      image: "/HudsonHapps.png",
      alt: "HudsonHapps local deals website",
      meta: "LOCAL DEALS APP · NEXT.JS",
      note: "greetings from Hudson County, NJ",
      period: "JUL 2022 — AUG 2024",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "TailwindCSS",
        "shadcn UI",
        "Google Maps API",
      ],
      description:
        "Led the front-end design and development of a user-friendly, accessible, responsive web app aggregating user-submitted local food & drink deals and events across the Hudson County community.",
    },
    {
      title: "Piper's Patterns",
      href: "https://aesthetic-bavarois-c0b782.netlify.app/",
      image: "/piper.png",
      alt: "Piper's Patterns ecommerce storefront",
      meta: "SHOPIFY STORE · ASTRO",
      note: "xoxo, the dog bandana business",
      period: "JAN 2024",
      technologies: [
        "Astro",
        "React",
        "TailwindCSS",
        "Shopify API",
        "Neobrutalism",
      ],
      description:
        "A custom responsive Shopify store for a small business specializing in handmade dog bandanas — neobrutalist design, built on Astro with React islands.",
    },
  ],
  minorProjects: [
    {
      title: "Surface Pro Availability Tracker",
      href: "https://github.com/ShinyShips/check-surface-stock",
      image: "/surface.png",
      summary: "Stock alerts via GitHub Actions + Discord webhooks",
      description:
        "Automated stock monitoring on GitHub Actions for the Surface Pro 10 (Certified Refurbished, 5G), with Discord webhook alerts. Python + Selenium.",
    },
    {
      title: "Maneuver Utilities",
      href: "https://github.com/ShinyShips/maneuver-utilities",
      image: "/maneuver.png",
      summary: "Set-cover & data tools for FRC scouting, in Python",
      description:
        "Utilities for FRC scouting: a greedy set-cover algorithm for minimum event coverage and team-filtering tools via The Blue Alliance API, in Python.",
    },
  ],
} as const;
