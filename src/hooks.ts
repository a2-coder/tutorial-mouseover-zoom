import React, { useEffect, useState } from "react";

function useMouse(ref: React.RefObject<HTMLElement>) {
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    if (ref.current) {
      const handleMouseMove = (e: MouseEvent) => {
        // get mouse position relative to ref
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
      };
      ref.current.addEventListener("mousemove", handleMouseMove);
      return () => {
        ref.current!.removeEventListener("mousemove", handleMouseMove)
      };
    }
  });
  return mouse;
}

export function useMouseOverZoom(
  source: React.RefObject<HTMLImageElement>,
  target: React.RefObject<HTMLCanvasElement>
) {
  // CAPTURE MOUSE POSITION
  const { x, y } = useMouse(source);
}
