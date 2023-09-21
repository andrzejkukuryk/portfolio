import React, { useEffect, useState, useRef } from "react";

export function usePosition(updateFunction: (position: number) => void) {
  const [position, setPosition] = useState(0);
  //   const { updateHomePosition } = useNavContext();
  const ref = useRef<HTMLOptionElement | null>(null);

  const handleResize = () => {
    if (ref.current) {
      const newPosition = ref.current.offsetTop;
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
  useEffect(() => updateFunction(position), [position]);

  return { ref };
}
