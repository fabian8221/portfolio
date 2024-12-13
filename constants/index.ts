import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/fabian-paulino-94314b87",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/fabian8221",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Swiss Life",
    description:
      'The project successfully provided SwissLife clients with a powerful tool for investment and pension planning, enhancing their ability to make informed financial decisions and secure their future.',
    image: "/projects/swiss-life.jpg",
    link: "https://www.swisslife.com/en/home.html",
    technologiesStack: ["React", "Node JS", "Typescript", "Gitlab", "HTML5", "CSS3", "Chakra UI", "Express JS", "Passport JS"],
  },
  {
    title: "Wakefern",
    description:
      'We significantly improved the performance and usability of Wakeferns e-commerce platform, contributing to a better user experience and more efficient backend processes, ultimately supporting the companys multi-billion dollar operations.',
    image: "/projects/wakefern.jpg",
    link: "https://www2.wakefern.com/",
    technologiesStack: ["React", ".NET", "Typescript", "Gitlab", "HTML5", "CSS3", "Material UI", "SQL Server", "Stored PRocedures"],
  },
  {
    title: "Harris Teeter",
    description:
      'Bug Fixing: Identified and resolved various bugs to ensure a smoother and more reliable platform performance.' + 
      'SQL Optimization: Modified and optimized SQL stored procedures and queries to enhance database efficiency and speed up data processing.'+
      'Deployment: Successfully deployed new features and updates, ensuring minimal downtime and seamless integration into the existing system.',
    image: "/projects/harristeeter.png",
    link: "https://www.harristeeter.com/",
    technologiesStack: ["React", ".NET", "Typescript", "Gitlab", "Docker", "Microsoft Azure", "Chakra UI", "SQL Server", "Stored Procedures", "SQL Transactions"],
  },
  {
    title: "Mensura",
    description:
      'The project successfully enhanced Mensura Clinics ability to manage occupational health risks, improved doctor-patient interactions, and contributed to better health outcomes through targeted risk assessments and personalized care.',
    image: "/projects/mensura.jpg",
    link: "https://www.mensura.be/nl",
    technologiesStack: ["React", ".NET", "Typescript", "Gitlab", "HTML5", "CSS3", "Google Cloud", "Chakra UI", "Express JS", "Docker"],
  },
  {
    title: "Plannet",
    description:
      'Plannet is your personal travel concierge. We curate, text and book the best itinerary for your next trip.',
    image: "/projects/plannet.avif",
    link: "https://travelplaning.netlify.app",
    technologiesStack: ["Next JS", "Tailwind", "Typescript", "Tailwind", "Chakra UI", "AWS", "Stripe Integration"],
  },
  {
    title: "Citi Group",
    description:
      'The project successfully delivered a powerful tool for Citi Group clients, enhancing their investment and pension planning capabilities. This empowered them to make informed financial decisions and secure their financial future.',
    image: "/projects/citi-group.avif",
    link: "https://www.citigroup.com/global",
    technologiesStack: ["React", "Node JS", "Typescript", "Gitlab", "Chakra UI", "Express JS", "Docker"],
  },
  {
    title: "Trustteam",
    description:
      'The project significantly improved the efficiency and effectiveness of clinical operations in large healthcare facilities across Belgium and the Netherlands, providing them with state-of-the-art software solutions for better patient care and doctor management.',
    image: "/projects/trustteam.png",
    link: "https://www.trustteam.be/?langue=nl",
    technologiesStack: ["React", ".NET", "Typescript", "Javascript", "SQL Server", "Docker"],
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/fabian8221",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Github",
        icon: RxGithubLogo,
        link: "https://github.com/fabian8221",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/fabian-paulino-94314b87",
      },
    ],
  },
  
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/fabian8221/portfolio",
};
