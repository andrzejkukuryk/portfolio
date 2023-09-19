import React, { useState } from "react";
import { StackInfo, stack } from "../../data/stackIcons";
import { StackItem } from "./stackItem";
import styles from "./stackCarousel.module.scss";

export function StackCarousel() {
  const [currentOrder, setCurrentOrder] = useState<StackInfo[]>(stack);

  console.log(currentOrder);

  const next = () => {
    const temporaryOrder = [...currentOrder];
    const firstItem = temporaryOrder.shift();
    if (firstItem) {
      temporaryOrder.push(firstItem);
    }
    setCurrentOrder(temporaryOrder);
  };

  const prev = () => {
    const temporaryOrder = [...currentOrder];
    const lastItem = temporaryOrder.pop();
    if (lastItem) {
      temporaryOrder.unshift(lastItem);
    }
    setCurrentOrder(temporaryOrder);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carousel}>
          {currentOrder.map((item) => (
            <StackItem item={item} key={`carousel_${item.label}`} />
          ))}
        </div>
      </div>

      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
    </>
  );
}
