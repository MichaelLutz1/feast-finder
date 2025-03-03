import React from "react";

import Restaurant from "@/components/restaurant";
const sampleRestaurant = {
    name: "Restaurant 1",
    location: "1234 Street Name",
    description: "This restaurant serves Lunch. You said that this restaurant was good, The average rating for this restaurant is 4 out of 5 stars. The price range for this restaurant is $10 to $20.",
    starRating: 3,
    priceRange: { min: 10, max: 20 },
    link: "#"
};

const OutPage = () => {
    return (
        <div className="min-h-screen bg-[#121212] flex flex-col justify-start pt-12">
            <div className="w-full text-center mt-12">
                <h1 className="text-white text-5xl font-bold text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Find a nearby Restaurant you&apos;ll love.
                    </span>
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 ml-4 gap-8 p-4">
                <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center text-white text-3xl mt-12">
                    <h1 className="text-center mb-4">Restaurants you&apos;ve liked.</h1>
                    <Restaurant restaurant={sampleRestaurant} ></Restaurant>
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center text-white text-3xl mt-12">
                    <h1 className="text-center mb-4">Let us know what you&apos;re craving</h1>
                    <textarea id="message" rows={3} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter restaurants, foods, or tastes you're craving..."></textarea>
                    <button
                        type="submit"
                        className="mt-4 p-2.5 w-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg border border-[#121212] focus:ring-4 focus:ring-blue-300 hover:bg-blue-600 focus:outline-none">
                        Find Place Near Me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OutPage
