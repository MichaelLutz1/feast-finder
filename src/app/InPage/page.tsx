"use client"
import React, { useState } from "react";

const InPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    };
    return (
        <div className="min-h-screen bg-[#121212] flex flex-col justify-start pt-12">
        <div className="w-full text-center mt-12">
            <h1 className="text-white text-5xl font-bold text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Make a delicious Home-cooked meal.
                </span>
            </h1>
        </div>
        <div className="text-white grid grid-cols-1 lg:grid-cols-12 ml-15 gap-8 p-4">
            <div className="col-span-12 lg:col-span-4 max-w-sm p-6">
                <h1 className="text-xl mb-2">
                    Browse your saved ingredients
                </h1>
                <p>Go through your inventory and pick whatever you think will form a delicious meal!</p>

                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mt-15 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={toggleDropDown}>View My Ingredients<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>

                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-4 max-w-sm p-6">
                <h1 className="text-xl mb-2">
                    Add new ingredients to your list
                </h1>
                <p>Bought something new? Add it to your ingredients list to make it available for future recipes!</p>
                <div>
                    <label htmlFor="small-input" className="block mb-10 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input type="text" id="small-input" className="mb-6 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <button type="button" className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Ingredient</button>
            </div>
            <div className="col-span-12 lg:col-span-4 max-w-sm p-6">
                <h1 className="text-xl mb-2">
                    Generate A Recipe
                </h1>
                <p>Watch our AI use the ingredients you provided to generate </p>
                <button type="button" className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-16 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Make me something Delicious</button>
            </div>
        </div>
        </div>
    )
}
export default InPage