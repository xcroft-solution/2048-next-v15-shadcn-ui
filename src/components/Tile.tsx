import React from "react";

const colors: { [key: number]: { bg: string; text: string } } = {
  2: { bg: "bg-[#eee4da]", text: "text-[#776e65]" },
  4: { bg: "bg-[#ede0c8]", text: "text-[#776e65]" },
  8: { bg: "bg-[#f3b27a]", text: "text-white" },
  16: { bg: "bg-[#f69664]", text: "text-white" },
  32: { bg: "bg-[#f77c5f]", text: "text-white" },
  64: { bg: "bg-[#f65e3b]", text: "text-white" },
  128: { bg: "bg-[#edcf72]", text: "text-white" },
  256: { bg: "bg-[#edcc61]", text: "text-white" },
  512: { bg: "bg-[#edc850]", text: "text-white" },
  1024: { bg: "bg-[#edc53f]", text: "text-white" },
  2048: { bg: "bg-[#edc22e]", text: "text-white" },
};

interface TileProps {
  value: number;
  isNew: boolean;
  isMerged: boolean;
}

const Tile: React.FC<TileProps> = ({ value, isNew, isMerged }) => {
  const { bg, text } = colors[value] || {
    bg: "bg-[#cdc1b4]",
    text: "text-[#776e65]",
  };
  const fontSize =
    value >= 100 ? "text-2xl" : value >= 1000 ? "text-xl" : "text-3xl";

  return (
    <div
      className={`w-full aspect-square flex items-center justify-center rounded-md ${bg} 
        transition-all duration-100 ease-in-out
        ${isNew ? "animate-pop-in" : ""}
        ${isMerged ? "animate-merge" : ""}
      `}
    >
      <span className={`${fontSize} font-bold ${text}`}>
        {value !== 0 ? value : ""}
      </span>
    </div>
  );
};

export default Tile;
