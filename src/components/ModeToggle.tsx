import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

type Props = {};

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 128 128"
  >
    <path
      fill="#ffb300"
      d="M126.99 80.89L108.1 64.13l.06-.3L127 47.14l-24.83-5.09l-.07-.12l8-24.05l-24.02 8.02l-.12-.08L80.86 1L64.01 20.03h-.02L47.11 1.01l-5.08 24.88l-.06.03l-24.07-8.04l8 24.05c-.04.04-.07.09-.11.13L1.01 47.11l19 16.87l-.01.05L1 80.86l24.89 5.11l.02.04l-8.02 24.11l24.05-8.03l.1.08l5.1 24.83l16.84-19.01h.05l16.87 19l5.07-24.86l.07-.04l24.09 8.02l-8.02-24.03l.07-.12z"
    ></path>
    <radialGradient
      id="SVGPdqgibOn"
      cx={64}
      cy={64}
      r={75.481}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.556} stopColor="#ffb604"></stop>
      <stop offset={0.691} stopColor="#fec61b"></stop>
      <stop offset={0.822} stopColor="#fdd835"></stop>
    </radialGradient>
    <path
      fill="url(#SVGPdqgibOn)"
      d="M126.99 80.89L108.1 64.13l.06-.3L127 47.14l-24.83-5.09l-.07-.12l8-24.05l-24.02 8.02l-.12-.08L80.86 1L64.01 20.03h-.02L47.11 1.01l-5.08 24.88l-.06.03l-24.07-8.04l8 24.05c-.04.04-.07.09-.11.13L1.01 47.11l19 16.87l-.01.05L1 80.86l24.89 5.11l.02.04l-8.02 24.11l24.05-8.03l.1.08l5.1 24.83l16.84-19.01h.05l16.87 19l5.07-24.86l.07-.04l24.09 8.02l-8.02-24.03l.07-.12z"
    ></path>
    <circle cx={64} cy={64} r={42.46} fill="#ffb300"></circle>
    <radialGradient
      id="SVGSBMcNbkY"
      cx={66.147}
      cy={100.924}
      r={66.57}
      gradientTransform="matrix(1 0 0 1.0876 0 -8.844)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.694} stopColor="#ffb604"></stop>
      <stop offset={0.849} stopColor="#fec61b"></stop>
      <stop offset={1} stopColor="#fdd835"></stop>
    </radialGradient>
    <circle cx={64} cy={64} r={42.46} fill="url(#SVGSBMcNbkY)"></circle>
    <g fill="#5d4037">
      <ellipse cx={46.8} cy={54.29} rx={5.25} ry={6.17}></ellipse>
      <ellipse cx={81.2} cy={54.29} rx={5.25} ry={6.17}></ellipse>
    </g>
    <path
      fill="#5d4037"
      d="M75.81 75.67c-1.7 1.11-5.31 3.72-11.82 3.72S53.59 76.85 52 75.54c-.73-.61-1.66-1.1-2.34-.59s-.81 1.55-.33 2.29c1.84 2.85 6.71 7.13 14.65 7.27c7.94-.14 12.81-4.42 14.65-7.27c.4-.62.44-1.51-.03-1.99c-.61-.64-1.75-.26-2.79.42"
    ></path>
    <path
      fill="#de7321"
      d="M58.89 69.52c-1.39-1.42-.11-2.17 1.42-1.74c1.93.54 5.01.28 5.81-1.3c1.52-3.04-.38-4.76-2.74-10.02c-2.46-5.5.63-11.49 4.2-11.8c2.86-.24 1.91 1.12 1.01 1.7c-1.75 1.14-3.6 4.93-.77 9.17c4.82 7.21 4.82 10.62 2.33 14.06c-1.61 2.22-7.35 3.94-11.26-.07"
    ></path>
    <radialGradient
      id="SVGjpGOWd4L"
      cx={-1858.159}
      cy={139.608}
      r={15.525}
      gradientTransform="matrix(-.7447 -.3192 -.3117 .736 -1297.374 -633.673)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#ef6c00"></stop>
      <stop offset={1} stopColor="#ef6c00" stopOpacity={0}></stop>
    </radialGradient>
    <path
      fill="url(#SVGjpGOWd4L)"
      d="M50.38 71.89c-1.63 3.93-7.05 5.42-12.12 3.33c-5.06-2.09-7.85-6.98-6.22-10.91s7.05-5.42 12.12-3.33c5.06 2.09 7.85 6.98 6.22 10.91"
      opacity={0.65}
    ></path>
    <radialGradient
      id="SVGjt1BUc3J"
      cx={200.244}
      cy={-2.317}
      r={15.525}
      gradientTransform="matrix(.7447 -.3192 .3117 .736 -63.29 127.89)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#ef6c00"></stop>
      <stop offset={1} stopColor="#ef6c00" stopOpacity={0}></stop>
    </radialGradient>
    <path
      fill="url(#SVGjt1BUc3J)"
      d="M77.62 71.89c1.63 3.93 7.05 5.42 12.12 3.33c5.06-2.09 7.85-6.98 6.22-10.91s-7.05-5.42-12.12-3.33c-5.06 2.09-7.85 6.98-6.22 10.91"
      opacity={0.65}
    ></path>
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 128 128"
  >
    <radialGradient
      id="SVGR3k7PeKt"
      cx={63.55}
      cy={56.074}
      r={68.672}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.306} stopColor="#6092ab"></stop>
      <stop offset={0.472} stopColor="#5989a1"></stop>
      <stop offset={0.749} stopColor="#457287"></stop>
      <stop offset={0.843} stopColor="#3d687d"></stop>
    </radialGradient>
    <circle cx={64} cy={64} r={60} fill="url(#SVGR3k7PeKt)"></circle>
    <radialGradient
      id="SVGopiXRdCf"
      cx={63.702}
      cy={50.155}
      r={85.604}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.762} stopColor="#b2ebf2" stopOpacity={0}></stop>
      <stop offset={1} stopColor="#e0f7fa"></stop>
    </radialGradient>
    <circle cx={64} cy={64} r={60} fill="url(#SVGopiXRdCf)"></circle>
    <path
      fill="#212121"
      d="M85.49 59.81c1.53 1.25 4.18 1.39 6.42.44c2.66-1.14 3.87-2.9 3.91-5.65c.04-3.41-2.8-7.05-8.42-7.41c-9.26-.59-12.82 7.71-12.92 8.02c-.22.65.1 1.58 1.95.12c5.63-4.45 7.65-3.71 7.65-3.71s-3.24 4.37 1.41 8.19m-42.23 0c1.53 1.25 4.18 1.39 6.42.44c2.66-1.14 3.87-2.9 3.91-5.65c.04-3.41-2.8-7.05-8.42-7.41c-9.26-.59-12.82 7.71-12.92 8.02c-.22.65.1 1.58 1.95.12c5.63-4.45 7.65-3.71 7.65-3.71s-3.24 4.37 1.41 8.19m36.78 18.13l-.12-.07c-.6-.36-1.39-.29-1.92.16c-1.57 1.34-8.08 3.82-14.01 3.94c-5.93-.12-12.44-2.6-14.01-3.94c-.53-.45-1.31-.53-1.92-.16l-.12.07c-.76.46-.9 1.4-.37 2.08c2.06 2.58 7.52 6.46 16.41 6.59c8.89-.12 14.34-4.01 16.41-6.59c.56-.68.41-1.62-.35-2.08"
      strokeWidth={3}
      stroke="#212121"
    ></path>
    <path
      fill="#274c5e"
      d="M61.8 93.24c-.72.21-1.57.75-1.39 1.48c.06.24.22.43.4.6c.57.52 1.31.82 2.05 1.01c2.09.53 4.36.17 6.25-.85c1.09-.59 4.57-3.19 3.8-4.83c-.62-1.33-3.01.52-3.94.91c-2.31.97-4.77.99-7.17 1.68m-3.12-20.98c-1.44-1.62-.11-2.46 1.47-1.98c2 .61 5.2.32 6.02-1.48c1.58-3.46-.39-5.41-2.84-11.39c-2.56-6.25.65-13.06 4.35-13.41c2.97-.28 1.98 1.27 1.05 1.93c-1.82 1.3-3.73 5.6-.8 10.42c4.99 8.19 5.4 12.12 2.42 15.98c-1.85 2.4-7.62 4.49-11.67-.07"
      strokeWidth={3}
      stroke="#274c5e"
    ></path>
    <radialGradient
      id="SVGbcgZoday"
      cx={91.892}
      cy={62.842}
      r={16.37}
      gradientTransform="matrix(.9201 -.3918 .3131 .7354 -12.333 52.628)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fff"></stop>
      <stop offset={1} stopColor="#fff9b9" stopOpacity={0}></stop>
    </radialGradient>
    <path
      fill="url(#SVGbcgZoday)"
      d="M82.57 72.92c1.55 3.75 7.63 4.79 13.58 2.32c5.95-2.46 9.52-7.5 7.97-11.24c-1.55-3.75-7.63-4.79-13.58-2.32c-5.95 2.46-9.52 7.49-7.97 11.24"
      opacity={0.3}
    ></path>
    <radialGradient
      id="SVGB0aOwbLx"
      cx={-2357.148}
      cy={63.126}
      r={16.135}
      gradientTransform="matrix(-.9201 -.3918 -.3131 .7354 -2108.489 -906.767)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fff"></stop>
      <stop offset={1} stopColor="#fff9b9" stopOpacity={0}></stop>
    </radialGradient>
    <path
      fill="url(#SVGB0aOwbLx)"
      d="M49.43 72.92c-1.55 3.75-7.63 4.79-13.58 2.32c-5.95-2.46-9.52-7.5-7.97-11.24c1.55-3.75 7.63-4.79 13.58-2.32c5.95 2.46 9.52 7.49 7.97 11.24"
      opacity={0.3}
    ></path>
  </svg>
);

const ModeToggle = (props: Props) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark" || resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="bg-none border-none cursor-pointer p-0 flex items-center justify-center text-0 px-5 py-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700  "
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};

export default ModeToggle;
