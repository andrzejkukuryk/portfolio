import React from "react";
import { useNavContext } from "../../data/navProvider";
import styles from "./contact.module.scss";
import { usePosition } from "../../hooks/usePosition";

export function Contact() {
  const { updateContactPosition } = useNavContext();
  const { ref } = usePosition(updateContactPosition);

  return (
    <section ref={ref} id="contact" className={styles.container}></section>
  );
}
