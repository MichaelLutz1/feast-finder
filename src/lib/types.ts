
export interface Ingredient {
  name: string;
  description: string;
  type: string;
}

export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  description: string;
  link: string;
  prepTime: number;
  cookTime: number
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

