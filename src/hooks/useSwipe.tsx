import React, { useEffect, useRef, useState } from "react";

export function useSwipe(left: () => void, right: () => void) {
  const [mouseStartX, setMouseStartX] = useState(0);
  const [mouseEndX, setMouseEndX] = useState(0);
  const [mouseMoveX, setMouseMoveX] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [touchHoldEnd, setTouchHoldEnd] = useState(false);
  const [touchMoveX, setTouchMoveX] = useState<number | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);

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

  const swipe = (move: number) => {
    if (move < 0) {
      right();
      console.log("right");
    } else if (move > 0) {
      left();
      console.log("left");
    } else return;
  };

  useEffect(() => swipe(mouseMoveX), [mouseMoveX]);
  useEffect(() => {
    if (touchMoveX) {
      swipe(touchMoveX);
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

  return { ref };
}
