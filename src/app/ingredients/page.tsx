'use client'
import { IngredientScanner } from "@/app/ingredients/components/ingredientScanner";
import { Content } from "@/app/ingredients/components/content";

export default function Ingredients() {
  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="flex grow flex-col border-b overflow-hidden">
        <Content/>
        <IngredientScanner />
      </div>
    </div>
  );
}