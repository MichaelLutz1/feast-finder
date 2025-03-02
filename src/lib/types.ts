
export interface Ingredient{
  name: string;
}

export interface Recipe{
  name: string;
  ingredients: Ingredient[];
  description: string;
  link: string;
  imageUrl: string;
}

export interface Restaurant{
  name: string;
  location: string;
  description: string;
  link: string;
}
