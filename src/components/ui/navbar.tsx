"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChefHat } from "lucide-react"
import React, {useState} from "react";
import { useAuth } from "@/context/AuthContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navbar: React.FC = () => {
  const { user, loginWithGoogle, logout } = useAuth()
  const [showAlert, setShowAlert] = useState(false)
  
  const handleRestrictedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if(!user){
        e.preventDefault()
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 2000)
   }
    
  }
  return (
    <header className="px-4 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className=" flex h-16 items-center">
        <div className="flex items-center gap-2">
          <ChefHat className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">FeastFinder</span>
        </div>

        <div className="ml-auto flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/InAndOutPage" className="text-sm font-medium hover:text-primary " onClick={handleRestrictedClick}>
                In And Out
            </Link>
            
            <Link href="/ProfilePage" className="text-sm font-medium hover:text-primary" onClick={handleRestrictedClick}>
                Profile
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Button onClick={() => logout()} size="sm">Sign out</Button>
                <Avatar>
                  <AvatarImage src={user.photoURL || ''} alt="user image" />
                  <AvatarFallback>{user.displayName ? user.displayName[0] : ''}</AvatarFallback>
                </Avatar>
              </>
            ) : (
              <Button onClick={() => loginWithGoogle()} variant="outline" size="sm">
                Log in
              </Button>
            )}
          </div>
          
        </div>
      </div>
      {showAlert && (
        <DropdownMenu open={true}>
          <DropdownMenuTrigger >
            <div className="hidden"></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-[84vw] bg-red-500 text-white p-2 rounded-md animate-slide-down">
            Please log in to access this page!
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
    
  );
};

export default Navbar;
