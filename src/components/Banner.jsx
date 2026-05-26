import Link from "next/link";
import Image from "next/image";

const Banner = () => {
    return (

        <div className="relative w-11/12 min-h-[90vh] overflow-hidden mx-auto bg-[#f7ecdf] rounded-[22px] sm:rounded-[30px] lg:rounded-[40px]">

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[85vh] lg:min-h-[90vh] px-4 sm:px-6 md:px-10 lg:px-20 py-10 lg:py-0">
                {/*left site*/}
                <div className="relative w-full flex justify-center lg:absolute lg:left-1/3 lg:bottom-0 lg:-translate-x-1/2 pointer-events-none order-1 lg:order-none">
                    {/* image */}
                    <Image
                        src="/images/banner.png"
                        alt="Summer Girl"
                        width={1000}
                        height={1000}
                        priority
                        quality={100}
                        className="relative z-20 object-contain w-auto h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[95vh] max-w-none drop-shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                    />
                </div>
                {/* offer card */}
                <div className=" border-2 border-[#f17621]/70 bg-white/80 backdrop-blur-xl px-4 md:px-5 py-3 md:py-4 rounded-2xl shadow-2xl w-[160px] sm:w-[180px] z-30 relative mt-5 lg:mt-0 order-2 lg:absolute lg:left-[37.5%] lg:top-[90px]">
                    <p className="font-semibold text-[#f17621] text-sm sm:text-base">
                        HOT DEALS 🔥
                    </p>

                    <span className="text-xs sm:text-sm md:text-base text-gray-400">
                        summer sale
                    </span>

                    <h3 className="mt-1 text-xl sm:text-2xl font-bold leading-none text-black">
                        50% OFF
                    </h3>
                </div>

                {/* space */}
                <div className="hidden lg:block flex-1"></div>

                {/*right site*/}
                <div className="relative z-20 flex-1 max-w-xl text-center lg:text-right mt-8 lg:mt-0 order-3 px-2 sm:px-4 md:px-6 lg:my-8">

                    {/* heading*/}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-black">
                        Summer <br />
                        Essentials Store
                    </h1>

                    {/* description */}
                    <p className="mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-black/60 leading-relaxed max-w-md lg:ml-auto">
                        Discover trendy fashion, stylish accessories,
                        skincare, and seasonal must-haves for your
                        perfect summer lifestyle.
                    </p>

                    {/* button */}
                    <div className="mt-7 md:mt-8 flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-4 flex-wrap">

                        <button className="group w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#f17621] text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                            Shop Now

                            <span className="inline-block ml-2 group-hover:translate-x-1 transition">
                                →
                            </span>
                        </button>

                        <button className="w-full sm:w-auto px-7 md:px-8 py-3 md:py-4 rounded-full border border-black/20 bg-white/60 backdrop-blur-md text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
                            Explore Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );


};

export default Banner;

