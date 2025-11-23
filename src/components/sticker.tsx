"use client";

interface StickerProps {
  src: string;
  left: number | string;
  top: number | string;
  rotate?: number;
  content?: string[];
  size?: string | number;
  href?: string;
}

export default function Sticker({
  src,
  left,
  top,
  rotate = 0,
  content,
  size,
  href,
}: StickerProps) {
  const imgElement = (
    <img
      src={src}
      alt="Sticker"
      className="
        drop-shadow-md 
        transition-all 
        duration-200
        pointer-events-auto
        [transform-style:preserve-3d]
        will-change-transform
        hover:[rotate:8deg]
        hover:[scale:1.06]
      "
      style={{
        width:
          typeof size === "number"
            ? `${size}px`
            : size || "clamp(120px, 12vw, 200px)",
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );

  return (
    <div
      className="absolute z-[999] group"
      style={{
        left: typeof left === "number" ? `${left}px` : left,
        top: typeof top === "number" ? `${top}px` : top,
        pointerEvents: "auto",
      }}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {imgElement}
        </a>
      ) : (
        imgElement
      )}

      {Array.isArray(content) && content.length > 0 ? (
        <div className="absolute z-[1200] left-1/2 -translate-x-1/2 top-[105%] -translate-y-full opacity-0 group-hover:opacity-100 drop-shadow-xl transition-all duration-200 pointer-events-none bg-[#FFFFFF] text-black shadow-xl rounded-lg border border-black py-3 px-4 w-[150px] space-y-1">
          {content.map((line, i) => (
            <p key={i} className="text-[10px] leading-tight">
              {line}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
