import React from "react";
import styles from "./cardContent.module.scss";
import { ProjectInfo } from "../../models/projects";
import classNames from "classnames";
import { Slide1 } from "./slide1";
import { Slide2 } from "./slide2";
import { Slide3 } from "./slide3";

interface CardContentProps {
  project: ProjectInfo;
}

export function CardContent({ project }: CardContentProps) {
  const imgMobile2 = project.imgMobile ? project.imgMobile[1] : "";
  const screensMobile = project.imgMobile ? project.imgMobile : undefined;

  const backgroundClass = classNames([styles.contentContainer], {
    [styles.backgroundPastabook]: project.title === "Pastabook",
    [styles.backgroundPlayiteasy]: project.title === "Play It Easy",
    [styles.backgroundMusicTheory]: project.title === "Chords & Scales",
    [styles.backgroundCircle]:
      project.title === "Circle of Fifths" ||
      project.title === "Panini Creator",
  });
  return (
    <div className={backgroundClass}>
      <Slide1
        screenDesktop={project.imgDesktop[0]}
        description={project.translationKey}
        title={project.title}
      />
      <Slide2
        screensMobile={screensMobile}
        description={project.translationKey}
        stack={project.stack}
        appUrl={project.appUrl}
        repositoryUrl={project.repositoryUrl}
        title={project.title}
      />
      <Slide3
        screenDesktop={project.imgDesktop[1]}
        screenMobile={imgMobile2}
        repositoryUrl={project.repositoryUrl}
        appUrl={project.appUrl}
        title={project.title}
      />
    </div>
  );
}
