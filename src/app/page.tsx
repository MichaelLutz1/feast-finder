"use client";
import { Button } from "@/components/ui/button"
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, MapPin, Utensils, ThumbsUp, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"
=======
import { Sparkles } from "lucide-react"
>>>>>>> origin/main

export default function LandingPage() {
  const { user, loginWithGoogle, logout } = useAuth()
  return (
<<<<<<< HEAD
    <div className="flex min-h-screen flex-col px-4">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FeastFinder</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 px-4">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
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

=======
    <div className="bg-black flex min-h-screen flex-col px-4">
>>>>>>> origin/main
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Turn Your Ingredients Into Delicious Meals
                  </h1>
                  <p className="max-w-[600px] text-white text-muted-foreground md:text-xl">
                    FoodFinder AI transforms your available ingredients into creative recipes and suggests local
                    restaurants when you&apos;d rather eat out.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="text-white gap-1">
                    <Sparkles className="h-4 w-4" />
                    Get Started Free
                  </Button>
                  <Button variant="outline" size="lg" className="text-white">
                    See How It Works
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

