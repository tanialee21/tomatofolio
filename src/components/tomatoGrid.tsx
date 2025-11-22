"use client";

import { useEffect, useState } from "react";

export default function TomatoGrid() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cols = Math.ceil(window.innerWidth / 80);
    const rows = Math.ceil(window.innerHeight / 80);
    setCount(cols * rows * 9);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 142px)",
        gridAutoRows: "110px",
        justifyContent: "space-around",
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const rotation = Math.floor(Math.random() * 360);

        return (
          <div
            key={i}
            style={{
              width: "190px",
              height: "300px",
              backgroundImage: 'url("/tomato2.svg")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              transform: `rotate(${rotation}deg)`,
              margin: "auto",
            }}
          />
        );
      })}
    </div>
  );
}
