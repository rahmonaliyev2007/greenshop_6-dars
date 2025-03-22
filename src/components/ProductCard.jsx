"use client" 

import { Heart, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ProductCard({product :{name, id, img1, price, isSale, saleDiscount}}) {
    const discountedPrice = isSale ? price - (price * saleDiscount / 100) : price;
  return (
    <div className="max-w-[300px] w-full border-t-2 border-t-transparent hover:border-t-[#46A358] transi">
        <div className="card_img transi overflow-hidden ">
            <div className="bg-[#FBFBFB] transi hover:scale-110"> 
                <Image width={250} height={250} priority src={img1} alt={name} className="w-full h-auto mix-blend-multiply" />
            </div>
            <div className="card_details">
                <button className="p-2 hover:bg-gray-200 hover:text-[#46A358] transi bg-white rounded cursor-pointer" ><ShoppingCart size={19}/></button>
                <button className="p-2 hover:bg-gray-200 hover:text-[#46A358] transi bg-white rounded cursor-pointer" ><Heart size={19}/></button>
                <button className="p-2 hover:bg-gray-200 hover:text-[#46A358] transi bg-white rounded cursor-pointer" ><Search size={19}/></button>
            </div>
            {isSale && <div className="absolute top-2 left-0 bg-[#46A358] text-white px-2 py-1 font-bold">{saleDiscount}% OFF</div>}
        </div>
        <div>
            <h4 className="font-bold mt-4">{name}</h4>
            {isSale ? (
                <p className="text-[#46A358] font-semibold">
                    ${discountedPrice.toFixed(2)} <span className="line-through text-gray-400 font-light text-sm">${price.toFixed(2)}</span>
                </p>
            ) : (
                <p className="text-black font-semibold">${price.toFixed(2)}</p>
            )}
        </div>
    </div>
  )
}

