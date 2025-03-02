"use client";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useAtom } from 'jotai';
import { Restaurant, selectedRestaurantAtom, mapCenterAtom, mapZoomAtom } from './atoms';

interface RestaurantNavigationProps {
  restaurants: Restaurant[];
}

export default function RestaurantNavigation({ restaurants }: RestaurantNavigationProps) {
  const [, setSelectedRestaurant] = useAtom(selectedRestaurantAtom);
  const [, setMapCenter] = useAtom(mapCenterAtom);
  const [, setMapZoom] = useAtom(mapZoomAtom);

  const navigateToRestaurant = (restaurant: Restaurant) => {
    if (restaurant.location) {
      setMapCenter({
        lat: restaurant.location.lat,
        lng: restaurant.location.lng
      });
      setSelectedRestaurant(restaurant);
      setMapZoom(16);
    }
  };

  return (
    <div className="my-4 flex items-center flex-col justify-center">
      <div className="flex flex-wrap gap-2">
        {restaurants.map((restaurant) => (
          <Button 
            key={restaurant.id}
            variant="outline" 
            size="sm"
            className="flex items-center gap-1"
            onClick={() => navigateToRestaurant(restaurant)}
            disabled={!restaurant.location}
          >
            <MapPin className="h-3 w-3" />
            {restaurant.name}
          </Button>
        ))}
      </div>
    </div>
  );
} 