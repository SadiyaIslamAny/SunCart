import { Card, Chip, Separator, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FcRating } from "react-icons/fc";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const ProductsCard = ({ product }) => {
    return (

<Card
  className="
    border border-orange-100
    rounded-3xl
    overflow-hidden
    p-3 sm:p-4 lg:p-5
    hover:shadow-xl
    transition-all duration-300
    bg-[#f7ecdf]/40
  "
>
  {/* Product Image */}
  <div
    className="
      relative
      w-full
      aspect-square
      overflow-hidden
      rounded-4xl
      bg-[#f7ecdf]/20
    "
  >
    <Image
      src={product.image}
      fill
      alt={product.name}
      sizes="
        (max-width: 640px) 100vw,
        (max-width: 1024px) 50vw,
        33vw
      "
      className="
        object-contain
        p-4 sm:p-6
        hover:scale-105
        transition-transform duration-300
      "
    />
  </div>

  {/* Product Info */}
  <div className="mt-4 sm:mt-5">
    
    {/* Category */}
    <Chip
      size="sm"
      className="
        bg-orange-100
        text-[#f17621]
        border-0
        text-[10px] sm:text-sm
        mb-3
        p-2
      "
    >
      {product.category}
    </Chip>

    {/* Product Name */}
    <h2
      className="
        text-base sm:text-lg lg:text-xl
        font-semibold
        text-gray-800
        line-clamp-1
      "
    >
      {product.name}
    </h2>

    {/* Price */}
    <p
      className="
        text-xl sm:text-2xl
        font-bold
        text-[#f17621]
        mt-2
      "
    >
      ${product.price}
    </p>

    {/* Rating + View Details */}
    <div className="flex items-center justify-between mt-4 gap-3">
      
      {/* Rating */}
      <div
        className="
          flex items-center gap-1
          bg-[#f17621]
          text-white
          px-2 sm:px-3
          py-1
          rounded-full
          w-fit
        "
      >
        <span className="text-xs sm:text-sm font-medium">
          {product.rating}
        </span>

        <IoIosStar className="text-sm sm:text-base" />
      </div>

      {/* View Details */}
      <Link href={`/all-products/${product.id}`}>
        <button
          className="
            text-xs sm:text-sm md:text-base
            font-medium
            border-2 border-orange-500 rounded-4xl py-1 px-2
            text-[#f17621]
            hover:text-[#d96313]
            transition
            whitespace-nowrap animate__animated animate__headShake animate__infinite
          "
        >
          View Details 
        </button>
      </Link>
    </div>
  </div>
</Card>
    );
};

export default ProductsCard;