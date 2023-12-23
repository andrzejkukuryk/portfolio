import React from "react";
import styles from "./projectTile.module.scss";
import { ProjectInfo } from "../../models/projects";
import { TilePhoto } from "./tilePhoto";
import { TileDescription } from "./tileDescription";
import classNames from "classnames";

interface ProjectTileProps {
  project: ProjectInfo;
  even: boolean;
}

export function ProjectTile({ project, even }: ProjectTileProps) {
  const containerClass = classNames([styles.tileContainer], {
    [styles.evenTile]: even,
  });

  return (
    <div className={styles.outerWrapper}>
      <div className={containerClass}>
        <TilePhoto imgPrev={project.imgPrev} title={project.title} />
        <TileDescription
          title={project.title}
          description={project.shortTranslationKey}
          appUrl={project.appUrl}
          repositoryUrl={project.repositoryUrl}
        />
      </div>
    </div>
  );
}
