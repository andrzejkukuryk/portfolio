import React from "react";
import { ProjectInfo } from "../../models/projects";
import styles from "./desktop.module.scss";
import classNames from "classnames";

const frameDots = ["dotPrimary", "dotTertiary", "dotQuaternary"];

interface DesktopProps {
  project: ProjectInfo;
}

export function Desktop({ project }: DesktopProps) {
  const frameClass = classNames([styles.frame], {
    [styles.noMobile]: !project.imgMobile,
  });

  return (
    <div className={frameClass}>
      <div className={styles.frameHeader}>
        {frameDots.map((dot) => (
          <div className={styles[dot]} key={`${dot}Desktop`}></div>
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
