import React, { useEffect, useRef, useState } from "react";
import styles from "./home.module.scss";
import { StackList } from "./stackList";
import { PersonalLinks } from "./personalLinks";
import { Greeting } from "./greeting";
import { useNavContext } from "../../data/navProvider";

export function Home() {
  const [position, setPosition] = useState(0);
  const { updateHomePosition } = useNavContext();
  const homeRef = useRef();

  const handleResize = () => {
    if (homeRef.current) {
      //@ts-ignore
      const newPosition = homeRef.current.offsetTop;
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
  useEffect(() => updateHomePosition(position), [position]);

  return (
    //@ts-ignore
    <section id="home" ref={homeRef} className={styles.container}>
      <div className={styles.innerContainer}>
        <Greeting />
        <PersonalLinks />
        <StackList />
      </div>
    </section>
  );
}
