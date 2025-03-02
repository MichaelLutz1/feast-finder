
export interface Ingredient {
  name: string;
}

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  description: string;
  link: string;
  imageUrl: string;
}

export interface RestaurantType {
  name: string;
  location: string;
  description: string;
  starRating: number;
  priceRange: {
    min: number;
    max: number;
  };
  link: string;
}
