'use client'
import * as React from "react"
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { carouselviewContent } from "@/content/carouselview"
import CarouselImageCard from "./carouselimagecard"

export function CarouselView() {
  return (
    <Carousel 
        opts={{
            align: 'center',
            loop: true,

        }} 
        plugins={[
            Autoplay({
                delay:5000
            })
        ]   
        }
        className="w-full max-h-[50vh]  overflow-hidden"
      >
      <CarouselContent>
        {carouselviewContent.map((item, index) => (
          <CarouselItem key={index}>
            <div className=" w-full ">
              <Card className="p-0 m-0">
                <CardContent className="flex p-0 justify-center w-full ">
                    <CarouselImageCard
                        {...item}
                    />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
