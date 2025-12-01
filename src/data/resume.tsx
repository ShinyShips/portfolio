import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Andy Nguyen",
  initials: "AN",
  url: "https://atn.dev",
  location: "Jersey City, NJ",
  locationLink: "https://www.google.com/maps/place/jersey+city,+nj",
  description:
    "I'm a UX/Design Engineer looking to blend creativity and technology. I love building accessible and user-friendly web applications.",
  summary:
    "In the past, [I pursued a degree in Software Engineering from Stevens Institute of Technology and currently I am pursuing a Master's in Computer Science at Georgia Tech](/#education), I interned at companies like Colgate-Palmolive and L3Harris, and [currently work at L3Harris helping build the next generation of GPS](/#work). I also have the pleasure of being a mentor and alum of FIRST Robotics Team 3314, The Mechanical Mustangs from Clifton, NJ.",
  avatarUrl: "/me.png",
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "andy@atn.dev",
    tel: "+12014566565",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShinyShips",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andy-nguyen-798610126/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "L3Harris Technologies",
      href: "https://www.l3harris.com/",
      badges: [],
      location: "Clifton, NJ",
      title: "Senior Associate Software Engineer",
      logoUrl: "/LHX.png",
      start: "January 2021",
      end: "Present",
      description:
        "I led a complete overhaul of performance and user experience by developing a Single Page Application for a real-time data-intensive touchscreen embedded system using React and Redux. Also designed new user interfaces that maintained style that users were accustomed to while also improving UX by improving visual feedback and minimizing possible distractions using Figma. I'm currently developing solutions for the navigation component of the next-generation ground control segment for GPS satellites to ensure accurate real-time values for position and velocity of space vehicles using Java and Python."
    },
    {
      company: "Colgate-Palmolive",
      badges: [],
      href: "https://www.colgatepalmolive.com/en-us",
      location: "Piscataway, NJ",
      title: "Application & Software Development Intern",
      logoUrl: "/CP.png",
      start: "June 2019",
      end: "December 2020",
      description:
        "I implemented a full-stack internal bug bounty website, increasing security and streamlining the bug-reporting process by providing a centralized platform for reporting and tracking issues, using MongoDB, Express, React, and NodeJS. My next intern project was a front-end for an intern database, resulting in increased efficiency and ease of use for HR processes, using Angular/HTML/SCSS.",
    },
    {
      company: "Thingee Corporation",
      href: "https://thingee.com/",
      badges: [],
      location: "Parsippany, NJ",
      title: "UI/UX Design Intern",
      logoUrl: "/thingee_logo.jfif",
      start: "August 2017",
      end: "December 2017",
      description:
        "I designed web and iOS UI/UX features for slide deck and keynote presentation software, resulting in improved user experience and increased user engagement using Balsamiq Mockups.",
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      href: "https://gatech.edu",
      degree: "Master of Science, Computer Science (MS)",
      logoUrl: "/gt.png",
      start: "2026",
      end: "2028",
    },
    {
      school: "Stevens Institute of Technology",
      href: "https://stevens.edu",
      degree: "Bachelor of Engineering, Software Engineering (BEng)",
      logoUrl: "/stevens.png",
      start: "2016",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Maneuver",
      href: "https://frc-maneuver.com",
      dates: "Jul 2025 - Present",
      active: true,
      description:
        "Built an offline-first progressive web application (PWA) with real-time match data collection, advanced team analytics dashboard, and strategic comparison tools used by competitive robotics teams for tournament decision-making using React/TypeScript. I also created a robust data transfer system featuring QR code generation/scanning and Luby Transform fountain codes for error-resilient large dataset transfers, enabling seamless data sharing between multiple scouts and devices in field conditions.",
      technologies: [
        "React",
        "Typescript",
        "PWA",
        "IndexedDB",
        "TailwindCSS",
        "Shadcn UI",
        "WebRTC",
      ],
      links: [
        {
          type: "Website",
          href: "https://frc-maneuver.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShinyShips/Maneuver",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/maneuver.png",
    },
    {
      title: "HudsonHapps",
      href: "https://hudsonhapps.com",
      dates: "July 2022 - August 2024",
      active: true,
      description:
        "Lead the front-end design and development of a user-friendly, accessible, and responsive web application to aggregate and display user-submitted local food and drink deals and events in the Hudson County community built using Typescript, React, and Tailwind CSS",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB ",
        "TailwindCSS",
        "Shadcn UI",
        "Google Maps API",
      ],
      links: [
        {
          type: "Website",
          href: "https://hudsonhapps.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/HudsonHapps.png",
    },
    {
      title: "Piper's Patterns",
      href: "https://aesthetic-bavarois-c0b782.netlify.app/",
      dates: "January 2024",
      active: true,
      description:
        "A custom responsive shopify store for a small business specializing in handmade dog bandanas built using Astro, React, and Tailwind CSS",
      technologies: [
        "Astro",
        "React",
        "TailwindCSS",
        "Shopify API",
      ],
      links: [
        {
          type: "Website",
          href: "https://aesthetic-bavarois-c0b782.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/piper.png",
    },
  ],
  minorProjects: [
    {
      title: "Surface Pro Stock Tracker",
      href: "https://github.com/ShinyShips/check-surface-stock",
      dates: "November 2025 - Present",
      active: true,
      description:
        "Automated stock monitoring script run on GitHub Actions for Microsoft Surface Pro 10 for Business (Certified Refurbished) with 5G connectivity with a discord webhook notification system.",
      technologies: [
        "Python",
        "Selenium",
        "Discord Webhooks",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShinyShips/check-surface-stock",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/surface.png",
    },
    {
      title: "Maneuver Utilities",
      href: "https://github.com/ShinyShips/maneuver-utilities",
      dates: "July 2022 - August 2024",
      active: true,
      description:
        "A collection of utilities and tools to support the Maneuver scouting application and general FRC scouting, including a greedy set cover algorithm to find minimum number of teams needed to cover all events in a district and a utility to filter out unwanted teams from scouting data using the The Blue Alliance API, built using Python.",
      technologies: [
        "Python",
        "The Blue Alliance API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShinyShips/maneuver-utilities",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    image: "/maneuver.png",    },
  ],
} as const;
