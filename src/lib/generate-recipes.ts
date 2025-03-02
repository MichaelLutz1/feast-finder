import { GoogleGenerativeAI } from "@google/generative-ai";
import { Ingredient } from "./types";

const promptFormat = {
  name: "name of the recipe",
  ingredients: "ingredients",
  instructions: "instructions",
  time: "time in minutes",
  link: "link"
}

export const generatePrompt = (ingredients: Ingredient[]) => {
  const ingredientsString = ingredients.map((ingredient) => ingredient.name).join(", ");
  const prompt = `Describe exactly 3 recipes that uses ${ingredientsString} as ingredients. Return the result as an array in the format: ${JSON.stringify(promptFormat)}`;
  return prompt;
}

export async function generateRecipes(ingredients: Ingredient[]) {
  const prompt = generatePrompt(ingredients);
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash-exp" }, { apiVersion: "v1beta" });
  const result = await model.generateContent(prompt);
  let response = result.response.text();
  if (response.includes("```json")) {
    response = response.split("```json")[1].split("```")[0];
  }
  const recipe = JSON.parse(response);
  console.log(recipe);
  return recipe;

}
