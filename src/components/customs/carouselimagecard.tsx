'use client'
import Image from 'next/image'
import React from 'react'

interface carouselprops {
    src: string,
    label: string,
    className?:string,
}

const CarouselImageCard = (props: carouselprops) => {
  return (
    <div className='max-w-full w-full h-auto'>
        <Image
            src={props.src}
            alt={props.label}
            width={1100}
            height={1000}
            className="object-contain h-auto w-full"
        />
    </div>
  )
}

export default CarouselImageCard