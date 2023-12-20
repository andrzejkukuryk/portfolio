import { ProjectInfo } from "../models/projects";
import { StackLabel, stack } from "./stackIcons";
import pastabookDesktop from "../graph/pastabook_desktop.webp";
import pastabookMobile from "../graph/pastabook_mobile.webp";
import pastabookPrev from "../graph/pastabook480.png";
import playiteasyDesktop from "../graph/playiteasy_desktop.webp";
import playiteasyMobile from "../graph/playiteasy_mobile.webp";
import scalesDesktop from "../graph/scales_deskop.webp";
import circleDesktop from "../graph/circle_desktop.webp";
import circleMobile from "../graph/circle_mobile.webp";

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

const circleOfFifthsStack: StackLabel[] = ["JavaScript", "HTML", "CSS"];

export const projects: ProjectInfo[] = [
  {
    title: "Pastabook",
    stack: stack.filter((item) => pastabookStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/pastabook/",
    repositoryUrl: "https://github.com/andrzejkukuryk/pastabook",
    translationKey: "data_projects_pastabookDescription",
    shortTranslationKey: "data_projects_pastabookShort",
    imgDesktop: pastabookDesktop,
    imgMobile: pastabookMobile,
    imgPrev: pastabookPrev,
  },
  {
    title: "Chords & Scales",
    stack: stack.filter((item) => chordsAndScalesStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/music-theory/",
    repositoryUrl: "https://github.com/andrzejkukuryk/music-theory",
    translationKey: "data_projects_chordsDescription",
    shortTranslationKey: "data_projects_pastabookShort",
    imgDesktop: scalesDesktop,
    imgPrev: pastabookPrev,
  },
  {
    title: "Circle of Fifths",
    stack: stack.filter((item) => circleOfFifthsStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/circleoffifths/",
    repositoryUrl: "https://github.com/andrzejkukuryk/circleoffifths",
    translationKey: "data_projects_circleDescription",
    shortTranslationKey: "data_projects_pastabookShort",
    imgDesktop: circleDesktop,
    imgMobile: circleMobile,
    imgPrev: pastabookPrev,
  },
  {
    title: "Play It Easy",
    stack: stack.filter((item) => playItEasyStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/playiteasy/",
    repositoryUrl: "https://github.com/andrzejkukuryk/playiteasy",
    translationKey: "data_projects_playItEasyDescription",
    shortTranslationKey: "data_projects_pastabookShort",
    imgDesktop: playiteasyDesktop,
    imgMobile: playiteasyMobile,
    imgPrev: pastabookPrev,
  },
];
