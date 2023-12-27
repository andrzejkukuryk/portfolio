import React from "react";
import styles from "./cardContent.module.scss";
import { ProjectInfo } from "../../models/projects";
import classNames from "classnames";
import { Slider1 } from "./slider1";

interface CardContentProps {
  project: ProjectInfo;
}

export function CardContent({ project }: CardContentProps) {
  const imgMobile1 = project.imgMobile ? project.imgMobile[0] : "";

  const backgroundClass = classNames([styles.contentContainer], {
    [styles.backgroundPastabook]: project.title === "Pastabook",
    [styles.backgroundPlayiteasy]: project.title === "Play It Easy",
    [styles.backgroundMusicTheory]: project.title === "Chords & Scales",
    [styles.backgroundCircle]: project.title === "Circle of Fifths",
  });
  return (
    <div className={backgroundClass}>
      <Slider1
        screenDesktop={project.imgDesktop[0]}
        screenMobile={imgMobile1}
        stack={project.stack}
        title={project.title}
      />
    </div>
  );
}
