import { Star } from "lucide-react"
import { Restaurant } from "./atoms"
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Function to get the best review (highest rating)
const getBestReview = (reviews?: { author: string; rating: number; text: string }[]) => {
  if (!reviews || reviews.length === 0) return null;
  
  // Sort reviews by rating (highest first) and return the first one
  return [...reviews].sort((a, b) => b.rating - a.rating)[0];
};

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const bestReview = getBestReview(restaurant.reviews);
  
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-4">
        {restaurant.svgIconMaskURI ? (
          <Image src={restaurant.svgIconMaskURI} width={24} height={24} alt={restaurant.name} className="w-6 h-6 mr-2" />
        ) : (
          <div className="w-6 h-6 mr-2 bg-gray-200 rounded-full"></div>
        )}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">  {restaurant.name}</h2>
        <p className="text-gray-600 mb-2">Price Level: {restaurant.priceLevel}</p>
        
        {bestReview && (
          <div className="bg-gray-50 p-3 rounded-md mb-2">
            <p className="text-gray-600 italic">{bestReview.text}</p>
          </div>
        )}
        
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span className="text-gray-700">{restaurant.rating?.toFixed(1)}</span>
        </div>
        <Button onClick={() => window.open(restaurant.websiteURI, '_blank')}>Website</Button>
      </div>
    </div>
  )
}