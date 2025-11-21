"use client";

import { nutritionalFacts } from "@/constants";

interface Section {
  label: string;
  company: string | null;
  date: string | null;
  content?: string | null;
}

interface Vitaskill {
  label: string;
  value: string;
}

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white border-8 border-black w-full max-w-sm">
        {/* Title */}
        <div className="border-b-2 border-black pb-2 pt-4 px-4">
          <h1 className="text-4xl font-black text-center">
            {nutritionalFacts.title}
          </h1>
          <div className="text-[10px] text-center mt-2 font-semibold">
            {nutritionalFacts.description}
          </div>
          <div className="text-[10px] text-center underline mt-1">
            Date of Production: {nutritionalFacts.dateofProduction}
          </div>
        </div>

        {/* Education */}
        <div className="border-b-2 border-black px-4 py-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm">Education</span>
            <span className="text-2xl font-black">
              {nutritionalFacts.education[0].school}
            </span>
          </div>
          <div className="text-xs font-bold text-right">
            {nutritionalFacts.education[0].degree}
          </div>
          <div className="text-xs text-right">
            {nutritionalFacts.education[0].dates}
          </div>
        </div>

        <div className="border-b border-black px-4 py-1 text-xs font-bold">
          Working Experience
        </div>

        {/* Working Experience */}
        <div className="border-b-4 border-black">
          {nutritionalFacts.workingExperience.map(
            (nutrient: Section, index: number) => (
              <div key={index} className="border-b border-gray-300 px-4 py-2">
                <div className="flex justify-between">
                  <span className="text-xs font-bold">{nutrient.date}</span>
                  <span className="text-sm font-bold">{nutrient.label}</span>
                </div>
                <div className="text-xs text-right">{nutrient.content}</div>
              </div>
            )
          )}
        </div>

        {/* Skills */}
        <div className="px-4 py-3">
          <div className="text-xs font-bold underline mb-2">
            Skills & Languages
            <span className="text-[10px] text-right font-normal ml-24">
              Percentage values (%)
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-12">
            {nutritionalFacts.skills.map(
              (vitamin: Vitaskill, index: number) => (
                <div key={index} className="text-xs flex justify-between px-1">
                  <span className="font-bold">{vitamin.label}</span>
                  <span>{vitamin.value}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-black px-4 py-2">
          <p className="text-xs text-center font-semibold">
            {nutritionalFacts.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
