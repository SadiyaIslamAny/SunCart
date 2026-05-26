// import { Card, Chip, Separator } from "@heroui/react";
// import Image from "next/image";
// import { Button } from '@heroui/react';
// import Link from "next/link";
// import { FcRating } from "react-icons/fc";



// const ProductsCard = ({ product }) => {
//     // console.log(photo)
//     return (
//         <Card className="border rounded-xl">
//             <div className="relative w-full aspect-square">
//                 <Image
//                     src={product.image}
//                     fill={true}
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     alt={product.name}
//                     className="object-cover rounded-xl"
//                 />
//                 <Chip size="sm" className="absolute right-2 top-2">{product.category}</Chip>

//             </div>
//             <div>
//                 <h2 className="font-medium">{product.name}</h2>
//             </div>
//             <div className="flex gap-5">
//                 <div className="flex items-center gap-2">
//                     <FcRating className="text-xl" />
//                     <p>{product.rating}</p>
//                 </div>

//                 <Separator orientation="vertical"/>

//                 <div className="flex items-center gap-2">
//                     <p>${product.price}</p>
//                 </div>
//             </div>

//             <Link href={`/all-photos/${product.id}`}><Button variant="outline" className={''}>View</Button></Link>
//         </Card>
//     );
// };

// export default ProductsCard;


import { Card, Chip, Separator, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FcRating } from "react-icons/fc";

const ProductsCard = ({ product }) => {
    return (
        <Card
            className="
                border rounded-2xl overflow-hidden
                p-3 sm:p-4
                hover:shadow-lg transition-all duration-300
            "
        >
            {/* Product Image */}
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                <Image
                    src={product.image}
                    fill
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           33vw"
                    alt={product.name}
                    className="
                        object-cover
                        object-top
                        rounded-xl
                        hover:scale-105
                        transition-transform duration-300
                    "
                />

                {/* Category Chip */}
                <Chip
                    size="sm"
                    variant="bordered"
                    className="
                        absolute right-2 top-2
                        border-[#f17621]
                        text-[#f17621]
                        bg-white/80 backdrop-blur-sm
                        text-xs sm:text-sm
                    "
                >
                    {product.category}
                </Chip>
            </div>

            {/* Product Info */}
            <div className="mt-3 space-y-3">
                <h2
                    className="
                        font-semibold
                        text-sm sm:text-base lg:text-lg
                        line-clamp-1
                    "
                >
                    {product.name}
                </h2>

                {/* Rating & Price */}
                <div className="flex items-center gap-3 sm:gap-5">
                    <div className="flex items-center gap-1">
                        <FcRating className="text-lg sm:text-xl" />
                        <p className="text-sm sm:text-base">
                            {product.rating}
                        </p>
                    </div>

                    <Separator orientation="vertical" className="h-5" />

                    <div>
                        <p
                            className="
                                font-medium
                                text-sm sm:text-base
                            "
                        >
                            ${product.price}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <Link href={`/all-photos/${product.id}`}>
                    <Button
                        className="
                            w-full
                            bg-[#f17621]
                            text-white
                            font-medium
                            text-sm sm:text-base
                        "
                    >
                        View Details
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default ProductsCard;