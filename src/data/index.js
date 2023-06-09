import {
  mobile,
  threeddev,
  oop,
  web,
  javascript,
  html,
  css,
  reactjs,
  typescript,
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
  algopanel,
  gamehub,
  python,
  van_life,
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
    icon: threeddev,
  },
  {
    title: "Object Orient Programming",
    icon: oop,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Figma",
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
      "Conducted experimental research in Dr. Vicki Meli’s (vmeli@mta.ca) & Dr. Stephen Westcott’s (swestcott@mta.ca) with a focus on nanomaterials",
      "Taught and supervised laboratory activities",
      "Completed and received a HBSc. in Chemistry",
    ],
  },
  {
    title: "Nanotechnologist",
    company_name: "BIOX Research Group - KTH",
    icon: autohouse,
    iconBg: "#FFFFFF",
    date: "November 2018 - May 2020",
    points: [
      "Conducted experimental research on the green synthesis of thermoelectric material",
      "An independent and self driven work environment, with supervision from Dr. Bejan Hamawandi (bejan@kth.se)",
      "Involved in the reaction simulation software, Meduza",
      "Completed and received an MSc. in Electrical Engineering",
    ],
  },
  {
    title: "Material Engineer",
    company_name: "Autonomous House Group",
    icon: algowatt,
    iconBg: "#FFFFFF",
    date: "Jan 2020 - Feb 2022",
    points: [
      "Design and research of multibiomaterials for integration in the built environment",
      "Included extensive computation material simulations",
      "Completed and received an MSc. in Bio-Integrated Design",
    ],
  },
  {
    title: "Computational & Material Developer",
    company_name: "UCL Bio-Integrated Design",
    icon: nanocellum,
    iconBg: "#FFFFFF",
    date: "Jan 2021 - Jan 2023",
    points: [
      "Design and research of biomaterials to create two product, Algowatt and Nanocellum",
      "The developed light product and electrical system was for integration in the built environment",
      "Works developed here was present at the BPro Show 2022, London, UK",
    ],
  },
];

const projects = [
  {
    name: "Algowatt",
    description:
      "A product design platform that allows users to discover the world of bio-integrated design. It focuses on a previous project in which the bio-based panel produces electricity from microalgae, comparing to other forms of electricity.",
    tags: [
      {
        name: "React, Javascript, scss",
        color: "bluetext",
      },
      {
        name: "Web-Project Created 2023",
        color: "greentext",
      },
      {
        name: "Project Developed 2022",
        color: "pinktext",
      },
    ],
    image: algopanel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Nanocellum",
    description:
      "A product design platform that allows users to discover the world of bio-integrated design. It focuses on a previous project in which the bio-based lamp is made of sustainibly grown transparent cellulose. ",
    tags: [
      {
        name: "React, Git, Tailwindcss",
        color: "bluetext",
      },
      {
        name: "Web-Project Created 2023",
        color: "greentext",
      },
      {
        name: "Project Developed 2022-2023",
        color: "pinktext",
      },
    ],
    image: nanocellumpanel,
    source_code_link: "https://github.com/minari314159/Nanocellum",
    live_link: "https://nanocellum.vercel.app/",
  },
  {
    name: "Game Hub",
    description:
      "A comprehensive gameing directory, for not only keeping track of the games you own, but saving games you are intrested in. Games can be filtered not only by platform, rating and date added but also by user previous preferences. Key skill implementation involved the use of RAWG API, ReactQuery, React Router and Zustand. ",
    tags: [
      {
        name: "React, Typescript, Chakra UI",
        color: "bluetext",
      },
      {
        name: "Web-Project Created 2023",
        color: "greentext",
      },
      {
        name: "Project Developed 2023",
        color: "pinktext",
      },
    ],
    image: gamehub,
    source_code_link: "https://github.com/minari314159/Gamehub",
    live_link: "https://game-7rijhkuik-minari314159.vercel.app",
  },
  {
    name: "VanBnB",
    description:
      "An AirBnb style booking site for van rentals tailored towards promoting local travel. Key skill implementation involved the use of a fake API, ReactQuery, React Router and Data Driven Design.",
    tags: [
      {
        name: "React, Javascript, TailwindCSS",
        color: "bluetext",
      },
      {
        name: "Web-Project Created 2023",
        color: "greentext",
      },
      {
        name: "Project Developed 2023",
        color: "pinktext",
      },
    ],
    image: van_life,
    source_code_link: "https://github.com/",
  },
  {
    name: "Autonomous House",
    description:
      "An interactive web-based platform that allows users to scroll through the Autonomous House a visonary project developed with the Autonomous House Group. The web-app displays this envisioned architecture in hot arid environments where thermoelectric waste-heat recovery would be most useful ",
    tags: [
      {
        name: "react, threejs, tailwindCSS",
        color: "bluetext",
      },
      {
        name: "Web-Project Created 2023",
        color: "greentext",
      },
      {
        name: "Project Developed 2021-2022",
        color: "pinktext",
      },
    ],
    image: autohousepanel,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
