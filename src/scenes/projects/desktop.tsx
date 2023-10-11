import React from "react";
import { ProjectInfo } from "../../models/projects";
import styles from "./desktop.module.scss";

interface DesktopProps {
  project: ProjectInfo;
}

export function Desktop({ project }: DesktopProps) {
  const frameDots = ["dotPrimary", "dotTertiary", "dotQuaternary"];

  return (
    <div className={styles.frame}>
      <div className={styles.frameHeader}>
        {frameDots.map((dot) => (
          <div className={styles[dot]}></div>
        ))}
      </div>
      <img
        className={styles.image}
        src={project.imgDesktop}
        alt={project.title}
      />
    </div>
  );
}
