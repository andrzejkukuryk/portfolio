import React from "react";
import { ProjectInfo } from "../../models/projects";
import styles from "./mobile.module.scss";

const frameDots = ["dotPrimary", "dotTertiary", "dotQuaternary"];

interface MobileProps {
  project: ProjectInfo;
}

export function Mobile({ project }: MobileProps) {
  return (
    <div className={styles.frame}>
      <div className={styles.frameHeader}>
        {frameDots.map((dot) => (
          <div className={styles[dot]} key={`${dot}Mobile`}></div>
        ))}
      </div>
      <img
        src={project.imgMobile}
        alt={project.title}
        className={styles.image}
      />
    </div>
  );
}
