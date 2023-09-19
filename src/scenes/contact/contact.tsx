import React, { useEffect, useState, useRef } from "react";
import { useNavContext } from "../../data/navProvider";
import styles from "./contact.module.scss";

export function Contact() {
  const [position, setPosition] = useState(0);
  const { updateContactPosition } = useNavContext();
  const contactRef = useRef<HTMLOptionElement | null>(null);

  const handleResize = () => {
    if (contactRef.current) {
      const newPosition = contactRef.current.offsetTop;
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
  useEffect(() => updateContactPosition(position), [position]);

  return (
    <section
      ref={contactRef}
      id="contact"
      className={styles.container}
    ></section>
  );
}
