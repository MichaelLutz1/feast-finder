"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { searchQueryAtom, searchResultsAtom, selectedRestaurantAtom, mapCenterAtom, mapZoomAtom} from "./atoms"
import { useAtom } from "jotai"
import { useMemo, useState } from "react"
import { Restaurant } from "./atoms"


export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
  const [searchResults,setSearchResults] = useAtom(searchResultsAtom)
  const [center,] = useAtom(mapCenterAtom)
  const [selectedRestaurant,] = useAtom(selectedRestaurantAtom)
  const [zoom,] = useAtom(mapZoomAtom)
  const [activeInfoWindow, setActiveInfoWindow] = useState<string | null>(null);


  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"]
  });


  const mapOptions = useMemo(() => ({
    center,
    zoom,
    mapContainerStyle: {
      width: '75%',
      height: '450px',
      margin: '0 auto',
      borderRadius: '10px',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      marginTop: '60px',
    },
  }), [center, zoom]);

  const fetchPlaces = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const {Place} = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;

            const request = {
                textQuery: searchQuery,
                fields : ['id', 'displayName', 'location', 'businessStatus', 'priceLevel', 'rating', 'reviews', "websiteURI", "svgIconMaskURI"],
                includedType: 'restaurant',
                language: 'en-US',
                maxResultCount: 6,
                minRating: 3,
                region: 'us',
                useStrictTypeFiltering: false
            }

            const {places} = await Place.searchByText(request)
            console.log(places)
            const restaurants = places.map((place) => ({
                id: place.id || "",
                name: place.displayName || "",
                location: {
                    lat: place.location?.lat() || 0,
                    lng: place.location?.lng() || 0
                },
                businessStatus: place.businessStatus || undefined,
                priceLevel: place.priceLevel !== null ? place.priceLevel : undefined,
                rating: place.rating !== null ? place.rating : undefined,
                reviews: place.reviews?.map((review) => ({
                    author: "",
                    rating: review.rating || 0,
                    text: review.text || ""
                })) || [],
                websiteURI: place.websiteURI || undefined,
                svgIconMaskURI: place.svgIconMaskURI || undefined
            }))
            setSearchResults(restaurants as Restaurant[])
            console.log(searchResults)
        } catch (error) {
            console.error('Error fetching places:', error)
        }
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
      }


  return (
    <div>
        <h1>My Map</h1>
        <GoogleMap {...mapOptions}>
            {selectedRestaurant && selectedRestaurant.location && (
                <Marker
                  position={{
                    lat: selectedRestaurant.location.lat,
                    lng: selectedRestaurant.location.lng
                  }}
                  onClick={() => setActiveInfoWindow(selectedRestaurant.id)}
                >
                  {activeInfoWindow === selectedRestaurant.id && (
                    <InfoWindow onCloseClick={() => setActiveInfoWindow(null)}>
                      <div className="p-2">
                        <h3 className="font-medium">{selectedRestaurant.name}</h3>
                        {selectedRestaurant.rating && (
                          <p className="text-sm">Rating: {selectedRestaurant.rating} ⭐</p>
                        )}
                        <Button onClick={() => window.open(selectedRestaurant.websiteURI, '_blank')}>Website</Button>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              )}
        </GoogleMap> 

        <div className=" flex flex-col items-center justify-center p-4 bg-slate-50">
            <div className="w-full max-w-3xl space-y-8">
                <h1 className="text-3xl font-bold text-center">Find your feast</h1>
                <div className="w-full max-w-md mx-auto">
                <form
                    onSubmit={fetchPlaces}
                    className="flex items-center space-x-2 bg-background rounded-lg border border-input shadow-sm hover:shadow-md transition-shadow duration-200 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                >
                    <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    </div>
                    <Button type="submit" variant="ghost" size="sm" className="mr-1 ">
                    Search
                    </Button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}