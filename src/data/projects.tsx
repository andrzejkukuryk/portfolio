import { ProjectInfo } from "../models/projects";
import { StackLabel, stack } from "./stackIcons";
import pastabookDesktop1 from "../graph/pastabook_desktop_1.png";
import pastabookDesktop2 from "../graph/pastabook_desktop_2.png";
import pastabookMobile1 from "../graph/pastabook_mobile_1.png";
import pastabookMobile2 from "../graph/pastabook_mobile_2.png";
import pastabookPrev from "../graph/pastabook480.png";
import playiteasyPrev from "../graph/playiteasy480.png";
import playiteasyDesktop1 from "../graph/playiteasy_desktop_1.png";
import playiteasyDesktop2 from "../graph/playiteasy_desktop_2.png";
import playiteasyMobile1 from "../graph/playiteasy_mobile_1.png";
import playiteasyMobile2 from "../graph/playiteasy_mobile_2.png";
import scalesDesktop1 from "../graph/scales_desktop_1.png";
import scalesDesktop2 from "../graph/scales_desktop_2.png";
import scalesPrev from "../graph/scales480.png";
import circleDesktop1 from "../graph/circle_desktop_1.png";
import circleDesktop2 from "../graph/circle_desktop_2.png";
import circleMobile1 from "../graph/circle_mobile_1.png";
import circleMobile2 from "../graph/circle_mobile_2.png";
import circlePrev from "../graph/circle480.png";
import paniniDesktop1 from "../graph/panini_desktop_1.png";
import paniniDesktop2 from "../graph/panini_desktop_2.png";
import paniniPrev from "../graph/panini480.png";

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

const paniniStack: StackLabel[] = ["React.js", "Redux", "TypeScript", "Sass"];

export const projects: ProjectInfo[] = [
  {
    title: "Pastabook",
    stack: stack.filter((item) => pastabookStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/pastabook/",
    repositoryUrl: "https://github.com/andrzejkukuryk/pastabook",
    translationKey: "data_projects_pastabookDescription",
    shortTranslationKey: "data_projects_pastabookShort",
    imgDesktop: [pastabookDesktop1, pastabookDesktop2],
    imgMobile: [pastabookMobile1, pastabookMobile2],
    imgPrev: pastabookPrev,
  },
  {
    title: "Panini Creator",
    stack: stack.filter((item) => paniniStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/panini-creator/",
    repositoryUrl: "https://github.com/andrzejkukuryk/panini-creator",
    translationKey: "data_projects_paniniDescription",
    shortTranslationKey: "data_projects_paniniShort",
    imgDesktop: [paniniDesktop1, paniniDesktop2],
    imgPrev: paniniPrev,
  },
  {
    title: "Chords & Scales",
    stack: stack.filter((item) => chordsAndScalesStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/music-theory/",
    repositoryUrl: "https://github.com/andrzejkukuryk/music-theory",
    translationKey: "data_projects_chordsDescription",
    shortTranslationKey: "data_projects_chordsShort",
    imgDesktop: [scalesDesktop1, scalesDesktop2],
    imgPrev: scalesPrev,
  },
  {
    title: "Circle of Fifths",
    stack: stack.filter((item) => circleOfFifthsStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/circleoffifths/",
    repositoryUrl: "https://github.com/andrzejkukuryk/circleoffifths",
    translationKey: "data_projects_circleDescription",
    shortTranslationKey: "data_projects_circleShort",
    imgDesktop: [circleDesktop1, circleDesktop2],
    imgMobile: [circleMobile1, circleMobile2],
    imgPrev: circlePrev,
  },
  {
    title: "Play It Easy",
    stack: stack.filter((item) => playItEasyStack.includes(item.label)),
    appUrl: "https://andrzejkukuryk.github.io/playiteasy/",
    repositoryUrl: "https://github.com/andrzejkukuryk/playiteasy",
    translationKey: "data_projects_playItEasyDescription",
    shortTranslationKey: "data_projects_playiteasyShort",
    imgDesktop: [playiteasyDesktop1, playiteasyDesktop2],
    imgMobile: [playiteasyMobile1, playiteasyMobile2],
    imgPrev: playiteasyPrev,
  },
];
