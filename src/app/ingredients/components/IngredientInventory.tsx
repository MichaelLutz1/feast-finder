'use client'
import React, { useEffect, useState } from 'react'
import { Ingredient } from '@/lib/types'
import { getIngredients } from '@/lib/firestore'
import { useAuth } from '@/context/AuthContext'
import { User } from 'firebase/auth'
import { Nut, Hop, Apple, Beef, Fish, LeafyGreen, Milk, Wheat, CupSoda, CookingPot, ShoppingBasket, Loader2 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { useAtom } from 'jotai'
import { IngredientInventoryAtom, RecipeAtom } from './atoms'
import IngredientItem from './IngredientItem'
import { Button } from "@/components/ui/button";
import { generateRecipes } from '@/lib/generate-recipes'

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
export const IngredientInventory = () => {
  const [ingredients, setIngredients] = useAtom<Ingredient[]>(IngredientInventoryAtom);
  const [selectedIngredients, setSelectedIngredients] = useState<Record<number, boolean>>({});
  const [, setRecipes] = useAtom(RecipeAtom)
  const [loading, setLoading] = useState<boolean>(false)
  const [remove, setRemove] = useState<boolean>(false)
  const user = useAuth().user;
  useEffect(() => {
    // Fetch ingredients from Firestore
    const getIngredientsFromFirestore = async (user: User) => {
      const ingredients = await getIngredients(user);
      setIngredients(ingredients);
    }
    if (user) {
      getIngredientsFromFirestore(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const handleSelectAll = () => {
    const allSelected = Object.fromEntries(ingredients.map((_, index) => [index, true]));
    setSelectedIngredients(allSelected);
  }
  const handleDeselectAll = () => {
    setSelectedIngredients({})
  }

  const handleGenerate = async () => {
    const selectedItems = ingredients.filter((_, index) => selectedIngredients[index]);
    setLoading(true)
    try {
      const recipesResponse = await generateRecipes(selectedItems)
      setRecipes([...recipesResponse])
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  const toggleSelection = (index: number) => {
    setSelectedIngredients(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <Card className='h-full'>
      <CardContent className="">
        <h2 className="text-lg font-semibold mb-4 flex gap-2">Ingredient Inventory <ShoppingBasket /></h2>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            {ingredients.map((ingredient, index) => (
              <IngredientItem
                ingredient={ingredient}
                key={index}
                icon={iconMap[ingredient.type]}
                name={ingredient.name}
                description={ingredient.description}
                checked={!!selectedIngredients[index]}
                toggleSelection={() => toggleSelection(index)}
                remove={remove}
              />
            ))}
          </div>
        </ScrollArea>
        <Button className="border mt-3 ml-5" onClick={handleGenerate} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : null}
          Generate Recipes</Button>
        <Button className="border mt-3 ml-5" onClick={handleSelectAll}>Select All</Button>
        <Button className="border mt-3 ml-5" onClick={handleDeselectAll}>Deselect All</Button>
        <Button className="border mt-3 ml-5" onClick={() => setRemove(!remove)}>{remove ? "Add" : "Remove"}</Button>
      </CardContent>
    </Card>
  )
}

