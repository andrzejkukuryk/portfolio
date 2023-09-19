import React, { useEffect, useRef, useState } from "react";
import styles from "./about.module.scss";
import { useNavContext } from "../../data/navProvider";
export function About() {
  const [position, setPosition] = useState(0);
  const { updateAboutPosition } = useNavContext();
  const aboutRef = useRef<HTMLOptionElement | null>(null);

  const handleResize = () => {
    if (aboutRef.current) {
      //@ts-ignore
      const newPosition = aboutRef.current.offsetTop;
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
  useEffect(() => updateAboutPosition(position), [position]);

  return (
    <section ref={aboutRef} id="about" className={styles.container}></section>
  );
}
