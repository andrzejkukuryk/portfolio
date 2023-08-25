import React, { useEffect, useState } from "react";

export function Message() {
  const [currentTextFirstLine, setCurrentTextFirstLine] = useState("");
  const [currentIndexFirstLine, setCurrentIndexFirstLine] = useState(0);
  const [currentTextSecondLine, setCurrentTextSecondLine] = useState("");
  const [currentIndexSecondLine, setCurrentIndexSecondLine] = useState(0);

  const firstLine: string = "Hi, I'm Andrzej Kukuryk";
  const musician: string = "Musician";
  const typingSpeed = Math.floor(Math.random() * 100) + 50;
  useEffect(() => typeText(), [currentIndexFirstLine, currentIndexSecondLine]);

  const typeFirstLine = () => {
    if (currentIndexFirstLine < firstLine.length) {
      setTimeout(() => {
        setCurrentIndexFirstLine(currentIndexFirstLine + 1);
      }, typingSpeed);
    }
  };

  const typeSecondLine = () => {
    if (currentIndexSecondLine < musician.length) {
      setTimeout(() => {
        setCurrentIndexSecondLine(currentIndexSecondLine + 1);
      }, typingSpeed);
    }
  };

  const typeText = () => {
    typeFirstLine();
    const typingFirstLine: string = firstLine.slice(0, currentIndexFirstLine);
    setCurrentTextFirstLine(typingFirstLine);
    if (currentIndexFirstLine === firstLine.length) {
      typeSecondLine();
      const typingSecondLine: string = musician.slice(
        0,
        currentIndexSecondLine
      );
      setCurrentTextSecondLine(typingSecondLine);
    }
  };
  return (
    <>
      <p>{currentTextFirstLine}</p>
      <p>{currentTextSecondLine}</p>
    </>
  );
}
