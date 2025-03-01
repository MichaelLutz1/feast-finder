import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChefHat} from "lucide-react"
import React from "react";
const Navbar: React.FC = () => {
    return(
        <header className=" px-4 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className=" flex justify-between items-center h-16 ">
          <div className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FeastFinder</span>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex items-center gap-6 px-4">
                <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
                </Link>
                <Link href="/InAndOutPage" className="text-sm font-medium hover:text-primary">
                In And Out
                </Link>
                <Link href="/ProfilePage" className="text-sm font-medium hover:text-primary">
                Profile
                </Link>
            </nav>
            <Button variant="outline" size="sm">
              Log in
            </Button>
          </div>   
        </div>
      </header>
    );
};
export default Navbar;
