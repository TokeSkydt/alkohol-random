import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-275 m-auto p-2">
      <Link href="/"><img src="/assets/drinks-logo.png" alt="logo" className="w-15 h-15"/></Link>
      <ul className="flex gap-4 text-lg uppercase">
        <li className="hover:text-gray-400"><Link href="/randomshots">random shots</Link></li>
        <li className="hover:text-gray-400"><Link href="/randomdrinks">random drinks</Link></li>
        <li className="hover:text-gray-400"><Link href="/makeshots">make a shots</Link></li>
        <li className="hover:text-gray-400"><Link href="/makedrink">make a drink</Link></li>
      </ul>
    </nav>
  );
}