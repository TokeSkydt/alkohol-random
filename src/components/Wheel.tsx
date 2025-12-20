"use client";

import { useState } from "react";
import DrinkModal from "./DrinkModal";

type Drink = {
  id: string | number;
  name: string;
  description: string;
};

type WheelProps = {
  drinks: Drink[];
};

const COLORS = [
  "#f87171",
  "#fb923c",
  "#facc15",
  "#4ade80",
  "#38bdf8",
  "#a78bfa",
];

export default function Wheel({ drinks }: WheelProps) {
  const [rotation, setRotation] = useState(0);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const slice = 360 / drinks.length;

  // 🔹 CREATE THE COLORED WEDGES
  const gradient = drinks
    .map((_, index) => {
      const start = index * slice;
      const end = start + slice;
      const color = COLORS[index % COLORS.length];
      return `${color} ${start}deg ${end}deg`;
    })
    .join(", ");

  const getWinningIndex = (finalRotation: number) => {
    const normalized = (360 - (finalRotation % 360) - 90 + 180) % 360;

    return Math.floor(normalized / slice);
  };
  // 🔹 SPIN THE WHEEL

  const spinWheel = () => {
    if (isSpinning || drinks.length === 0) return;

    setIsSpinning(true);

    const extraSpins = 360 * 5;
    const randomOffset = Math.random() * 360;
    const finalRotation = rotation + extraSpins + randomOffset;

    setRotation(finalRotation);

    setTimeout(() => {
      const winningIndex = Math.min(
        drinks.length - 1,
        getWinningIndex(finalRotation)
      );

      setSelectedDrink(drinks[winningIndex]);
      setShowModal(true);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <>
      {/* 🔻 WHEEL CONTAINER */}
      <div className="relative w-80 h-80 mx-auto mt-10">
        {/* 🔺 POINTER */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 
            w-0 h-0 border-l-8 border-r-8 border-b-16
            border-l-transparent border-r-transparent border-b-black
            rotate-180 z-10"
        />

        {/* 🎡 WHEEL */}
        <div
          className="w-full h-full rounded-full transition-transform duration-3000 ease-out"
          style={{
            transform: `rotate(${rotation}deg)`,
            background: `conic-gradient(from -90deg, ${gradient})`,
          }}
        >
          {/* 🏷 DRINK LABELS */}
          {drinks.map((drink, index) => {
            const angle = slice * index + slice / 2;

            return (
              <div
                key={drink.id}
                className="absolute inset-0 pointer-events-none"
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: ` translateX(-50%) translateY(-50%) rotate(-90deg) translateY(-96px)`,
                    transformOrigin: "center",
                  }}
                >
                  <span className="block w-24 text-xs font-bold text-white drop-shadow rotate-90 ">
                    {drink.name}
                  </span>
                </div>
              </div>
            );
          })}
          {/* ⚪ CENTER CIRCLE */}
          <div
            className="absolute inset-1/2 w-16 h-16 bg-white rounded-full 
            -translate-x-1/2 -translate-y-1/2 shadow-lg"
          />
        </div>
      </div>

      {/* 🔘 BUTTON */}
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className="mt-6 mx-auto block px-6 py-3 bg-purple-600 text-white rounded 
        disabled:opacity-50"
      >
        {isSpinning ? "Spinning..." : "Spin"}
      </button>

      {/* 🍸 MODAL */}
      {showModal && selectedDrink && (
        <DrinkModal drink={selectedDrink} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
