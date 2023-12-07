import i18n from "../i18n";

export type SectionName = "Home" | "About" | "Projects" | "Contact";
export interface SectionInfo {
  name: SectionName;
  translationKey: string;
}

export const sections: SectionInfo[] = [
  {
    name: "Home",
    translationKey: "models_menu_home",
  },
  {
    name: "About",
    translationKey: "models_menu_about",
  },
  {
    name: "Projects",
    translationKey: "models_menu_projects",
  },
  {
    name: "Contact",
    translationKey: "models_menu_contact",
  },
];
