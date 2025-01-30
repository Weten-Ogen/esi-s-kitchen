'use client'
import { serviceContent } from '@/content/service'
import React from 'react'
import ServiceCard from './servicecard'
import { cn } from '@/lib/utils'

interface serviceprops {
    className?:string
}

const Services = (props: serviceprops) => {
  return (
    <div className={cn('',props.className)}>
        <div className='flex flex-col gap-4 p-4'>
            {serviceContent.services.map((item,index) => {
                return (
                    <ServiceCard
                        key={item.label + index}
                        {...item}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Services