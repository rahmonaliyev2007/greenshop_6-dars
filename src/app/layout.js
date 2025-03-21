

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GreenShop | Jonli gullar va uy o‘simliklari do‘koni",
  description: "GreenShop – sifatli gul va o‘simliklar do‘koni! 🌿 Atirgullar, kaktuslar, orxideya, drasena, monstera, palma, bonsay va boshqa uy gullarini eng yaxshi narxlarda yetkazib beramiz. O‘zbekistonda eng yaxshi gul yetkazib berish xizmati! 💐 Sizga kerakli uy o‘simliklarini toping: aloe vera, fikus, sansevieriya, zamiokulkas, limon daraxti va boshqa ekzotik gullar. 🌱 Har qanday bayram uchun ajoyib gullar: tug‘ilgan kun, to‘y, 8-mart, sevishganlar kuni! 🚛 Tezkor yetkazib berish, doimiy chegirmalar va sifatli xizmat – GreenShop bilan tabiatga yaqin bo‘ling! 🌺 Endi buyurtma bering va xonadoningizga chiroy bag‘ishlang! 🏡",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}