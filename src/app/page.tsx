"use client";
import { Button } from "@/components/ui/button"
import {useRouter} from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function LandingPage() {
  const navigate = useRouter()
  const { user, loginWithGoogle} = useAuth()

  const handleButtonClick = () => {
    if(!user){
      loginWithGoogle();
    }
    else{
      navigate.push("/InAndOutPage")
    }
    
  }

  const imagePaths = [
    "/Images/image1.png",
    "/Images/image2.png"
  ];

  return (
    <div className="bg-[#121212] flex min-h-screen flex-col px-4">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8">
                    Find Your Feast
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                  Turn your ingredients into delicious meals using FeastFinder. Transform your available ingredients into creative recipes. 
                  </p>
                  <p className="mt-5 max-w-[600px] text-white md:text-xl">No time to cook? We can also help you dine out and find out where you want to eat.</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  
                  <Button variant={"outline"} className="text-white" onClick={handleButtonClick}>
                    Let&apos;s Feast!
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Carousel className="w-full max-w[600px] ml-[12vw] text-white">
                  <CarouselContent>
                    {imagePaths.map((imagePath, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <img
                                src={imagePath}
                                className="object-cover w-full "
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  )
}

