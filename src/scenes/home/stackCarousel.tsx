import React, { useEffect, useRef, useState } from "react";
import { StackInfo, stack } from "../../data/stackIcons";
import { StackItem } from "./stackItem";
import styles from "./stackCarousel.module.scss";
import classNames from "classnames";
import variables from "../../variables.module.scss";
import { StackCarouselButton } from "./stackCarouselButton";

export function StackCarousel() {
  const [currentOrder, setCurrentOrder] = useState<StackInfo[]>(stack);
  const [toLeft, setToLeft] = useState(false);
  const [toRight, setToRight] = useState(false);
  const [mouseStartX, setMouseStartX] = useState(0);
  const [mouseEndX, setMouseEndX] = useState(0);
  const [mouseMoveX, setMouseMoveX] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [touchHoldEnd, setTouchHoldEnd] = useState(false);
  const [touchMoveX, setTouchMoveX] = useState<number | null>(null);
  // const [mouseHold, setMouseHold] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

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

  const checkMouseStartX = (event: MouseEvent) => {
    event.preventDefault();
    setMouseStartX(event.screenX);
  };

  const checkMouseEndX = (event: MouseEvent) => {
    setMouseEndX(event.screenX);
  };

  const checkMouseMove = () => {
    const newMouseMove = mouseStartX - mouseEndX;
    setMouseMoveX(newMouseMove);
  };

  useEffect(() => checkMouseMove(), [mouseEndX]);

  const checkTouchStartX = (event: TouchEvent) => {
    event.preventDefault();
    setTouchHoldEnd(false);
    setTouchStartX(event.touches[0].clientX);
  };

  const checkTouchMoveX = (event: TouchEvent) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const checkTouchEnd = () => {
    setTouchHoldEnd(true);
  };

  const countTouchMoveX = () => {
    if (touchStartX && touchEndX) {
      const newTouchMoveX = touchStartX - touchEndX;
      setTouchMoveX(newTouchMoveX);
    }
  };

  useEffect(() => {
    if (touchHoldEnd) {
      countTouchMoveX();
    }
  }, [touchHoldEnd]);

  const moveCarousel = (move: number) => {
    if (move < 0) {
      slideRight();
    } else if (move > 0) {
      slideLeft();
    } else return;
  };

  useEffect(() => moveCarousel(mouseMoveX), [mouseMoveX]);
  useEffect(() => {
    if (touchMoveX) {
      moveCarousel(touchMoveX);
    }
  }, [touchMoveX]);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mousedown", checkMouseStartX);
      ref.current.addEventListener("mouseup", checkMouseEndX);
      ref.current.addEventListener("touchstart", checkTouchStartX);
      ref.current.addEventListener("touchmove", checkTouchMoveX);
      ref.current.addEventListener("touchend", checkTouchEnd);
      return () => {
        ref.current?.removeEventListener("mousedown", checkMouseStartX);
        ref.current?.removeEventListener("mouseup", checkMouseEndX);
        ref.current?.removeEventListener("touchstart", checkTouchStartX);
        ref.current?.removeEventListener("touchmove", checkTouchMoveX);
        ref.current?.removeEventListener("touchend", checkTouchEnd);
      };
    }
  }, []);

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
