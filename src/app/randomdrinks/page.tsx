import Link from "next/link";
import DrinksRandom from "@/components/DrinksRandom";

export default function randomdrinks() {
  return (
    <main>
      <h1 className="text-2xl uppercase text-center my-5">random drinks</h1>
      <DrinksRandom />
    </main>
  );
}