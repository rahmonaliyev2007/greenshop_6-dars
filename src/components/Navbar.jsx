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
        <nav className="top-0 sticky w-full z-50 bg-white ">
            <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 py-5">
                <Link href="/">
                    <img src="/images/logo.svg" alt="logo" width={150} height={35} />
                </Link>
                <ul className="flex gap-8 font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link href={link.path} className={`py-[29px] transi ${pathname === link.path ? "border-b-2 border-[#46A358] text-[#46A358]" : "hover:text-[#46A358]"}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-6">
                    <button className="cursor-pointer"><Search size={24} /></button>
                    <button className="relative cursor-pointer"><ShoppingCart size={24} /> <span className="absolute -top-3 -right-3 text-xs font-extrabold grid place-items-center text-white rounded-full border-3 border-white bg-[#46A358] w-[25px] h-[25px]">0</span> </button>
                    <button className="bg-[#46A358] transi cursor-pointer hover:bg-[#46A358]/70 text-white px-4 py-2 rounded-md flex items-center gap-2">
                        <LogOut size={16} /> Login
                    </button>
                </div>

            </div>
            <div className="max-w-[1240px] m-auto  h-[2px] px-4 ">
                <hr className="bg-[#46a3597f] border-none w-full h-[2px]"></hr>
            </div>
        </nav>
    );
}