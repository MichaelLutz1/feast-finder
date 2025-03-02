"use client"
import React, { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useAuth } from "@/context/AuthContext"
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useAtom } from "jotai"
import { IngredientInventoryAtom } from "../ingredients/components/atoms"




const Profile = () => {
  const { user } = useAuth()
  const [selectedTab, setSelectedTab] = useState("Ingredients")
  const [inventory, ] = useAtom(IngredientInventoryAtom)

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setSelectedTab(tab)
  }

  const TableContent = () => {
    if (selectedTab === "Ingredients") {
      return (
        <Table>
          <TableHeader>
            <TableRow>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((ingredient, index) => (
              <TableRow key={index}>
                <TableCell>{ingredient.name}</TableCell>
                <TableCell></TableCell>
                <TableCell>{ingredient.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }

    

    return null
  }

  return (
    <div className="flex items-center justify-center flex-col  w-full min-h-screen bg-[#121212]">
      <div className="text-white flex flex-col items-center pt-[12vh]">
        <Avatar className="mb-4 size-[15vh]">
          <AvatarImage src={user?.photoURL || ''} alt="user image" />
          <AvatarFallback>
            {user?.displayName ? user.displayName[0] : "U"}
          </AvatarFallback>
        </Avatar>
        <p className="text-4xl">{user?.displayName || "Anonymous User"}</p>
      </div>

      <div className="md:flex mt-12">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
          <li className="w-full flex justify-center">
            <a
              href="#"
              className={`justify-center inline-flex items-center px-3 py-3 text-black rounded-lg w-full 0 ${selectedTab === "Ingredients" ? "text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "bg-gray-50 hover:bg-gray-100 "}`}
              onClick={() => handleTabClick("Ingredients")}
            >
              Ingredients
            </a>
          </li>
        </ul>
        <div className="p-6 bg-gray-50 text-medium text-gray-500  rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900  mb-2">
            {selectedTab === "Ingredients" ? "Ingredients Inventory" : "Saved Recipes"}
          </h3>
          <div className="overflow-x-auto">
            <TableContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
