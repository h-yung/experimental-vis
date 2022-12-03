import { useState, useEffect } from "react";
import debounce from "../helpers/debounce";

//returns both the position and function to apply onMouseMove
//might be a wreck because I can't memoize debounce
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleMouseMove = debounce((ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  }, 15); //ms, super minimal lol

  return [mousePosition, handleMouseMove];
};

// export const useMousePosition = ({ includeTouch }) => {
//   const [
//     mousePosition,
//     setMousePosition
//   ] = useState({ x: null, y: null });
//   useEffect(() => {
//     const updateMousePosition = ev => {
//       let x, y;
//       if (ev.touches) {
//         const touch = ev.touches[0];
//         [x, y] = [touch.clientX, touch.clientY];
//       } else {
//         [x, y] = [ev.clientX, ev.clientY];
//       }
//       setMousePosition({ x, y });
//     };
//     window.addEventListener('mousemove', updateMousePosition);
//     if (includeTouch) {
//       window.addEventListener('touchmove', updateMousePosition);
//     }
//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       if (includeTouch) {
//         window.removeEventListener('touchmove', updateMousePosition);
//       }
//     };
//   }, [includeTouch]);
//   return mousePosition;
// };
