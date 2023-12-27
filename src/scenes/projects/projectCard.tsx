import React, { useEffect } from "react";
import { ProjectInfo } from "../../models/projects";
import { ReactComponent as CloseCard } from "../../assets/closeMenu.svg";
import styles from "./projectCard.module.scss";

import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: ProjectInfo;
  showProjectCard: boolean;
  setShowProjectCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ProjectCard({
  project,
  showProjectCard,
  setShowProjectCard,
}: ProjectCardProps) {
  const { t } = useTranslation();

  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (showProjectCard) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [showProjectCard]);

  const handleClickClose = () => {
    setShowProjectCard(false);
    unlockScroll();
  };

  return <div className={styles.container}></div>;
}
