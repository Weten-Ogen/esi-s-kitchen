'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface foodcardprops {
    className?:string
    label: string
    imageUrl: string
}

const FoodCard = (props:  foodcardprops) => {
  return (
    <div  className={cn('',props.className)}>
        <div className='flex items-center flex-col'>
                <div className='p-2 object-contain '>
                <Image  
                    className='rounded-full  w-full h-auto object-cover'
                    src={props.imageUrl}
                    alt={props.label}
                    width={40}
                    height={40}
                />
        </div> 
           
            <p className='text-extraSmall text-wrap font-thin capitalize'> 
                {props.label}
            </p>
            
        </div>
    </div>
  )
}

export default FoodCard