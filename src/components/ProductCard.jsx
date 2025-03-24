"use client";import { Heart, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../app/redux/slices/cartSlice";
import { toggleLike } from "../app/redux/slices/likedSlice";

export default function ProductCard({ product: { name, id, img1, price, isSale, saleDiscount } }) {
    const discountedPrice = isSale ? price - (price * saleDiscount / 100) : price;
    const router = useRouter();
    const dispatch = useDispatch();
    
    const cartItems = useSelector((state) => state.cart.cart);
    const likedItems = useSelector((state) => state.liked.liked);
    
    const isInCart = cartItems.some(item => item.id === id);
    const isLiked = likedItems.includes(id);

    const handleCartClick = () => {
        if (isInCart) {
            dispatch(removeFromCart(id));
        } else {
            dispatch(addToCart({ id, name, img1, price }));
        }
    };

    return (
        <div className="max-w-[300px] w-full border-t-2 border-t-transparent hover:border-t-[#46A358] transi group rounded">
            <div className="card_img relative transi rounded overflow-hidden ">
                <div className="bg-[#FBFBFB] transi ">
                    <Image width={250} height={250} priority src={img1} alt={name} className="w-full h-auto mix-blend-multiply scale-100 group-hover:scale-110 transi" />
                </div>
                <div className="flex justify-center items-center absolute w-full bottom-0 transi gap-0.5 group-hover:opacity-100 opacity-0 group-hover:gap-3 group-hover:bottom-2">
                    <button onClick={handleCartClick} className={`p-2 hover:bg-gray-200 transi bg-white rounded cursor-pointer ${isInCart ? 'text-[#46A358]' : ''}`}>
                        <ShoppingCart size={19} fill={isInCart ? "#46A358" : "none"} />
                    </button>
                    <button onClick={() => dispatch(toggleLike(id))} className={`p-2 hover:bg-gray-200 transi bg-white rounded cursor-pointer ${isLiked ? 'text-[#46A358]' : ''}`}>
                        <Heart size={19} fill={isLiked ? "#46A358" : "none"} />
                    </button>
                    <button onClick={() => router.push(`/${id}`)} className="p-2 hover:bg-gray-200 hover:text-[#46A358] transi bg-white rounded cursor-pointer">
                        <Search size={19} />
                    </button>
                </div>
                {isLiked && <div className={`absolute  transi group-hover:opacity-0 ${isInCart ? 'opacity-0' : 'opacity-100'} top-0 right-0 bg-[#46A358] text-white text-sm px-2 py-1 font-bold`}>In your Wishlist</div>}
                {isInCart && <div className={`absolute opacity-100 transi group-hover:opacity-0 top-0 right-0 bg-[#46A358] text-white text-sm px-2 py-1 font-bold`}>In your Cart</div>}
                {isSale && <div className={`absolute opacity-100 transi group-hover:opacity-0 top-0 left-0 bg-[#46A358] text-white px-2 py-[2px] font-bold`}>{saleDiscount}% OFF</div>}
            </div>
            <div>
                <h4 className="font-bold mt-4 group-hover:text-[#46A358] transi group-hover:mt-2 group-hover:mb-2">{name}</h4>
                {isSale ? (
                    <p className="text-[#46A358] font-semibold">
                        ${discountedPrice.toFixed(2)} <span className="line-through text-gray-400 text-xs group-hover:text-sm transi">${price.toFixed(2)}</span>
                    </p>
                ) : (
                    <p className="text-black font-semibold">${price.toFixed(2)}</p>
                )}
            </div>
        </div>
    );
}