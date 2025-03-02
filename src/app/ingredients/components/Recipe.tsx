import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Recipe } from "@/lib/types"

export function RecipeEntry({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="w-full max-w-3xl mx-auto mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{recipe.name}</CardTitle>
        <CardDescription className="text-base mt-2">
          {recipe.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc pl-5 space-y-1">
            {recipe.ingredients.map((ingredient, index) => {
              return (
                <li key={index}>{ingredient}</li>
              )
            })}
          </ul>
        </div>
        <Separator />
        <div>
          <h3 className="text-lg font-semibold mb-2">Instructions</h3>
          <ol className="list-decimal pl-5 space-y-2">
            {recipe.instructions.map((instruction, index) => {
              return (
                <li key={index}>{instruction}</li>
              )
            })}
          </ol>
        </div>

        <div className="bg-muted p-4 rounded-md mt-2">
          <p className="text-sm italic">Prep Time: {recipe.prepTime} | Cook Time: {recipe.cookTime}</p>
        </div>
      </CardContent>
    </Card>
  )
}
