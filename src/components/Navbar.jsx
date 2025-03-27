"use client";

import { usePathname } from "next/navigation";
import { LogOut, Search, ShoppingCart, Heart, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { isLogged, logout } = useAuthStore();
    const { user } = useAuthStore();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.cart.length);
    const likedItems = useSelector((state) => state.liked.liked.length);
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "Blog", path: "/blog" },
        { name: "Plant Care", path: "/plantcare" },
    ];

    return (
        <nav className="top-0 sticky w-full z-50 bg-white">
            <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 py-5">
                <Link href="/">
                    <Image src="/images/logo.svg" alt="logo" width={150} height={35} priority />
                </Link>
                <ul className="flex gap-8 font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link href={link.path} className={`py-[29px] transi border-b-2 ${pathname === link.path ? " border-[#46A358] text-[#46A358]" : "border-transparent hover:text-[#46A358]"}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-6">
                    <button className="cursor-pointer"><Search size={24} /></button>
                    <button className="relative cursor-pointer">
                        <ShoppingCart size={24} />
                        {cartItems > 0 && (
                            <span className="absolute -top-3 -right-3 text-xs font-extrabold grid place-items-center text-white rounded-full border-3 border-white bg-[#46A358] w-[25px] h-[25px]">
                                {cartItems}
                            </span>
                        )}
                    </button>
                    <button onClick={()=>{router.push('profile/wishlist')}} className="relative cursor-pointer">
                        <Heart size={24} />
                        {likedItems > 0 && (
                            <span className="absolute -top-3 -right-3 text-xs font-extrabold grid place-items-center text-white rounded-full border-3 border-white bg-[#46A358] w-[25px] h-[25px]">
                                {likedItems}
                            </span>
                        )}
                    </button>

                    {isLogged ? (
                        <div className="flex items-center gap-3">
                            <button onClick={() => router.push("/profile/account")} className="bg-[#46A358] hover:bg-[#46A358]/70 px-4 py-2 rounded-md text-white flex items-center gap-2 transition-all">
                                <User size={16} /> {user?.name || "User"}
                            </button>

                        </div>
                    ) : (
                        <Dialog>
                            <DialogTrigger onClick={() => { setIsLoginOpen(true); setIsRegisterOpen(false); }} className="bg-[#46A358] hover:bg-[#46A358]/70 px-4 py-2 rounded-md text-white flex items-center gap-2 transition-all">
                                <LogOut size={16} /> Login
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                                <div className="w-full my-4 flex justify-center items-center gap-3 text-xl font-semibold">
                                    <button onClick={() => { setIsLoginOpen(true); setIsRegisterOpen(false); }} className={`${isLoginOpen ? "text-[#46A358]" : ""}`}>Login</button>
                                    <div className="border-r-2 border-gray-300 h-4"></div>
                                    <button onClick={() => { setIsLoginOpen(false); setIsRegisterOpen(true); }} className={`${!isLoginOpen ? "text-[#46A358]" : ""}`}>Register</button>
                                </div>
                                {isLoginOpen && <Login />}
                                {isRegisterOpen && <Register />}
                            </DialogContent>
                        </Dialog>
                    )}
                </div>
            </div>
            <div className="max-w-[1240px] m-auto h-[2px] px-4">
                <hr className="bg-[#46a3597f] border-none w-full h-[2px]"></hr>
            </div>
        </nav>
    );
}