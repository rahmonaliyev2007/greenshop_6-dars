"use client";
import { useRouter } from "next/navigation";
import React from "react";
import useAuthStore from "@/store/authStore"; 

export default function Profile() {
  const router = useRouter();
  const { logout, user } = useAuthStore(); 

  const handleLogout = () => {
    logout(); 
    router.push("/");
  };

  return (
    <div className="max-w-[1240px] m-auto px-4">
      <button onClick={handleLogout}>Logout</button>
      <div>{user.name}</div>
    </div>
  );
}