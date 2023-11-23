import React from "react";
import styles from "./mockup.module.scss";
import { ProjectInfo } from "../../models/projects";
import { Desktop } from "./desktop";
import { Mobile } from "./mobile";
import classNames from "classnames";

interface MockupProps {
  project: ProjectInfo;
}

export function Mockup({ project }: MockupProps) {
  const backgroundClass = classNames([styles.background], {
    [styles.backgroundPastabook]: project.title === "Pastabook",
    [styles.backgroundPlayiteasy]: project.title === "Play It Easy",
    [styles.backgroundMusicTheory]: project.title === "Chords & Scales",
  });

  return (
    <div className={backgroundClass}>
      <div className={styles.container}>
        <Desktop project={project} />
        {project.imgMobile && <Mobile project={project} />}
      </div>
    </div>
  );
}
