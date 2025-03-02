import React from "react"
import { CookingPot } from 'lucide-react';
import {Car} from 'lucide-react'
import Link from 'next/link'

const InAndOut = () => {
   return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold">Welcome to Feast Finder.</h1>
        <p className="text-lg">Start with choosing whether you&apos;d like to eat in or out.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 ml-4 gap-8 p-4">
        <div className="col-span-12 lg:col-span-6 max-w-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            <CookingPot className="mt-4"></CookingPot>
              I&apos;d like to dine in.
            </h5>
          </a>
          <p className="mb-3 font-bold text-white dark:text-gray-400">Our AI helper will create the most delicious recipes using just the ingredients available to you.</p>
          <Link href="/InPage" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-6 max-w-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            <Car className="mt-4"></Car>
              I&apos;d like to dine out.
            </h5>
          </a>
          <p className="mb-3 font-bold text-white dark:text-gray-400">Don&apos;t feel like cooking? Let us help you find nearby, high-quality restaurants matching your tastes. </p>
          <Link href="/restuarants" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">             Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
   )
}
export default InAndOut

