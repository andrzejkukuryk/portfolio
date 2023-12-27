import React from "react";
import styles from "./cardContent.module.scss";
import { ProjectInfo } from "../../models/projects";
import classNames from "classnames";

interface CardContentProps {
  project: ProjectInfo;
}

export function CardContent({ project }: CardContentProps) {
  const backgroundClass = classNames([styles.contentContainer], {
    [styles.backgroundPastabook]: project.title === "Pastabook",
    [styles.backgroundPlayiteasy]: project.title === "Play It Easy",
    [styles.backgroundMusicTheory]: project.title === "Chords & Scales",
    [styles.backgroundCircle]: project.title === "Circle of Fifths",
  });
  return <div className={backgroundClass}></div>;
}
