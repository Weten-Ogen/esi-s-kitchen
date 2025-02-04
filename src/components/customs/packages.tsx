"use client"
import { serviceContent } from '@/content/service'
import { cn } from '@/lib/utils'
import React from 'react'
import PackageCard from './packagecard'

interface packprops {
    className?:string
}

const Packages = (props: packprops) => {
  return (
    <div className={cn('flex flex-col font-poppins',props.className)}>
        
            {serviceContent.buffetcards.map((item) => {
                return (
                    <PackageCard
                        key={item.imageurl + item.label}
                        {...item}
                    />
                )
            })}


    </div>
  )
}

export default Packages