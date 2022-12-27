import React, { useEffect, useMemo, useState } from "react";

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
  target: React.RefObject<HTMLCanvasElement>,
  cursor: React.RefObject<HTMLElement>,
  radius = 25
) {
  // Capture Mouse position
  const { x, y } = useMouse(source);
  // Compute the part of the image to zoom based on mouse position
  const zoomBounds = useMemo(() => {
    return {
      left: x - radius,
      top: y - radius,
      width: radius * 2,
      height: radius * 2,
    }
  }, [x, y]);
  // move the cursor to the mouse position
  useEffect(() => {
    if (cursor.current) {
      const { left, top, width, height } = zoomBounds;
      cursor.current.style.left = `${left}px`;
      cursor.current.style.top = `${top}px`;
      cursor.current.style.width = `${width}px`;
      cursor.current.style.height = `${height}px`;
    }
  }, [zoomBounds]);
}
