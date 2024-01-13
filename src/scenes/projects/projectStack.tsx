import React from "react";
import { StackInfo } from "../../data/stackIcons";
import styles from "./projectStack.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

interface ProjectStackProps {
  stack: StackInfo[];
  narrow: boolean;
}

export function ProjectStack({ stack, narrow }: ProjectStackProps) {
  const { t } = useTranslation();

  const containerClass = classNames([styles.container], {
    [styles.narrow]: narrow,
  });

  return (
    <div className={containerClass}>
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
