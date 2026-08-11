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
    narrative?: readonly string[];
    responsibilities: readonly string[];
    technologies: readonly string[];
  };
}

export interface EducationItem {
  school: string;
  href: string;
  degree: string;
  focus?: string;
  period: string;
}

export interface SkillGroup {
  title: string;
  skills: readonly string[];
}

export interface ManeuverCaseStudy {
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  introduction: string;
  website: string;
  source: string;
  heroImage: {
    src: string;
    alt: string;
    caption: string;
  };
  metrics: readonly {
    value: string;
    label: string;
  }[];
  challenge: string;
  competitionIntroduction: string;
  constraints: readonly {
    label: string;
    title: string;
    description: string;
  }[];
  architectureIntroduction: string;
  architecture: readonly {
    need: string;
    decision: string;
    outcome: string;
  }[];
  strategyIntroduction: string;
  workflows: readonly {
    number: string;
    title: string;
    description: string;
    image: string;
    alt: string;
  }[];
  userImpact: {
    pullquote: string;
    stories: readonly {
      label: string;
      title: string;
      paragraphs: readonly string[];
    }[];
    fieldNote: {
      label: string;
      title: string;
      description: string;
    };
  };
  operations: readonly string[];
}

export interface PostcardProject {
  title: string;
  href: string;
  sourceHref?: string;
  caseStudyHref?: string;
  featured?: boolean;
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
  about: readonly string[];
  contactIntroduction: string;
  footer: string;
  social: {
    github: string;
    linkedin: string;
  };
  work: readonly WorkItem[];
  education: readonly EducationItem[];
  skills: readonly SkillGroup[];
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
    "Design Engineer working at the intersection of frontend engineering, UI/UX, and human-computer interaction. Building production React experiences for complex systems.",
  hero: {
    eyebrow: "FROM THE DESK OF ANDY NGUYEN",
    titleLead: "ATTN",
    titleRecipient: "You",
    introduction:
      "Special delivery — a Design Engineer turning complex systems into intuitive interfaces. Design thinking, production React, postage paid.",
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
    "I’m a Design Engineer with 5+ years of experience working at the intersection of front-end engineering, UI/UX, and human-computer interaction. I enjoy taking complex workflows, figuring out how they should behave for the people using them, and building the production experience.",
    "At L3Harris, I design and develop React/Redux interfaces for complex defense systems. Outside of work, I created Maneuver, an open-source FRC scouting and strategy platform used by 8,000+ people across 15 countries, and mentor FIRST Robotics Team 3314, The Mechanical Mustangs. I’m currently pursuing an M.S. in Computer Science with an HCI specialization at Georgia Tech.",
  ],
  contactIntroduction:
    "Have a design, engineering, or somewhere-in-between problem worth talking about? Send it my way.",
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
        detail: "Design Engineering & React",
      },
      details: {
        period: "JAN 2021 — PRESENT",
        role: "Senior Associate Software Engineer",
        logo: "/LHX.png",
        narrative: [
          "My work at L3Harris has spanned front-end engineering, interaction design, and mission-critical software across multiple defense programs.",
          "I currently develop and maintain a metadata-driven React/Redux frontend for a customer-facing data-management platform, where forms, validation rules, and migration workflows are generated dynamically from backend-defined metadata. The work sits at an interesting intersection of system design and interaction design: creating reusable interface patterns that remain understandable even when the underlying content and workflows are defined dynamically.",
          "Previously, I spent three years developing a real-time, data-intensive React/Redux application for an embedded touchscreen system. I also designed operator interfaces that preserved established interaction patterns while improving feedback and reducing distraction. Later, I developed Java and Python software for the next-generation GPS ground control system before returning to front-end development.",
        ],
        responsibilities: [],
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
      degree: "M.S. Computer Science",
      focus: "Human-Computer Interaction",
      period: "2026 — 2028",
    },
    {
      school: "Stevens Institute of Technology",
      href: "https://stevens.edu",
      degree: "B.E. Software Engineering",
      period: "2016 — 2021",
    },
  ],
  skills: [
    {
      title: "Design + HCI",
      skills: [
        "Figma",
        "Interaction Design",
        "Prototyping",
        "Responsive Design",
        "Accessibility",
      ],
    },
    {
      title: "Front-End Engineering",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Redux",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Next.js",
        "Astro",
      ],
    },
    {
      title: "Product Engineering",
      skills: [
        "Jest",
        "React Testing Library",
        "Git",
        "Node.js",
        "Offline-First Applications",
        "Data Visualization",
      ],
    },
  ],
  projects: [
    {
      title: "Maneuver",
      href: "https://frc-maneuver.com",
      caseStudyHref: "/projects/maneuver",
      featured: true,
      image: "/maneuver.png",
      alt: "Maneuver robotics scouting dashboard",
      meta: "FRC STRATEGY PLATFORM · 8K+ USERS · 15 COUNTRIES",
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
      meta: "TEAM WEBSITE · DESIGN + ASTRO",
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
        "A responsive local discovery experience for finding user-submitted food, drink, and event deals across Hudson County. I designed and built the application using React, TypeScript, Next.js, and Tailwind CSS, with an emphasis on making geographically scattered information easy to browse and discover.",
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

export const maneuverCaseStudy: ManeuverCaseStudy = {
  metadata: {
    title: "Maneuver Case Study",
    description:
      "How Andy Nguyen designed, built, and operates an offline-first FRC scouting and strategy platform used by 8,000+ people across 15 countries.",
  },
  eyebrow: "CASE FILE · PRODUCT 001 · 2025 — PRESENT",
  title: "Strategy that works offline",
  introduction:
    "An open-source FRC scouting and strategy platform designed and engineered for the real conditions of robotics competition.",
  website: "https://frc-maneuver.com",
  source: "https://github.com/ShinyShips/Maneuver",
  heroImage: {
    src: "/maneuver.png",
    alt: "Maneuver match strategy workspace showing alliance data and a drawn field plan",
    caption:
      "Match strategy brings field planning and scouting data into one shared workspace.",
  },
  metrics: [
    { value: "8,000+", label: "people" },
    { value: "15 countries", label: "global reach" },
    { value: "End to end", label: "design + engineering" },
  ],
  challenge:
    "How do you design a data-intensive strategy platform for people using phones, tablets, and laptops inside crowded robotics competitions where connectivity cannot be trusted?",
  competitionIntroduction:
    "Maneuver serves two very different modes of attention: scouts recording rapid observations in the stands and analysts making consequential decisions from dense information. The interface has to support both without assuming a quiet room, a large screen, or a reliable network.",
  constraints: [
    {
      label: "Fast input",
      title: "Scouts need speed",
      description:
        "Large touch targets, short paths, and game-specific inputs help people record a match quickly in a loud, time-constrained environment.",
    },
    {
      label: "Dense analysis",
      title: "Strategists need context",
      description:
        "Analytics must reveal patterns without hiding the underlying match data that lets a team trust and act on the result.",
    },
    {
      label: "Any device",
      title: "Teams bring what they have",
      description:
        "The same workflows have to remain clear across phones in the stands, tablets in the pit, and laptops at the strategy table.",
    },
  ],
  architectureIntroduction:
    "The technical architecture followed from the experience the product needed to guarantee. Each constraint became a system decision.",
  architecture: [
    {
      need: "Offline requirement",
      decision: "IndexedDB",
      outcome:
        "Every core workflow remains available when venue connectivity disappears.",
    },
    {
      need: "No server requirement",
      decision: "Local-first architecture",
      outcome:
        "Teams can start scouting without deploying or maintaining infrastructure.",
    },
    {
      need: "Multiple scouting devices",
      decision: "QR fountain codes + WebRTC",
      outcome:
        "Data moves between devices through resilient, flexible transfer paths.",
    },
    {
      need: "Different games every year",
      decision: "Year-agnostic framework",
      outcome:
        "Annual game rules can change without rebuilding the product from scratch.",
    },
  ],
  strategyIntroduction:
    "The product follows the decision-making journey from observation to action. Each workflow exists because the next one depends on it.",
  workflows: [
    {
      number: "01",
      title: "Match scouting",
      description:
        "Capture what a robot actually does, quickly and consistently.",
      image: "/maneuver-scouting.png",
      alt: "Maneuver autonomous match scouting interface with a tappable field map and recent actions",
    },
    {
      number: "02",
      title: "Analytics",
      description:
        "Turn many observations into comparable performance patterns.",
      image: "/maneuver-analytics.png",
      alt: "Maneuver strategy overview with a performance chart and dense team statistics table",
    },
    {
      number: "03",
      title: "Pick lists",
      description:
        "Help teams weigh capability, reliability, and strategic fit.",
      image: "/maneuver-pick-lists.png",
      alt: "Maneuver pick-list interface showing available teams and alliance selections",
    },
    {
      number: "04",
      title: "Match strategy",
      description:
        "Bring alliance data into a shared plan teams can use on the field.",
      image: "/maneuver.png",
      alt: "Maneuver match strategy interface with a drawn field plan and alliance data",
    },
  ],
  userImpact: {
    pullquote:
      "Maneuver reached 8,000+ users across 15 countries, ranging from teams building their first scouting program to teams competing at the FIRST World Championship.",
    stories: [
      {
        label: "EVENT STORY 01",
        title: "The 31st-ranked robot",
        paragraphs: [
          "A defense-focused robot entered an event ranked 31st—a position that made it easy to overlook through standings alone.",
          "Maneuver’s scouting data surfaced the robot’s strategic value on defense, revealing a contribution the ranking did not capture.",
          "The moment clarified the product’s job: not to replace team judgment, but to make the evidence visible when a single number flattens it.",
        ],
      },
      {
        label: "EVENT STORY 02",
        title: "From the stands to Worlds",
        paragraphs: [
          "At the FIRST World Championship, teams relied on the same Maneuver workflows in the highest-pressure environment in the program.",
          "Seeing the product in use at the sport’s largest event made its reach tangible—and made stability, edge cases, and support part of the design experience.",
        ],
      },
    ],
    fieldNote: {
      label: "FIELD NOTE 01",
      title: "Rank is a signal, not the strategy.",
      description:
        "The interface should make overlooked capabilities visible while preserving the evidence behind the recommendation.",
    },
  },
  operations: [
    "Once thousands of people were relying on Maneuver during competitions, the way I approached development changed. Bugs could affect teams competing that weekend. New features had to be balanced against stability. User reports exposed workflows, devices, and edge cases I hadn’t anticipated.",
    "Operating Maneuver taught me to treat design as an ongoing conversation with users rather than something completed before implementation.",
  ],
};
