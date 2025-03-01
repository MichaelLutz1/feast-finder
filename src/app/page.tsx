"use client";
import { Button } from "@/components/ui/button"
import {useRouter} from "next/navigation"
export default function LandingPage() {
  const navigate = useRouter()

  const handleButtonClick = () => {
    navigate.push("/InAndOutPage")
  }
  return (
    <div className="bg-[#121212] flex min-h-screen flex-col px-4">
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
                  <p className="max-w-[600px] text-white md:text-xl">
                    FeastFinder AI transforms your available ingredients into creative recipes and suggests local
                    restaurants when you&apos;d rather eat out.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  
                  <Button variant={"outline"} className="text-white" onClick={handleButtonClick}>
                    Let's Feast!
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

