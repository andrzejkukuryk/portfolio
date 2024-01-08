import React, { useEffect, useState } from "react";
import { ProjectInfo } from "../../models/projects";
import { ReactComponent as CloseCard } from "../../assets/closeMenu.svg";
import { ReactComponent as Arrow } from "../../assets/arrowRight.svg";
import styles from "./projectCard.module.scss";
import { CardContent } from "./cardContent";
import classNames from "classnames";
import { useSwipe } from "../../hooks/useSwipe";

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

  const decreaseSlideNumber = () => {
    if (slideNumber > 1) {
      setSlideNumber(slideNumber - 1);
    } else {
      return;
    }
  };

  const { ref } = useSwipe(increaseSlideNumber, decreaseSlideNumber);

  const frameClass = classNames([styles.frame], {
    [styles.slide2]: slideNumber === 2,
    [styles.slide3]: slideNumber === 3,
  });

  return (
    <div className={styles.container}>
      <CloseCard onClick={handleClickClose} className={styles.closeIcon} />
      {slideNumber > 1 && (
        <Arrow className={styles.slideLeft} onClick={decreaseSlideNumber} />
      )}
      {slideNumber < 3 && (
        <Arrow className={styles.slideRight} onClick={increaseSlideNumber} />
      )}
      <div ref={ref} className={frameClass}>
        <CardContent project={project} />
      </div>
    </div>
  );
}
