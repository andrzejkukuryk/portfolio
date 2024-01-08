import React, { useState } from "react";
import { StackInfo, stack } from "../../data/stackIcons";
import { StackItem } from "./stackItem";
import styles from "./stackCarousel.module.scss";
import classNames from "classnames";
import variables from "../../variables.module.scss";
import { StackCarouselButton } from "./stackCarouselButton";
import { useSwipe } from "../../hooks/useSwipe";

export function StackCarousel() {
  const [currentOrder, setCurrentOrder] = useState<StackInfo[]>(stack);
  const [toLeft, setToLeft] = useState(false);
  const [toRight, setToRight] = useState(false);

  const delayTime = Number(variables.carouselMove.replace("ms", ""));

  const next = () => {
    const temporaryOrder = [...currentOrder];
    const firstItem = temporaryOrder.shift();
    if (firstItem) {
      temporaryOrder.push(firstItem);
      setToLeft(false);
    }
    setCurrentOrder(temporaryOrder);
  };

  const prev = () => {
    const temporaryOrder = [...currentOrder];
    const lastItem = temporaryOrder.pop();
    if (lastItem) {
      temporaryOrder.unshift(lastItem);
      setToRight(false);
    }
    setCurrentOrder(temporaryOrder);
  };

  const slideLeft = () => {
    setToLeft(true);
    setTimeout(() => next(), delayTime);
  };

  const slideRight = () => {
    setToRight(true);
    setTimeout(() => prev(), delayTime);
  };

  const { ref } = useSwipe(slideLeft, slideRight);

  const carouselClass = classNames(styles.carousel, {
    [styles.slideLeft]: toLeft,
    [styles.slideRight]: toRight,
  });

  return (
    <div className={styles.container}>
      <StackCarouselButton fctn={slideRight} direction="prev" />
      <div className={styles.innerContainer}>
        <div ref={ref} className={carouselClass}>
          {currentOrder.map((item) => (
            <StackItem item={item} key={`carousel_${item.label}`} />
          ))}
        </div>
      </div>
      <StackCarouselButton fctn={slideLeft} direction="next" />
    </div>
  );
}
