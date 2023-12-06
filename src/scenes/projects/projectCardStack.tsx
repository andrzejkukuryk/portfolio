import React from "react";
import { StackInfo } from "../../data/stackIcons";
import styles from "./projectCardStack.module.scss";
import { useTranslation } from "react-i18next";

interface ProjectCardStackProps {
  stack: StackInfo[];
}

export function ProjectCardStack({ stack }: ProjectCardStackProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h5>{t("projects_stack")}:</h5>
      <div>
        {stack.map((icon) => (
          <icon.component
            className={styles.stackIcon}
            key={`icon_${icon.label}`}
          />
        ))}
      </div>
    </div>
  );
}
