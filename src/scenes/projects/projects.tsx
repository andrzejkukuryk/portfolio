import React, { useEffect, useRef, useState } from "react";
import styles from "./projects.module.scss";
import { useNavContext } from "../../data/navProvider";

export function Projects() {
  const [position, setPosition] = useState(0);
  const { updateProjectsPosition } = useNavContext();
  const projectsRef = useRef();

  const handleResize = () => {
    if (projectsRef.current) {
      //@ts-ignore
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
      //@ts-ignore
      ref={projectsRef}
      className={styles.container}
    ></section>
  );
}
