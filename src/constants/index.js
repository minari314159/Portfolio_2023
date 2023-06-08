import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  algowatt,
  autohouse,
  nanotech,
  nanocellum,
  autohousepanel,
  nanocellumpanel,
  algopanel
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "3D Developer",
    icon: backend,
  },
  {
    title: "UI Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Junior Chemist",
    company_name: "Mount Allison University",
    icon: nanotech,
    iconBg: "#FFFFFF",
    date: "November 2014 - May 2018",
    points: [
      "Developing and maintaining ",
      "Completed and received a HBSc. in Chemistry"
    ],
  },
  {
    title: "Nanotechnologist",
    company_name: "KTH Royal Institute of Technology- Alba Nova",
    icon: autohouse,
    iconBg: "#FFFFFF",
    date: "November 2018 - May 2020",
    points: [
      "Developing and maintaining ",
      "Completed and received an MSc. in ELectrical Engineering"
    ],
  },
  {
    title: "Material Engineer",
    company_name: "Autonomous House Group",
    icon: algowatt,
    iconBg: "#FFFFFF",
    date: "Jan 2020 - Feb 2022",
    points: [
      "Developing and maintaining ",
      "Completed and received an MSc. in Bio-Integrated Design"
    ],
  },
  {
    title: "Computational & Material Developer",
    company_name: "UCL Bio-Integrated Design",
    icon: nanocellum,
    iconBg: "#FFFFFF",
    date: "Jan 2021 - Jan 2023",
    points: [
      "Developing and maintaining "
    ],
  },
];
 
const projects = [
  {
    name: "Autonomous House",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: autohousepanel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Algowatt",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: algopanel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Nanocellum",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nanocellumpanel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Holobiont",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nanocellumpanel,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };