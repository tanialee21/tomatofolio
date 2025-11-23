"use client";

import { useEffect } from "react";

export default function TomatoField() {
  useEffect(() => {
    const NUM = 8;
    const SIZE = 350;
    const SEP_FORCE = 0.04;
    const tomatoes: any[] = [];

    for (let i = 0; i < NUM; i++) {
      const el = document.createElement("img");
      el.src = "/tomato2.svg";
      el.style.position = "fixed";
      el.style.width = SIZE + "px";
      el.style.height = SIZE + "px";

      const startY = Math.random() * (window.innerHeight - SIZE);

      el.style.left = Math.random() * (window.innerWidth - SIZE) + "px";
      el.style.top = Math.random() * (window.innerHeight - SIZE) + "px";

      el.style.pointerEvents = "none";
      el.style.zIndex = "3";
      el.style.transition = "transform 0.08s linear";

      document.body.appendChild(el);

      tomatoes.push({
        el,
        x: parseFloat(el.style.left),
        y: parseFloat(el.style.top),
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        rot: 0,
      });
    }

    // Mouse push
    const onMove = (e: MouseEvent) => {
      tomatoes.forEach((t) => {
        const cx = t.x + SIZE / 2;
        const cy = t.y + SIZE / 2;

        const dx = cx - e.clientX;
        const dy = cy - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          t.vx += dx * -0.01;
          t.vy += dy * -0.01;

          t.rot += (Math.random() - 0.5) * 30;
        }
      });
    };

    window.addEventListener("mousemove", onMove);

    // Main loop
    const loop = () => {
      tomatoes.forEach((t, i) => {
        // soft separation
        tomatoes.forEach((o, j) => {
          if (i === j) return;

          const dx = t.x - o.x;
          const dy = t.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < SIZE * 1.1) {
            const strength = (SIZE * 1.1 - dist) / (SIZE * 1.1);
            t.vx += (dx / dist) * SEP_FORCE * strength;
            t.vy += (dy / dist) * SEP_FORCE * strength;
          }
        });

        // velocity & friction
        t.x += t.vx;
        t.y += t.vy;
        t.vx *= 0.97;
        t.vy *= 0.97;

        const TOP_BOUND = -100;
        const BOTTOM_BOUND = window.innerHeight - SIZE + 100;
        const LEFT_BOUND = -100;
        const RIGHT_BOUND = window.innerWidth - SIZE + 100;

        // LEFT
        if (t.x < LEFT_BOUND) {
          t.x = LEFT_BOUND;
          t.vx *= -0.8;
        }

        // RIGHT
        if (t.x > RIGHT_BOUND) {
          t.x = RIGHT_BOUND;
          t.vx *= -0.8;
        }

        // TOP
        if (t.y < TOP_BOUND) {
          t.y = TOP_BOUND;
          t.vy *= -0.8;
        }

        // BOTTOM
        if (t.y > BOTTOM_BOUND) {
          t.y = BOTTOM_BOUND;
          t.vy *= -0.8;
        }

        // update DOM
        t.el.style.left = t.x + "px";
        t.el.style.top = t.y + "px";
        t.el.style.transform = `rotate(${t.rot}deg)`;
      });

      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      tomatoes.forEach((t) => t.el.remove());
    };
  }, []);

  return null;
}
