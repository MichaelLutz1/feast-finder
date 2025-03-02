import { atom } from 'jotai';

export interface Restaurant {
    id: string;
    name: string; // Mapped from display_name
    location?: {
      lat: number;
      lng: number;
    };
    businessStatus?: string;
    priceLevel?: number;
    rating?: number;
    reviews?: {
      author: string;
      rating: number;
      text: string;
    }[];
    websiteURI?: string;
    svgIconMaskURI?: string;
  }

export const searchQueryAtom = atom<string>("");
export const searchResultsAtom = atom<Restaurant[]>([]);

export const selectedRestaurantAtom = atom<Restaurant | null>(null);
export const mapCenterAtom = atom<{lat: number, lng: number}>({
  lat: 37.7749, 
  lng: -122.4194 // Default to San Francisco
});
export const mapZoomAtom = atom<number>(13);
