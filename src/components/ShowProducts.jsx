import React from 'react';
import ProductsCard from './ProductsCard';

const ShowProducts = async () => {
    const res = await fetch("https://sun-cart-ebon-eight.vercel.app/data.json");
    const products = await res.json()
    const popularProducts = products.slice(0,3)
    // console.log(popularProducts)
    return (
         <div className="w-11/12 mx-auto py-10">

            {/* Section Title */}
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f17621] animate__animated animate__pulse animate__infinite">
                    Popular Products
                </h1>

                <p className="text-gray-400 mt-3 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                    Discover our trending summer essentials with stylish fashion,
                    premium accessories, skincare products, and seasonal
                    designed for your perfect summer lifestyle.
                </p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-8">
                {
                    popularProducts.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default ShowProducts;