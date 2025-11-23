"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Sticker from "@/components/sticker";
import { nutritionalFacts } from "@/constants";

interface Section {
  label: string;
  company: string | null;
  date: string | null;
  content?: string | null;
}

interface Skill {
  label: string;
  value: string;
}

const TomatoFieldNoSSR = dynamic(() => import("@/components/tomatoField"), {
  ssr: false,
});

export default function Home() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [showBigTomato, setShowBigTomato] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const cardGone = rect.bottom < 0;
      const topGone = window.scrollY > window.innerHeight * 0.8;

      setShowBigTomato(cardGone && topGone);

      // scroll-based scaling
      const start = window.innerHeight;
      const end = window.innerHeight * 2;

      const scroll = window.scrollY;
      const progress = Math.min(
        Math.max((scroll - start) / (end - start), 0),
        1
      );
      const scale = 0.4 + progress * 0.8;
      if (wrapperRef.current) {
        wrapperRef.current.style.setProperty("--t-scale", String(scale));
      }

      setInitialized(true);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TomatoFieldNoSSR />

      <div
        ref={wrapperRef}
        className="fixed z-10 tomato-wrapper"
        style={{
          opacity: initialized ? 1 : 0,
          transition: "opacity 0.3s ease",
          width: "clamp(300px, 120vw, 700px)",
          height: "clamp(300px, 130vw, 700px)",
          top: "50%",
          left: "50%",
          position: "fixed",
        }}
      >
        <img
          src="/tomato2.svg"
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />

        <div className="absolute inset-0">
          {showBigTomato && (
            <>
              <Sticker
                src="/stickers/lkygbpc2.svg"
                left="20%"
                top="46%"
                rotate={6}
                content={nutritionalFacts.stickers[0].content}
                href={nutritionalFacts.stickers[0].link}
              />
              <Sticker
                src="/stickers/habitbuddy.svg"
                left="24%"
                top="62%"
                rotate={-5}
                content={nutritionalFacts.stickers[2].content}
                href={nutritionalFacts.stickers[2].link}
              />
              <Sticker
                src="/stickers/signify.svg"
                left="65%"
                top="50%"
                rotate={-6}
                content={nutritionalFacts.stickers[4].content}
                href={nutritionalFacts.stickers[4].link}
              />
              <Sticker
                src="/stickers/iconcamp.svg"
                left="42%"
                top="43%"
                rotate={-5}
                size={110}
                content={nutritionalFacts.stickers[3].content}
              />
              <Sticker
                src="/stickers/blitz.svg"
                left="50%"
                top="67%"
                rotate={5}
                content={nutritionalFacts.stickers[1].content}
                href={nutritionalFacts.stickers[1].link}
              />
            </>
          )}
        </div>
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        className="flex items-center justify-center min-h-screen pt-8 pb-8 relative z-20 px-6 sm:px-0"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="bg-white border-1 border-black w-full max-w-sm p-4"
          style={{ boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.5)" }}
        >
          {/* Title */}
          <div className="border-b-12 border-black pb-1 -mt-4">
            <h1
              className="text-[33px] sm:text-[33px] md:text-[42px] text-center font-header"
              style={{ fontFamily: "ArchivoBlack, sans-serif" }}
            >
              {nutritionalFacts.title}
            </h1>

            <div className="text-[10px] sm:text-[10px] md:text-[12px] text-center -mt-2 mb-1 flex justify-center gap-1">
              <span className="font-semibold">
                {nutritionalFacts.description}
              </span>

              <a
                href={nutritionalFacts.socialLinks.email}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-bold underline transition-all duration-200 ease-in-out"
              >
                Email
              </a>

              <span>|</span>

              <a
                href={nutritionalFacts.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-bold underline transition-all duration-200 ease-in-out"
              >
                LinkedIn
              </a>

              <span>|</span>

              <a
                href={nutritionalFacts.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-bold underline transition-all duration-200 ease-in-out"
              >
                GitHub
              </a>

              <span>|</span>

              <a
                href={nutritionalFacts.socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-bold underline transition-all duration-200 ease-in-out"
              >
                Design Portfolio
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="border-b-8 border-black px-2">
            <div className="flex justify-between items-center">
              <span className="font-black text-sm">Education</span>
              <span
                className="text-3xl font-header"
                style={{ fontFamily: "ArchivoBlack, sans-serif" }}
              >
                {nutritionalFacts.education[0].school}
              </span>
            </div>

            <div className="text-xs font-bold text-right">
              {nutritionalFacts.education[0].degree}
            </div>

            <div className="text-xs text-right mb-1">
              {nutritionalFacts.education[0].dates}
            </div>
          </div>

          {/* Work experience*/}
          <div
            className="border-b border-black px-2 text-[14px] sm:text-[14px] md:text-[16px] tracking-tight"
            style={{ fontFamily: "ArchivoBlack, sans-serif" }}
          >
            Working Experience
          </div>

          <div className="border-b-8 border-black">
            {nutritionalFacts.workingExperience.map(
              (nutrient: Section, index: number) => (
                <div key={index} className="border-b border-gray-400 px-2 py-1">
                  <div className="flex justify-between">
                    <span className="text-[11px] sm:text-[11px] md:text-sm font-black">
                      {nutrient.label}
                    </span>
                    <span className="text-[11px] sm:text-[11px] md:text-xs font-bold">
                      {nutrient.date}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="text-xs text-left">{nutrient.content}</div>
                    <div className="text-xs text-right">{nutrient.company}</div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Activities */}
          <div
            className="border-b border-black px-2 text-[14px] sm:text-[14px] md:text-[16px] tracking-tight"
            style={{ fontFamily: "ArchivoBlack, sans-serif" }}
          >
            Activities
          </div>

          <div className="border-b-8 border-black">
            {nutritionalFacts.activities.map(
              (nutrient: Section, index: number) => (
                <div key={index} className="border-b border-gray-400 px-2 py-1">
                  <div className="flex justify-between">
                    <span className="text-[10px] sm:text-[10px] md:text-xs">
                      {nutrient.date}
                    </span>
                    <span className="text-[10px] sm:text-[10px] md:text-sm font-bold">
                      {nutrient.label}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Skills */}
          <div className="px-2 py-2">
            <div className="grid grid-cols-2 gap-x-2 sm:gap-x-12 px-1 sm:px-2">
              {nutritionalFacts.skills.map((vitamin: Skill, index: number) => (
                <div key={index} className="text-xs flex justify-between px-4">
                  <span>{vitamin.label}</span>
                  <span style={{ fontFamily: "ArchivoBlack" }}>
                    {vitamin.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-black px-2 py-1 -mb-4">
            <p className="text-[10px] sm:text-[10px] md:text-xs text-center font-semibold">
              {nutritionalFacts.disclaimer}
            </p>
          </div>
        </div>
      </div>
      <section className="h-[200vh]"></section>
    </>
  );
}
