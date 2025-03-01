
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, MapPin, Utensils, ThumbsUp, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
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
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-primary text-primary-foreground">AI-Powered</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Turn Your Ingredients Into Delicious Meals
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    FoodFinder AI transforms your available ingredients into creative recipes and suggests local
                    restaurants when you&apos;d rather eat out.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    <Sparkles className="h-4 w-4" />
                    Get Started Free
                  </Button>
                  <Button variant="outline" size="lg">
                    See How It Works
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="AI-generated recipe suggestions"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful AI Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform offers innovative solutions for all your food-related needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <Utensils className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Recipe Generation</CardTitle>
                  <CardDescription>
                    Transform your available ingredients into delicious recipes tailored to your preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-primary" />
                      <span>Personalized to your dietary preferences</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-primary" />
                      <span>Adjustable serving sizes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-primary" />
                      <span>Nutritional information included</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Local Restaurant Finder</CardTitle>
                  <CardDescription>
                    Discover local dining options that match your cravings when you don&apos;t feel like cooking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-primary" />
                      <span>Location-based recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-primary" />
                      <span>Filter by cuisine, price, and ratings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-primary" />
                      <span>Special offers and discounts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

