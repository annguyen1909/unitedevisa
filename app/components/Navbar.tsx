import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-green-700">UNITED <span className="text-yellow-500">eVisa</span> Service</div>
      <div className="hidden md:flex space-x-6 text-sm">
        <Link href="#">Get Your eVisa</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Info Center</Link>
        <Link href="#">Contact Our Expert</Link>
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition">
        APPLY
      </button>
    </nav>
  );
}