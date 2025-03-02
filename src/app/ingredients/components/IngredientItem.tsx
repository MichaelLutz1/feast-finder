'use client'
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { removeIngredient } from "@/lib/firestore"
import { Ingredient } from "@/lib/types"
import { useAtom } from "jotai"
import { Trash2 } from "lucide-react"
import { IngredientInventoryAtom } from "./atoms"

interface IngredientItemProps {
  ingredient: Ingredient
  icon: React.ReactNode
  name: string
  description: string
  checked: boolean
  toggleSelection: () => void
  remove: boolean
}

export default function IngredientItem({ ingredient, icon, name, description, checked, toggleSelection, remove }: IngredientItemProps) {
  const { user } = useAuth()
  const [, setIngredients] = useAtom<Ingredient[]>(IngredientInventoryAtom);

  const handleRemove = async () => {
    removeIngredient(user, ingredient)
    setIngredients((prevIngredients) =>
      prevIngredients.filter((item) => item.name !== ingredient.name)
    );
  }

  return (
    <div className="flex items-center justify-between space-x-3">
      <div className="flex items-start space-x-3">
        <div className="mt-0.5 bg-muted rounded-md p-2">{icon}</div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      {remove ? (
        <Button onClick={handleRemove} className="border" ><Trash2 /></Button>
      ) :
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleSelection}
          className="w-5 h-5 cursor-pointer"
        />
      }
    </div>
  )
}
