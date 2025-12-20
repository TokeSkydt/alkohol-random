import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-275 mx-auto p-6">
        <nav className="grid grid-cols-2 gap-4 text-center uppercase">
          <ul className="gap-4">
            <li>
              <Link href="/alldrinks" className="hover:text-gray-400">
                all drinks
              </Link>
            </li>
            <li>
              <Link href="/allshots" className="hover:text-gray-400">
                all shots
              </Link>
            </li>
            <li>
              <Link href="/drinks" className="hover:text-gray-400">
                drinks
              </Link>
            </li>
            <li>
              <Link href="/shots" className="hover:text-gray-400">
                shots
              </Link>
            </li>
          </ul>

          <ul className="gap-4">
            <li>
              <Link href="/makedrink" className="hover:text-gray-400">
                make drink
              </Link>
            </li>
            <li>
              <Link href="/makeshot" className="hover:text-gray-400">
                make shot
              </Link>
            </li>
            <li>
              <Link href="/randomshots" className="hover:text-gray-400">
                random shots
              </Link>
            </li>
            <li>
              <Link href="/randomdrinks" className="hover:text-gray-400">
                random drinks
              </Link>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-gray-500 mt-6 text-center">
          © {new Date().getFullYear()} Drinks App
        </p>
      </div>
    </footer>
  );
}
