import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="text-center">
        <h1 className="text-2xl uppercase">welcome to random alcohol</h1>
        <div className="mt-10">
          <p><Link className="bg-yellow-400 text-white p-4 text-4xl font-bold uppercase" href="/randomshots">random shots</Link></p>
        </div>
        <div className="mt-10">
          <p><Link className="bg-green-400 text-white p-4 text-4xl font-bold uppercase" href="/randomdrinks">random drinks</Link></p>
        </div>
      </main>
    </div>
  );
}
