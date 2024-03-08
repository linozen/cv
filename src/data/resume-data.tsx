import { GitHubIcon } from "@/components/icons";
import { ParabolLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Linus Sehn",
  initials: "LZ",
  location: "Mannheim, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Mannheim",
  about:
    "Full-stack software engineer and system administrator available for freelance work. Currently learning to become a psychoterapist.",
  summary:
    "I'm a generalist with a background in political science, economics, and, most recently, psychology. I'm fascinated by the way technology shapes human experience. When I'm not learning new things, I work as a full-stack software engineer and system administrator.",
  avatarUrl: "/avatar.jpg",
  personalWebsiteUrl: "https://exocortex.sehn.dev",
  contact: {
    email: "hello@linozen.com",
    tel: "+49 176 00000000",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/linozen",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Mannheim",
      degree: "BSc in Psychology",
      start: "2023",
      end: "2026",
    },
    {
      school: "FU Berlin, HU Berlin, University of Potsdam",
      degree: "MA in International Relations",
      start: "2017",
      end: "2022",
    },
    {
      school: "University of Manchester",
      degree: "BA(Hons) in Politics, Philosophy & Economics",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Otto Selz Institute",
      link: "https://fsfe.org",
      badges: ["On-site", "10h/week"],
      title: "Technical Consultant",
      logo: ParabolLogo,
      start: "2024",
      end: "current",
      description:
        "Responsible for the internal IT infrastructure and the technical aspects of conducting psychological experiments (e.g. eye tracking).",
    },
    {
      company: "Free Software Foundation Europe",
      link: "https://fsfe.org",
      badges: ["Remote", "Full-time"],
      title: "Senior Project Manager & System Administrator",
      logo: ParabolLogo,
      start: "2021",
      end: "2023",
      description:
        "Modernized the FSFE's fully self-owned, free-software infrastructure stack. Implemented new features to internal donation and member management tools. Won the EU Datathon 2022 (25.000€) with the TEDective project. Worked on the REUSE 1.0.0 release. ",
    },
  ],
  // skills: [
  //   "JavaScript",
  //   "TypeScript",
  //   "React/Next.js/Remix",
  //   "Python",
  //   "PostgreSQL",
  // ],
  projects: [
    {
      title: "Excortex",
      techStack: ["TypeScript", "Non-linear thinking", "Zettelkasten"],
      description:
        "My personal zettelkasten and blog, built with Quartz. I use it to improve my thinking.",
      link: {
        label: "exocortex.sehn.dev",
        href: "https://exocortex.sehn.dev/",
      },
    },
    {
      title: "TEDective",
      techStack: [
        "Public procurement",
        "TypeScript",
        "Next.js",
        "Python",
        "KuzuDB",
        "Graph Analytics",
      ],
      description:
        "Tool to make European public procurement data more accessible and transparent",
      link: {
        label: "tedective.org",
        href: "https://tedective.org/",
      },
    },
  ],
} as const;
