import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosStar } from 'react-icons/io';

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('http://localhost:3000/data.json')
    const products = await res.json()

    const product = products.find(p => p.id == id)
    console.log(product)
    return (
        <div>
              <div className="w-full px-3 sm:px-5 lg:px-8 py-10">
  <Card
    className="
      w-full
      max-w-7xl
      mx-auto
      border border-orange-100
      rounded-3xl
      overflow-hidden
      bg-[#f7ecdf]/40
      shadow-md
      p-4 sm:p-6 lg:p-10 border border-2 border-orange-500/20
    "
  >
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">

      {/* Product Image */}
      <div
        className="
          relative
          w-full
          lg:w-[55%]
          h-[320px]
          sm:h-[450px]
          lg:h-[620px]
          rounded-3xl
          overflow-hidden
          bg-[#f7ecdf]
        "
      >
        <Image
          src={product.image}
          fill
          alt={product.name}
          className="
            object-contain
            p-6 sm:p-8 lg:p-10
            hover:scale-105
            transition-transform duration-300
          "
        />
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-[45%]">

        {/* Category */}
        <Chip
          className="
            bg-orange-100
            text-[#f17621]
            border border-orange-500
            text-xl sm:text-sm
            mb-4 px-4 font-bold
          "
        >
          {product.category}
        </Chip>

        {/* Product Name */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-800
            leading-tight
          "
        >
          {product.name}
        </h1>

        {/* Description */}
        <p
          className="
            text-sm
            sm:text-base
            lg:text-lg
            text-gray-600
            mt-5
            leading-relaxed
          "
        >
          {product.description}
        </p>

        {/* Price */}
        <h2
          className="
            text-3xl
            sm:text-4xl
            font-bold
            text-[#f17621]
            mt-6
          "
        >
          ${product.price}
        </h2>

        {/* Rating */}
       
        <div
          className="
            flex items-center gap-2
            bg-[#f17621]
            text-white
            px-4 py-2
            rounded-full
            w-fit
            mt-5
          "
        >
          <span className="font-medium">
            {product.rating}
          </span>

          <IoIosStar className="text-lg" />
        </div>

        {/* Buttons */}
       
      </div>
    </div>
  </Card>
</div>
        </div>
    );
};

export default ProductDetailsPage;