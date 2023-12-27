import React, { useEffect, useState } from "react";
import { ProjectInfo } from "../../models/projects";
import { ReactComponent as CloseCard } from "../../assets/closeMenu.svg";
import { ReactComponent as SlideRight } from "../../assets/arrowRight.svg";
import styles from "./projectCard.module.scss";

import { useTranslation } from "react-i18next";
import { CardContent } from "./cardContent";
import classNames from "classnames";

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
  const [slideNumber, setSlideNumber] = useState(1);
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

  const increaseSlideNumber = () => {
    if (slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
    } else {
      return;
    }
  };

  useEffect(() => console.log(slideNumber), [slideNumber]);

  const frameClass = classNames([styles.frame], {
    [styles.slider2]: slideNumber === 2,
  });

  return (
    <div className={styles.container}>
      <CloseCard onClick={handleClickClose} className={styles.closeIcon} />
      {slideNumber < 3 && (
        <SlideRight
          className={styles.slideRight}
          onClick={increaseSlideNumber}
        />
      )}
      <div className={frameClass}>
        <CardContent project={project} />
      </div>
    </div>
  );
}
