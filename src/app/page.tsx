"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image"
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
      <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=\`https://maps.\${c}apis.com/maps/api/js?\`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
              key: "process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY",
              v: "weekly",
            });
          `,
        }}
      />
    </>
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
                <Carousel className="w-[35vw] ml-[9vw] text-white">
                  <CarouselContent>
                    {imagePaths.map((imagePath, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <Image
                                src={imagePath} // Make sure this is a valid URL or path
                                alt={`Image ${index}`} // Required alt attribute for accessibility
                                className="object-cover w-full"
                                width={300} // Optional, but recommended for better performance
                                height={300}
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

