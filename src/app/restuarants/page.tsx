'use client'
import SearchBar from '@/app/restuarants/components/searchBar';
import RestaurantCard from './components/restuarant-card';
import { searchResultsAtom } from './components/atoms';
import { useAtom } from 'jotai';
import RestaurantNavigation from './components/RestaurantNavigation';




export default function Restaurants() {
const [searchResults] = useAtom(searchResultsAtom); // Example coordinates


  

  return (
    <div>
        <SearchBar />
        <div className="max-w-7xl mx-auto py-10">
            {searchResults.length > 0 ? (
                <>
                    <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Your Recommended Restaurant Spots</h1>
                    <RestaurantNavigation restaurants={searchResults}/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {searchResults.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))}
                        </div>
                </>
            ) : (
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center"></h1>
            )}
        </div>
    </div>
  );
};

