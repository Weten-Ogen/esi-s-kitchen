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
    <div className={cn('',props.className)}>
        <div

            className='flex flex-col gap-4 p-4'
        >
            {serviceContent.buffetcards.map((item) => {
                return (
                    <PackageCard
                        key={item.imageurl + item.label}
                        {...item}
                    />
                )
            })}

        </div>
    </div>
  )
}

export default Packages