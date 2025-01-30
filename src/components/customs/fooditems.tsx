'use client'
import { linksContent } from '@/content/links'
import { serviceContent } from '@/content/service'
import { cn } from '@/lib/utils'
import React from 'react'
import FoodCard from './foodcard'

interface foodprops{
    className?:string
}

const FoodItems = (props: foodprops) => {
  return (
    <div className={cn('md:p-4 max-w-full  w-full overflow-hidden',props.className)}>
        
        <div className='grid max-w-md md:max-w-full grid-cols-3 md:grid-cols-6 md:justify-center items-end justify-start gap-2  '>
            {
                serviceContent.foodlist.map((item) => {
                    return (
                        <FoodCard
                            key={item.imageUrl}
                            {...item}
                            className=''
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default FoodItems