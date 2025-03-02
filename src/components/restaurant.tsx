"use client"
import React, { useState } from "react";

type PriceRange = {
    min: number;
    max: number;
  };

const Restaurant = () => {
    /*const ratings: string[] = ["bad","ok","good","great","amazing"];
    const types: string[] = ["Breakfast","Brunch","Lunch","Dinner"];*/
    const [name,] = useState<string>("Restaurant 1");
    /*The following uses of the functions are just to pass the linter checks*/
    const [rating,] = useState<string>("good");
    const [type,] = useState<string>("Lunch")
    const [range,] = useState<PriceRange>({min: 10,max:20});
    const [averageRating,] = useState<string>("4")

    return (
        <div>
            <a href="#" className="block max-w-sm p-6 bg-[#121212] border border-gray-200 rounded-lg shadow-sm hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h2 className="mb-2 text-lg font-bold tracking-tight text-white dark:text-white">{name}</h2>
                <p className=" text-sm font-normal text-white dark:text-gray-400">
                    This restaurant serves {type}.
                    You said that this restaurant was {rating},
                    The average rating for this restaurant is {averageRating} out of 5 stars.
                    The price range for this restaurant is ${range.min} to ${range.max}.

                </p>
            </a>
        </div>
    )
}
export default Restaurant