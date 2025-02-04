"use  client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

interface serviceprops {
    className?:string,
    label:string,
    imageUrl:string,
    description:string,
}

const ServiceCard = (props: serviceprops) => {
  return (
    <div className={cn('container max-w-ful w-full p-4 shadow-lg rounded-lg ',props.className)}> 
        <div className=' w-full  h-[45vh] overflow-hidden'>
            <Image
                className='w-full object-cover h-auto'
                alt={props.label}
                src={props.imageUrl}
                width={500}
                height={200}
            />
        </div>
        <div className='max-w-xl space-y-2 pt-2'>
            <div className='flex items-center justify-between'>
            <h2 className='capitalize text-primaryFont font-semibold'>
                {props.label}
            </h2>
            <Button className='bg-secondaryColor'>
                book now
            </Button>
            </div>
            <p className='text-extraSmall font-medium border` p-2'>
                {props.description}
            </p>
        </div>
    </div>
  )
}

export default ServiceCard