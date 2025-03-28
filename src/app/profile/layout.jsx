"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, LogOut, MapPin, ShoppingBag, Truck, User } from "lucide-react";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfileLayout({ children }) {
  const pathname = usePathname();
  const { logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  }
  
  return (
    <div className="max-w-[1240px] mt-20 m-auto px-4 flex justify-between ">
      <div className="w-[21%] rounded p-4 bg-[#FBFBFB]">
        <ul>
          <li className="text-xl font-bold">My Account</li>
          <li>
            <Link href="/profile/account" className={`flex items-center gap-2 transi font-semibold px-2 py-1 my-2 text-lg ${pathname === "/profile/account" ? "text-[#46A358] border-l-4 border-[#46A358] cursor-not-allowed" : "border-l border-transparent hover:text-[#46A358]"}`}> <User /> Account Details</Link>
          </li>
          <li>
            <Link href="/profile/products" className={`flex items-center gap-2 transi font-semibold px-2 py-1 my-2 text-lg ${pathname === "/profile/products" ? "text-[#46A358] border-l-4 border-[#46A358] cursor-not-allowed" : "border-l border-transparent hover:text-[#46A358]"}`}><ShoppingBag /> My Products</Link>
          </li>
          <li>
            <Link href="/profile/address" className={`flex items-center gap-2 transi font-semibold px-2 py-1 my-2 text-lg ${pathname === "/profile/address" ? "text-[#46A358] border-l-4 border-[#46A358] cursor-not-allowed" : "border-l border-transparent hover:text-[#46A358]"}`}><MapPin  /> Address</Link>
          </li>
          <li>
            <Link href="/profile/wishlist" className={`flex items-center gap-2 transi font-semibold px-2 py-1 my-2 text-lg ${pathname === "/profile/wishlist" ? "text-[#46A358] border-l-4 border-[#46A358] cursor-not-allowed" : "border-l border-transparent hover:text-[#46A358]"}`}><Heart  /> Wishlist</Link>
          </li>
          <li>
            <Link href="/profile/track" className={`flex items-center gap-2 transi font-semibold px-2 py-1 my-2 text-lg ${pathname === "/profile/track" ? "text-[#46A358] border-l-4 border-[#46A358] cursor-not-allowed" : "border-l border-transparent hover:text-[#46A358]"}`}><Truck /> Track Order</Link>
          </li>
          <hr />
          <li onClick={handleLogout} className="flex items-center gap-2 transi font-semibold px-2 py-1 my-2 text-lg text-red-500 cursor-pointer"><LogOut/> Logout</li>
        </ul>
      </div>
      <div className="w-[74%] ">{children}</div> 
    </div>
  );
}