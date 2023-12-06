import React from "react";
import styles from "./projects.module.scss";
import { useNavContext } from "../../data/navProvider";
import { usePosition } from "../../hooks/usePosition";
import { projects } from "../../data/projects";
import { ProjectCard } from "./projectCard";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { updateProjectsPosition } = useNavContext();
  const { ref } = usePosition(updateProjectsPosition);
  const { t } = useTranslation();

  return (
    <section id="projects" ref={ref} className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>{t("projects_projects")}</h2>
        {projects.map((project) => (
          <ProjectCard project={project} key={`${project.title}`} />
        ))}
      </div>
    </section>
  );
}
