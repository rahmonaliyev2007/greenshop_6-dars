"use client";

import { useGetDataQuery } from "@/app/redux/Rtk";
import { useState, useMemo } from "react";
import { Slider } from "antd";
import ProductCard from "./ProductCard";

export default function Main() {
    const { data: products = [], isLoading, isError } = useGetDataQuery("flowers");
    const [price, setPrice] = useState([0, 2000]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [sortOrder, setSortOrder] = useState("default");
    const [filteredPrice, setFilteredPrice] = useState([0, 2000]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const categories = useMemo(() => {
        const categoryCounts = {};
        products.forEach((product) => {
            categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
        });
        return categoryCounts;
    }, [products]);

    const handleFilterApply = () => {
        setFilteredPrice(price);
    };

    const filteredProducts = useMemo(() => {
        return products
            .filter(product => 
                (selectedCategory === "All" || product.category === selectedCategory) &&
                (selectedFilter === "All" || (selectedFilter === "New Arrivals" && product.type === "new") || 
                (selectedFilter === "Sale" && product.isSale)) &&
                product.price >= filteredPrice[0] && product.price <= filteredPrice[1]
            )
            .sort((a, b) => {
                if (sortOrder === "cheap") return a.price - b.price;
                if (sortOrder === "expensive") return b.price - a.price;
                return 0;
            });
    }, [products, selectedCategory, selectedFilter, filteredPrice, sortOrder]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="max-w-[1240px] px-4 m-auto flex justify-between items-start gap-6 mt-10">
            <div className="w-[24%] bg-[#FBFBFB] pt-4 rounded-xl overflow-hidden">
                <div className="px-3">
                    <h3 className="font-bold text-lg">Categories</h3>
                    <ul className="transition-colors">
                        <li className={`cursor-pointer flex justify-between items-center pl-2 pr-4 my-2 font-normal hover:text-[#46A358] ${selectedCategory === "All" ? "text-[#46A358] font-semibold" : ""}`} onClick={() => setSelectedCategory("All")}>All <span>({products.length})</span></li>
                        {Object.entries(categories).map(([category, count]) => (
                            <li key={category} className={`cursor-pointer flex justify-between items-center pl-2 pr-4 my-2 font-normal hover:text-[#46A358] ${selectedCategory === category ? "text-[#46A358] font-semibold" : ""}`} onClick={() => setSelectedCategory(category)}>
                                {category} <span>({count})</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4 px-3">
                    <h2 className="font-semibold mb-2">Price Range</h2>
                    <div className="px-3">
                        <Slider range min={0} max={2000} step={1} value={price} trackStyle={[{ backgroundColor: "#46A358" }]} onChange={(value) => setPrice(value)} />
                    </div>
                    <p className="text-[#46A358] font-medium">Price: ${price[0]} – ${price[1]}</p>
                    <button onClick={handleFilterApply} className="cursor-pointer mt-2 px-4 py-2  font-semibold rounded-lg bg-[#46A358] text-white">Filter</button>
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
                        {['All', 'New Arrivals', 'Sale'].map(filter => (
                            <li key={filter} className={`cursor-pointer ${selectedFilter === filter ? "text-[#46A358] border-b border-b-[#46A358]" : ""}`} onClick={() => setSelectedFilter(filter)}>
                                {filter}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end gap-3 items-center font-semibold">
                        <p>Sorting: 
                            <select name="sort" className="outline-none font-normal" id="sort" onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="default">Default Sorting</option>
                                <option value="cheap">The Cheapest</option>
                                <option value="expensive">Most Expensive</option>
                            </select>
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 justify-items-center gap-5 ">
                    {paginatedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="flex justify-end items-center gap-2 mt-5">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-[#46A358] text-white" : "bg-gray-200"}`}>{i + 1}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}