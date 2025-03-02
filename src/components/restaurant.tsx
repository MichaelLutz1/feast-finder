"use client"
import { RestaurantType } from "@/lib/types";
import React from "react";


const Restaurant = ({ restaurant }: { restaurant: RestaurantType }) => {

    return (
        <div>
            <a href="#" className="block max-w-sm p-6 bg-[#121212] border border-gray-200 rounded-lg shadow-sm hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h2 className="mb-2 text-lg font-bold tracking-tight text-white dark:text-white">{restaurant.name}</h2>
                <p className=" text-sm font-normal text-white dark:text-gray-400">
                    This restaurant serves {restaurant.description}.
                    You said that this restaurant was {restaurant.starRating},
                    The average rating for this restaurant is {restaurant.starRating} out of 5 stars.
                    The price range for this restaurant is ${restaurant.priceRange?.min} to ${restaurant.priceRange?.max}.

                </p>
            </a>
        </div>
    )
}
export default Restaurant
