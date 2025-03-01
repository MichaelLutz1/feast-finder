import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChefHat } from "lucide-react"
import React from "react";
import { useAuth } from "@/context/AuthContext"
const Navbar: React.FC = () => {
  const { user, loginWithGoogle, logout } = useAuth()
  return (
    <header className=" px-4 sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <ChefHat className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">FeastFinder</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 px-4">
          <Link href="/InAndOutPage" className="text-sm font-medium hover:text-primary">
            In And Out
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
            Profile
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <Button onClick={() => logout()} size="sm">Sign out</Button>
          ) : (
            <Button onClick={() => loginWithGoogle()} variant="outline" size="sm">
              Log in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
