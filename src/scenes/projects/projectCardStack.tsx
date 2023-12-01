import React from "react";
import { StackInfo } from "../../data/stackIcons";
import styles from "./projectCardStack.module.scss";

interface ProjectCardStackProps {
  stack: StackInfo[];
}

export function ProjectCardStack({ stack }: ProjectCardStackProps) {
  return (
    <div className={styles.container}>
      <h5>Stack used:</h5>
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
