"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TopBrands = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const res = await fetch(
                    "https://sun-cart-ebon-eight.vercel.app/topbrands.json"
                );
                const data = await res.json();
                setBrands(data);
            } catch (error) {
                console.log("Error fetching brands:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBrands();
    }, []);

    return (
        <section className="w-11/12 mx-auto my-16 bg-[#f7ecdf]/20 p-8 rounded-4xl border border-[#f17621]/20">
            <h2 className="text-3xl font-bold text-center mb-10">
                Top Brands
            </h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading brands...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-[#f17621]/40 shadow-md rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                        >
                            {/* Brand Image */}
                            <div className="flex justify-center">
                                <Image
                                    src={brand.img}
                                    alt={brand.name}
                                    width={80}
                                    height={80}
                                    className=" object-contain group-hover:scale-110 transition duration-300"
                                />
                            </div>

                            {/* Brand Name */}
                            <h3 className="text-xl font-bold mt-4 text-gray-800">
                                {brand.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 text-sm mt-2">
                                {brand.desc}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default TopBrands;