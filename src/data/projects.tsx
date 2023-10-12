import { title } from "process";
import { ProjectInfo } from "../models/projects";
import { StackLabel, stack } from "./stackIcons";
import pastabookDesktop from "../graph/pastabook_desktop.webp";
import pastabookMobile from "../graph/pastabook_mobile.webp";
import playiteasyScreen from "../graph/playiteasy.webp";
import scalesScreen from "../graph/scales.webp";
import photo from "../graph/foto300px.webp";

const pastabookStack: StackLabel[] = [
  "React.js",
  "React Router",
  "TypeScript",
  "Bootstrap",
];

const playItEasyStack: StackLabel[] = [
  "React.js",
  "React Router",
  "Redux",
  "TypeScript",
  "Bootstrap",
];

const chordsAndScalesStack: StackLabel[] = [
  "React.js",
  "JavaScript",
  "Material-UI",
  "CSS",
];

export const projects: ProjectInfo[] = [
  {
    title: "Pastabook",
    stack: stack.filter((item) => pastabookStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/pastabook/",
    repositoryUrl: "https://github.com/andrzejkukuryk/pastabook",
    description:
      "The application enables users to search for authentic Italian pasta recipes, browse through them, and, upon registration, provides the ability to rate recipes, bookmark favorites, and even contribute their own recipes. \nThis project was developed with the aim of gaining proficiency in TypeScript, React's useContext, React Router, and Bootstrap 5. Furthermore, it leverages the Google Firebase REST API for content retrieval and storage, as well as for secure user authentication.",
    imgDesktop: pastabookDesktop,
    imgMobile: pastabookMobile,
  },
  {
    title: "Play It Easy",
    stack: stack.filter((item) => playItEasyStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/playiteasy/",
    repositoryUrl: "https://github.com/andrzejkukuryk/playiteasy",
    description:
      "The application provides users with the ability to explore, filter, sort, and search through a catalog that contains links to my YouTube videos, music note sheets, and guitar tabs. \nThis project was developed with the goal of becoming proficient in Redux. It relies on the Google Firebase REST API to retrieve its content.",
    imgDesktop: playiteasyScreen,
  },
  {
    title: "Chords & Scales",
    stack: stack.filter((item) => chordsAndScalesStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/music-theory/",
    repositoryUrl: "https://github.com/andrzejkukuryk/music-theory",
    description:
      "This is my debut React application, designed to enable users to compose music notes, scales, and chords, or to play straightforward melodies using the onscreen keyboard. \nThe primary purpose behind this project was to gain proficiency in React, JavaScript, and Material-UI. \nPlease note that it is fully functional exclusively on desktop devices.",
    imgDesktop: scalesScreen,
  },
];
