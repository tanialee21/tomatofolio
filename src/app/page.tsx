"use client";

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

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-8 pb-8">
      <div className="bg-white border-1 border-black w-full max-w-sm p-4">
        {/* Title */}
        <div className="border-b-12 border-black pb-1 -mt-4">
          <h1
            className="text-[42px] text-center font-header "
            style={{ fontFamily: "ArchivoBlack, sans-serif" }}
          >
            {nutritionalFacts.title}
          </h1>
          <div className="text-[11px] text-center -mt-2 font-semibold underline mb-1">
            {nutritionalFacts.description}
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

        <div
          className="border-b border-black px-2 text-[16px] tracking-tight"
          style={{ fontFamily: "ArchivoBlack, sans-serif" }}
        >
          Working Experience
        </div>

        {/* Working Experience */}
        <div className="border-b-8 border-black">
          {nutritionalFacts.workingExperience.map(
            (nutrient: Section, index: number) => (
              <div key={index} className="border-b border-gray-400 px-2 py-1">
                <div className="flex justify-between">
                  <span className="text-sm font-black">{nutrient.label}</span>
                  <span className="text-xs font-bold">{nutrient.date}</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="text-xs text-left">{nutrient.content}</div>
                  <div className="text-xs text-right">{nutrient.company}</div>
                </div>
              </div>
            )
          )}
        </div>

        <div
          className="border-b border-black px-2 text-[16px] tracking-tight"
          style={{ fontFamily: "ArchivoBlack, sans-serif" }}
        >
          Activities
        </div>

        {/* Activities */}
        <div className="border-b-8 border-black">
          {nutritionalFacts.activities.map(
            (nutrient: Section, index: number) => (
              <div key={index} className="border-b border-gray-400 px-2 py-1">
                <div className="flex justify-between">
                  <span className="text-xs">{nutrient.date}</span>
                  <span className="text-sm font-bold">{nutrient.label}</span>
                </div>
                <div className="text-xs text-right">{nutrient.content}</div>
              </div>
            )
          )}
        </div>

        {/* Skills */}
        <div className="px-2 py-2">
          <div className="grid grid-cols-2 gap-x-12 px-2">
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

        {/* Disclaimer */}
        <div className="border-t border-black px-2 py-1 -mb-4">
          <p className="text-xs text-center font-semibold">
            {nutritionalFacts.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
