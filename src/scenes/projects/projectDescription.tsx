import React, { useEffect, useState } from "react";
import { ProjectInfo } from "../../models/projects";
import { ReactComponent as BackIcon } from "../../assets/back.svg";
import { ReactComponent as CloseDescription } from "../../assets/closeMenu.svg";
import styles from "./projectDescription.module.scss";
import { Mockup } from "./mockup";
import { ProjectCardStack } from "./projectCardStack";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { InfoButton } from "./infoButton";

interface ProjectDescriptionProps {
  project: ProjectInfo;
  showInfo: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ProjectDescription({
  project,
  showInfo,
  setShowInfo,
}: ProjectDescriptionProps) {
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const { t } = useTranslation();

  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (showInfo) {
      setTimeout(() => setShowProjectInfo(true), 500);
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [showInfo]);

  const handleClickBack = () => {
    setShowInfo(false);
    unlockScroll();
  };

  const handleClickClose = () => {
    setShowProjectInfo(false);
  };

  // const descriptionParagraphs = () => {
  //   return project.description
  //     .split("\n")
  //     .map((str) => <p key={`paragraph${str[1]}${str[3]}${str[4]}`}>{str}</p>);
  // };

  const descriptionParagraphs = () => {
    return t(project.translationKey)
      .split("\n")
      .map((str) => <p key={`paragraph${str[1]}${str[3]}${str[4]}`}>{str}</p>);
  };

  const handleClickLiveButton = () => {
    window.open(project.appUrl, "_blank");
  };

  const handleClickRepoButton = () => {
    window.open(project.repositoryUrl, "_blank");
  };

  const projectInfoClass = classNames([styles.projectInfo], {
    [styles.showProjectInfo]: showProjectInfo,
  });

  return (
    <div className={styles.container}>
      <BackIcon onClick={handleClickBack} className={styles.backIcon} />
      <Mockup project={project} showInfo={showInfo} />
      <div className={projectInfoClass}>
        <CloseDescription
          onClick={handleClickClose}
          className={styles.closeButton}
        />
        <h3>{project.title}</h3>
        <ProjectCardStack stack={project.stack} />
        {descriptionParagraphs()}
        <div className={styles.buttonsContainer}>
          <InfoButton
            handleClick={handleClickLiveButton}
            text={t("projects_button_live")}
          />
          <InfoButton
            handleClick={handleClickRepoButton}
            text={t("projects_button_repo")}
          />
        </div>
      </div>
    </div>
  );
}
