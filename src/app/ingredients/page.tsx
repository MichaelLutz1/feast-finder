'use client'
import { IngredientScanner } from "@/app/ingredients/components/ingredientScanner";
import { Content } from "@/app/ingredients/components/content";
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Nut, Hop, Apple, Carrot, ChevronsUpIcon as Cheese, Beef, Fish, Egg, LeafyGreen, Milk, Wheat, CupSoda, CookingPot } from "lucide-react"
import { useAtom } from "jotai"
import { ScannedIngredientsAtom } from "./components/atoms"
import { Ingredient } from "@/lib/types";
import { Button } from "@/components/ui/button";
import IngredientItem from "@/app/ingredients/components/IngredientItem";
import { useState } from "react";

// type: "could be one of the following: fruit, vegetable, meat, dairy, grain, spice, seafood, condiment, nut, beverage, other",
const iconMap: Record<string, React.JSX.Element> = {
  fruit: <Apple className="h-5 w-5 text-red-500" />,
  vegetable: <LeafyGreen className="h-5 w-5 text-green-500" />,
  meat: <Beef className="h-5 w-5 text-red-500" />,
  dairy: <Milk className="h-5 w-5 text-rose-700" />,
  grain: <Wheat className="h-5 w-5 text-yellow-800" />,
  spice: <Hop className="h-5 w-5" />,
  seafood: <Fish className="h-5 w-5 text-blue-500" />,
  condiment: <Milk className="h-5 w-5 text-slate-500" />,
  nut: <Nut className="h-5 w-5" />,
  beverage: <CupSoda className="h-5 w-5" />,
  other: <CookingPot className="h-5 w-5" />,

};



export default function Ingredients() {
  const toggleSelection = (index: number) => {
    setSelectedIngredients(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleAddToCart = async () => {
    const selectedItems = scannedIngredients.filter((_, index) => selectedIngredients[index]);
    console.log(selectedItems)

    if (selectedItems.length === 0) {
      alert("No ingredients selected!");
      return;
    }

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients: selectedItems }),
      });

      if (!response.ok) throw new Error("Failed to add items");

      alert("Ingredients added to cart!");
      setSelectedIngredients({}); // Clear selection after submission
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };
  const [selectedIngredients, setSelectedIngredients] = useState<Record<number, boolean>>({});
  const [scannedIngredients,] = useAtom(ScannedIngredientsAtom)
  return (
    <div className="flex flex-row h-[100dvh] justify-center">
      <div className="flex min-h-screen items-center justify-center p-4 py-6 w-full">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <Card>
              <CardContent className="">
                <h2 className="text-lg font-semibold mb-4">Ingredients</h2>
                {scannedIngredients.length === 0 ? (
                  <>
                    <ScrollArea className="h-[500px] pr-4">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-start space-x-3">
                            <div className="mt-0.5 bg-muted rounded-md p-2">{<Apple className="h-5 w-5 text-yellow-500" />}</div>
                            <div>
                              <h3 className="font-medium">Fruits</h3>
                              <p className="text-sm text-muted-foreground">Apples, bananas, berries, citrus</p>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-center space-x-3">
                          <div className="flex items-start space-x-3">
                            <div className="mt-0.5 bg-muted rounded-md p-2">{<Carrot className="h-5 w-5 text-yellow-500" />}</div>
                            <div>
                              <h3 className="font-medium">Vegetables</h3>
                              <p className="text-sm text-muted-foreground">Carrots, broccoli, peppers, onions</p>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-center space-x-3">
                          <div className="flex items-start space-x-3">
                            <div className="mt-0.5 bg-muted rounded-md p-2">{<Cheese className="h-5 w-5 text-yellow-500" />}</div>
                            <div>
                              <h3 className="font-medium">Dairy</h3>
                              <p className="text-sm text-muted-foreground">Cheese, milk, yogurt, butter</p>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-center space-x-3">
                          <div className="flex items-start space-x-3">
                            <div className="mt-0.5 bg-muted rounded-md p-2">{<Beef className="h-5 w-5 text-rose-700" />}</div>
                            <div>
                              <h3 className="font-medium">Meat</h3>
                              <p className="text-sm text-muted-foreground">Beef, chicken, pork, lamb</p>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-center space-x-3">
                          <div className="flex items-start space-x-3">
                            <div className="mt-0.5 bg-muted rounded-md p-2">{<Fish className="h-5 w-5 text-blue-500" />}</div>
                            <div>
                              <h3 className="font-medium">Seafood</h3>
                              <p className="text-sm text-muted-foreground">Fish, shrimp, crab, mussels</p>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-center space-x-3">
                          <div className="flex items-start space-x-3">
                            <div className="mt-0.5 bg-muted rounded-md p-2">{<Egg className="h-5 w-5 text-amber-200" />}</div>
                            <div>
                              <h3 className="font-medium">Eggs & Alternatives</h3>
                              <p className="text-sm text-muted-foreground">Eggs, tofu, tempeh</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </>
                ) : (
                  <>
                    <ScrollArea className="h-[500px] pr-4">
                      <div className="space-y-4">
                        {
                          scannedIngredients.map((ingredient: Ingredient, index: number) => (
                            <IngredientItem
                              key={index}
                              icon={iconMap[ingredient.type]}
                              name={ingredient.name}
                              description={ingredient.description}
                              checked={!!selectedIngredients[index]}
                              toggleSelection={() => toggleSelection(index)}
                            />
                          ))
                        }
                      </div>
                    </ScrollArea>
                    <Button className="border mt-3" onClick={handleAddToCart}>Add to my Cart</Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="flex grow flex-col border rounded-lg overflow-hidden w-2/3 p-8">
            <Content />
            <IngredientScanner />
          </div>
        </div>
      </div>
    </div>
  );
}
