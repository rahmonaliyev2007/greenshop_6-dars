"use client"

import { useGetDataQuery } from "@/app/redux/Rtk";
import { useState } from "react";
import { Slider, Button } from "antd";
import ProductCard from "./ProductCard";

export default function Main() {
    const { data: products = [], isLoading, isError } = useGetDataQuery("flowers");
    const [price, setPrice] = useState([0, 2000]);
    console.log(products);

    return (
        <div className="max-w-[1240px] px-4 m-auto flex justify-between items-start gap-6 mt-10">
            <div className="w-[24%] bg-[#FBFBFB] pt-4 rounded-xl overflow-hidden">
                <div className="px-3">
                    <h3 className="font-bold text-lg">Categories</h3>
                    <ul className="transition-colors">
                        <li className="flex justify-between transi items-center pl-2 pr-4 my-2 font-normal  hover:text-[#46A358]">House Plants <span className="">(0)</span></li>
                        <li className="flex justify-between transi items-center pl-2 pr-4 my-2 font-normal hover:text-[#46A358]">Potter Plants <span className="">(0)</span></li>
                        <li className="flex justify-between transi items-center pl-2 pr-4 my-2 font-normal hover:text-[#46A358]">Seeds <span className="">(0)</span></li>
                        <li className="flex justify-between transi items-center pl-2 pr-4 my-2 font-normal hover:text-[#46A358]">Small Plants<span className="">(4)</span></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="mt-4 px-3">
                    <h2 className="font-semibold mb-2">Price Range</h2>
                    <div className="px-3"><Slider range min={0} max={2000} step={1} value={price} trackStyle={[{ backgroundColor: "#46A358" }]} onChange={(value) => setPrice(value)} />
                    </div><p className="text-[#46A358] font-medium">Price: ${price[0]} – ${price[1]}</p>
                    <button className=" cursor-pointer mt-2 px-4 py-2 w-[40%] font-semibold rounded-lg bg-[#46A358] text-white">Filter</button>
                </div>
                <ul className="mt-5 mb-10 px-3">
                    <li className="font-bold">Size</li>
                    <li><div className="flex justify-between text-sm items-center pl-2 text-gray-400 cursor-not-allowed pr-4 my-2"><p>Small</p> <span>(4)</span></div></li>
                    <li><div className="flex justify-between text-sm items-center pl-2 text-gray-400 cursor-not-allowed pr-4 my-2"><p>Medium</p> <span>(0)</span></div></li>
                    <li><div className="flex justify-between text-sm items-center pl-2 text-gray-400 cursor-not-allowed pr-4 my-2"><p>Large</p> <span>(0)</span></div></li>
                </ul>
                <div>
                    <img src="/images/sale_ad.png" alt="ad" width={1} height={1} className="w-full h-auto mix-blend-multiply" />
                </div>
            </div>
            <div className="w-[74%] pl-5 pt-0">
                <div className="flex justify-between items-center mb-10">
                    <ul className="flex justify-start items-center gap-5 font-semibold">
                        <li className="text-[#46A358] border-b border-b-[#46A358]">All Plants</li>
                        <li className="">New Arrivals</li>
                        <li className="">Sale</li>
                    </ul>
                    <div className="flex justify-end gap-3 items-center font-semibold ">
                        <p>Sorting: <select name="sort" className="outline-none font-normal" id="sort">
                            <option value="default">Default Sorting</option>
                            <option value="cheap">The Cheapest</option>
                            <option value="expencive">Most Expensive</option>
                        </select> </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 justify-items-center gap-5 ">
                    {products?.slice(0, 9).map((product)=>{
                        return(
                            <ProductCard key={product.id} product={product} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

