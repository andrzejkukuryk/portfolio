import React from "react";
import { StackInfo } from "../../data/stackIcons";
import styles from "./projectStack.module.scss";
import { useTranslation } from "react-i18next";

interface ProjectStackProps {
  stack: StackInfo[];
}

export function ProjectStack({ stack }: ProjectStackProps) {
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
