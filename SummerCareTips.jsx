import React from 'react';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';

const SummerCareTips = () => {
    return (

        <section className="w-11/12 mx-auto my-16">

            {/* Single Card Wrapper */}
            <div className="bg-[#f7ecdf]/20 shadow-lg rounded-2xl p-6">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <MdOutlineTipsAndUpdates className="text-[#f17621] text-3xl" />

                    <h2 className="text-3xl font-bold">
                        Summer Care Tips
                    </h2>
                </div>

                {/* Grid inside card */}
                <div className="grid grid-row-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">

                    <div className="p-4 border rounded-xl">
                        <h3 className="text-lg font-semibold mb-2"> Stay Hydrated</h3>
                        <p className="text-gray-600 text-sm">
                            Drink at least 8–10 glasses of water daily to keep your body cool and fresh during hot summer days.
                        </p>
                    </div>

                    <div className="p-4 border rounded-xl">
                        <h3 className="text-lg font-semibold mb-2">Skin Protection</h3>
                        <p className="text-gray-600 text-sm">
                            Always use sunscreen SPF 30+ before going outside to protect your skin from UV rays.
                        </p>
                    </div>

                    <div className="p-4 border  rounded-xl">
                        <h3 className="text-lg font-semibold mb-2">Avoid Heat</h3>
                        <p className="text-gray-600 text-sm">
                            Try to stay indoors during peak sunlight hours (12 PM - 4 PM) to avoid heat exhaustion.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}


export default SummerCareTips;