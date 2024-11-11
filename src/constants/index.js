import {
  nsl,
  java,
  py,
  sql,
  r,
  sas,
  unix,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "SAS",
    icon: sas,
  },
  {
    name: "Unix",
    icon: unix,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "(Junior) Software Developer",
    company_name: "Novum Soft Limited | London, England",
    icon: nsl,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - March 2023",
    points: [
      "Collaborated with fellow engineers to evaluate software and hardware interfaces",
      "Analyzed data to coordinate the installation of new systems or modification of existing systems.",
      "Analyzed proposed technical solutions based on customer requirements.",
      "Developed web applications using Node.JS and React, enhancing backend functionality and frontend interactivity.",
      "Integrated RESTful APIs with Node.JS to support dynamic front-end built with React.",
      "Created reusable React components for efficient UI design and maintenance.",
      "Optimized server-side performance with Node.JS for scalable user experiences.",
    ],
  },
];

const testimonials = [
//ERROR when deleted. Check back again.

];

const projects = [
  {
    name: "FitTrack",
    description:
      "FitTrack Fitness Tracker App tracks fitness goals, counts calories, logs exercises, and graphs progression for visual data.",
    tags: [
      {
        name: "swift",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MatthewPiatek21/FitTrack",
  },
  {
    name: "Matt Bot / Marvis",
    description:
      "Web application that A Discord AI bot that welcomed new members and engaged users with interactive games.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MatthewPiatek21/Discord-Bot",
  },
  {
    name: "Dylan Invaders",
    description:
      "Do you have what it takes to defeat Dylan? Programmed using the PyGame library and inspired by the classic arcade game; Space Invaders. Defeat various waves of enemies to receive a higher score. Classic music is integrated into the game as well as custom enemy pictures.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MatthewPiatek21/Dylan-Invaders-Game",
  },
];

export { services, technologies, experiences, testimonials, projects };
