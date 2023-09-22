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

  //@ts-ignore
  const checkMouseStartX = (event) => {
    event.preventDefault();
    console.log(event.movementX);
    setMouseStartX(event.screenX);
  };

  //@ts-ignore
  const checkMouseEndX = (event) => {
    setMouseEndX(event.screenX);
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

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.addEventListener("mouseup", checkMouseEndX);
  //     return () => ref.current?.removeEventListener("mouseup", checkMouseEndX);
  //   }
  // }, []);

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
