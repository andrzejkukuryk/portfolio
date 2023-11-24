import React from "react";
import styles from "./mockup.module.scss";
import { ProjectInfo } from "../../models/projects";
import { Desktop } from "./desktop";
import { Mobile } from "./mobile";
import classNames from "classnames";

interface MockupProps {
  project: ProjectInfo;
  showInfo: boolean;
  handleClickInfo?: () => void;
}

export function Mockup({ project, showInfo, handleClickInfo }: MockupProps) {
  const handleClick = () => {
    if (!showInfo && handleClickInfo) {
      handleClickInfo();
    }
  };

  const backgroundClass = classNames([styles.background], {
    [styles.backgroundPastabook]: project.title === "Pastabook",
    [styles.backgroundPlayiteasy]: project.title === "Play It Easy",
    [styles.backgroundMusicTheory]: project.title === "Chords & Scales",
  });

  const containerClass = classNames([styles.container], {
    [styles.smallPaddingTop]: showInfo,
  });

  const contentClass = classNames([styles.content], {
    [styles.scalable]: !showInfo,
  });

  return (
    <div className={backgroundClass}>
      <div className={containerClass}>
        <div className={contentClass} onClick={handleClick}>
          <Desktop project={project} />
          {project.imgMobile && <Mobile project={project} />}
        </div>
      </div>
    </div>
  );
}
