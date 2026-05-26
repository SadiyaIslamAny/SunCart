import Image from 'next/image';
import React from 'react';
const brands = [
    {
      name: "Nike",
      desc: "Just Do It",
      img: "data:image/png;base64,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",
    },
    {
      name: "Adidas",
      desc: "Impossible is Nothing",
      img: "https://i.imgur.com/8Km9tLL.png",
    },
    {
      name: "Zara",
      desc: "Trendy Fashion",
      img: "https://i.imgur.com/1bX5QH6.png",
    },
    {
      name: "H&M",
      desc: "Affordable Style",
      img: "https://i.imgur.com/3ZQ3ZQb.png",
    },
  ];
const TopBrands = () => {
    return (
       <section className="w-11/12 mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        🏷️ Top Brands
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-6 text-center hover:-translate-y-2"
          >
            {/* Image */}
            <div className="flex justify-center">
            <Image
                 src={brand.img}
                                    alt="Summer Girl"
                                    width={1000}
                                    height={1000}
                                    
                                />
                
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-gray-800">
              {brand.name}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2">
              {brand.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default TopBrands;