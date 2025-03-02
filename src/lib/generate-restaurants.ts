import { GoogleGenerativeAI } from "@google/generative-ai";
import { RestaurantType } from "./types";

const sampleRestaurant: RestaurantType = {
  name: "Restaurant name",
  location: "Approximate location",
  description: "Description of the restaurant, what kind of food it serves, etc.",
  starRating: 3,
  priceRange: { min: 10, max: 20 },
  link: "actual link to the restaurant"
};

export const generatePrompt = (userInput: string) => {
  const prompt = `Generate exactly 3 restaurants based on what the user says they want to eat:${userInput}. Return the result in JSON with this format ${JSON.stringify(sampleRestaurant)}`;
  return prompt;
}

export async function generateRestaurants(userInput: string): Promise<RestaurantType[]> {
  try {
    const prompt = generatePrompt(userInput);
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMENI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash-exp" }, { apiVersion: "v1beta" });
    const result = await model.generateContent(prompt);
    let response = result.response.text();
    if (response.includes("```json")) {
      response = response.split("```json")[1].split("```")[0];
    }
    const restaurants = JSON.parse(response);
    return restaurants;
  } catch (error) {
    console.error(error);
    return [];
  }

}
