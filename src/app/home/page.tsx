"use client"
import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { Button } from "@/components/ui/button"
import { generateRecipes } from '@/lib/generate-recipes'
import { Recipe } from '@/lib/types'

const ingredients = [
  {
    name: "tomato",
  },
  {
    name: "onion",
  },
  {
    name: "garlic",
  }
]

export default function Page() {
  const { user, logout } = useAuth()
  const [loading, setLoading] = React.useState(false)
  const [recipes, setRecipes] = React.useState<Recipe[]>([])

  const handleGenerateRecipes = async () => {
    setLoading(true)
    const recipes = await generateRecipes(ingredients)
    console.log(recipes)
    setRecipes(recipes)
    setLoading(false)
  }



  return (
    <>
      <div>Testing page</div>
      <div>{user?.email} {user?.displayName}</div>
      <Button onClick={() => logout()}>Sign out</Button>
      <Button onClick={handleGenerateRecipes}>Generate Image</Button>
      {loading && <div>Loading...</div>}
      {recipes.length > 0 && <div>{recipes[0].link}</div>}
    </>

  )
}

