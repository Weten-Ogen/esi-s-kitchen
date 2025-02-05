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
        <div className='flex items-center flex-col p-2'>
                <div className=' object-contain overflow-hidden shadow-2xl rounded-xl '>
                <Image  
                    className=' w-full h-auto object-cover'
                    src={props.imageUrl}
                    alt={props.label}
                    width={100}
                    height={60}
                />
        </div> 
           
            <p className='text-extraSmall text-wrap text-center font-bold capitalize text-secondaryColor '> 
                {props.label}
            </p>
            
        </div>
    </div>
  )
}

export default FoodCard