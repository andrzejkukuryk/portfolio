import React from "react";
import { useNavContext } from "../../data/navProvider";
import styles from "./contact.module.scss";
import { usePosition } from "../../hooks/usePosition";
import { ContactInfo } from "./contactInfo";
import { ContactForm } from "./contactForm";

export function Contact() {
  const { updateContactPosition } = useNavContext();
  const { ref } = usePosition(updateContactPosition);

  return (
    <section ref={ref} id="contact" className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Contact me</h2>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
