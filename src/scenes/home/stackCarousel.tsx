import React, { useEffect, useRef, useState } from "react";
import { StackInfo, stack } from "../../data/stackIcons";
import { StackItem } from "./stackItem";
import styles from "./stackCarousel.module.scss";
import classNames from "classnames";
import variables from "../../variables.module.scss";

export function StackCarousel() {
  const [currentOrder, setCurrentOrder] = useState<StackInfo[]>(stack);
  const [toLeft, setToLeft] = useState(false);
  const [toRight, setToRight] = useState(false);
  const [mouseStartX, setMouseStartX] = useState(0);
  const [mouseEndX, setMouseEndX] = useState(0);
  const [mouseMoveX, setMouseMoveX] = useState(0);
  const [mouseHold, setMouseHold] = useState(false);

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
    setMouseHold(true);
  };

  const checkMouseEndX = (event: MouseEvent) => {
    setMouseEndX(event.screenX);
    setMouseHold(false);
  };

  const checkMouseMove = () => {
    const newMouseMove = mouseStartX - mouseEndX;
    setMouseMoveX(newMouseMove);
  };

  useEffect(() => checkMouseMove(), [mouseEndX]);

  const moveCarousel = () => {
    if (mouseMoveX < 0) {
      slideRight();
    } else if (mouseMoveX > 0) {
      slideLeft();
    } else return;
  };

  useEffect(() => moveCarousel(), [mouseMoveX]);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mousedown", checkMouseStartX);
      ref.current.addEventListener("mouseup", checkMouseEndX);
      return () => {
        ref.current?.removeEventListener("mousedown", checkMouseStartX);
        ref.current?.removeEventListener("mouseup", checkMouseEndX);
      };
    }
  }, []);

  const mouseMove = (event: MouseEvent) => {
    const move = event.movementX;
    if (ref.current) {
      console.log("padding left ", ref.current.style.paddingLeft);
      // ref.current.style.paddingLeft = (90 - move).toString();
    }
  };

  useEffect(() => {
    if (ref.current && mouseHold) {
      ref.current.addEventListener("mousemove", mouseMove);
      return () => ref.current?.removeEventListener("mousemove", mouseMove);
    }
  }, [mouseHold]);


  const carouselClass = classNames(styles.carousel, {
    [styles.slideLeft]: toLeft,
    [styles.slideRight]: toRight,
  });

  return (
    <>
      <div className={styles.container}>
        <div ref={ref} className={carouselClass}>
          {currentOrder.map((item) => (
            <StackItem item={item} key={`carousel_${item.label}`} />
          ))}
        </div>
      </div>

      <button onClick={slideLeft}>slide left</button>
      <button onClick={slideRight}>slide right</button>
    </>
  );
}
