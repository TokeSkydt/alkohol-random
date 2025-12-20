import Link from "next/link";
import ShotsRandom from "@/components/ShotsRandom";

export default function randomshots() {
  return (
    <main>
      <h1 className="text-2xl uppercase text-center my-5">random shots</h1>
      <ShotsRandom />
    </main>
  );
}