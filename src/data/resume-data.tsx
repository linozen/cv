import { GitHubIcon } from "@/components/icons";
import { ParabolLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Linus Sehn",
  initials: "LZ",
  location: "Mannheim, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Mannheim",
  avatarUrl: "/avatar.jpg",
  about:
    "Generalist geek with an evolving focus on psychotherapy. my academic journey includes a master's degree in international relations and a professional background in open-source advocacy, system administration and software engineering. i'm currently training to become a psychotherapist, aiming to integrate this new dimension into my work. available for freelance projects that benefit from a broad technical expertise and a deep understanding of human and international dynamics.",
  summary:
    "i am a professional with a diverse skill set, rooted in a foundation of political science, philosophy, economics, and now, psychology. My career thus far has spanned roles in open-source software engineering, system administration, complemented by a master's degree in international relations. With several years of experience managing projects and administering systems, I'm adept at navigating complex technical environments and delivering solutions that meet diverse needs. Currently training as a psychotherapist, I am keen on applying a huminst perspective to my technical work, aiming to improve our individual and collective relationships with emerging technologies. My goal is to leverage my background to address challenges at the intersection of technology, society, and individual well-being.",
  personalWebsiteUrl: "https://exocortex.sehn.dev",
  contact: {
    email: "hi@sehn.dev",
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
      link: "https://www.uni-mannheim.de/en/osi/",
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
    {
      company: "Stiftung Neue Verantwortung (now Interface)",
      link: "https://www.stiftung-nv.de/",
      badges: ["On-Site", "10h/week"],
      title: "Research Assistant",
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description:
        "Supported the GUARDINT project by conducting data analysis and developing web-based visualisations.",
    },
    {
      company: "Federal Foreign Office",
      link: "https://www.auswaertiges-amt.de/en/",
      badges: ["On-Site", "Full-time"],
      title: "Internship",
      logo: ParabolLogo,
      start: "Jan 2020",
      end: "Apr 2020",
      description:
        "Analysed countries' positions on allowing foreign companies to provide 5G infrastructure using both confidential and open sources.",
    },
    {
      company: "Free University of Berlin",
      link: "https://blogs.fu-berlin.de/tatas/team/",
      badges: ["On-Site", "12h/week"],
      title: "Research Assistant to Prof. Dr. Lora Anne Viola Ph.D.",
      logo: ParabolLogo,
      start: "Aug 2019",
      end: "Dec 2019",
      description:
        "Presented a paper at and supported the organisation of the project’s section at the 2019 ECPR Conference and participated in and contributed to the project’s workshop in Krakow hosting some of the leading scholars in the field of surveillance studies.",
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
        "Tool to make European public procurement data more accessible and transparent. Won the 2022 EU Datathon.",
      link: {
        label: "tedective.org",
        href: "https://tedective.org/",
      },
    },
  ],
} as const;
