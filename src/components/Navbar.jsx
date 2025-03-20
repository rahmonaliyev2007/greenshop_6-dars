"use client";
import { usePathname } from "next/navigation";
import { LogOut, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "Blog", path: "/blog" },
        { name: "Plant Care", path: "/plantcare" },
    ];

    return (
        <nav className="top-0 sticky border-b border-b-[#46a3597f] w-full ">
            <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 py-5">
                <Link href="/">
                    <img src="/images/logo.svg" alt="logo" width={150} height={35} />
                </Link>
                <ul className="flex gap-8 font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link href={link.path} className={`py-[29px] ${pathname === link.path ? "border-b-2 border-[#46A358] text-[#46A358]" : ""}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-6">
                    <button><Search size={24} /></button>
                    <button className="relative"><ShoppingCart size={24} /> <span className="absolute -top-3 -right-3 text-xs font-extrabold grid place-items-center text-white rounded-full border-3 border-white bg-[#46A358] w-[25px] h-[25px]">12</span> </button>
                    <button className="bg-[#46A358] hover:bg-[#46A358]/70 text-white px-4 py-2 rounded-md flex items-center gap-2">
                        <LogOut size={16} /> Login
                    </button>
                </div>

            </div>
        </nav>
    );
}