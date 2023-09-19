import React, { useEffect, useRef, useState } from "react";
import styles from "./projects.module.scss";
import { useNavContext } from "../../data/navProvider";

export function Projects() {
  const [position, setPosition] = useState(0);
  const { updateProjectsPosition } = useNavContext();
  const projectsRef = useRef<HTMLOptionElement | null>(null);

  const handleResize = () => {
    if (projectsRef.current) {
      const newPosition = projectsRef.current.offsetTop;
      setPosition(newPosition);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => handleResize(), []);
  useEffect(() => updateProjectsPosition(position), [position]);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={styles.container}
    ></section>
  );
}
