"use client";

interface StickerProps {
  src: string;
  left: number;
  top: number;
  rotate?: number;
  content?: string[];
}

export default function Sticker({
  src,
  left,
  top,
  rotate = 0,
  content,
}: StickerProps) {

const showOnRight = left < 70;

  return (
    <div
      className="hidden lg:block fixed z-[50] group"
      style={{
        left: `${left}px`,
        top: `${top}px`,
      }}
    >
      <img
        src={src}
        alt="Sticker"
        className="w-50 pointer-events-auto drop-shadow-lg hover-scale"
        style={{ "--rotate": `${rotate}deg` } as React.CSSProperties }
      />

      {Array.isArray(content) && content.length > 0 ? (
        <div className={`absolute left-1/2 -translate-x-1/2 top-[120px] -translate-y-full opacity-0 group-hover:opacity-100 drop-shadow-xl transition-all duration-200 pointer-events-none bg-[#000000] text-white shadow-xl rounded-lg border border-black py-3 px-4 w-[200px] space-y-1}`}>
          {content.map((line, i) => (
            <p key={i} className="text-xs font-medium leading-tight">
              {line}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
