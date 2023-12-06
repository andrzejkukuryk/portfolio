import i18n from "../i18n";

export type SectionName = "Home" | "About" | "Projects" | "Contact";
export interface SectionInfo {
  name: SectionName;
  label: string;
}

export const sections: SectionInfo[] = [
  { name: "Home", label: i18n.t("models_menu_home") },
  { name: "About", label: i18n.t("models_menu_about") },
  { name: "Projects", label: i18n.t("models_menu_projects") },
  { name: "Contact", label: i18n.t("models_menu_contact") },
];
