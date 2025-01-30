'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

interface packageprops {
    className?: string,
    label: string,
    imageurl:string,
    perHead:string,
    foodList: string[]
}

const PackageCard = (props: packageprops) => {
  return (
    <div className={cn('w-full grid grid-cols-3 max-w-full items-start md:justify-between gap-4 md:p-8 md:max-w-2xl container shadow-lg  ease-out  cursor-pointer hover:-translate-y-0.5  rounded-lg',props.className)}>
        <div className='md:max-w-full md:h-auto overflow-hidden '>
            <Image
                className='object-cover w-full h-auto'
                src={props.imageurl}
                alt={props.label}
                width={180}
                height={40}
            />
        </div>
        <div className='flex flex-col  gap-4'>
            <h2 className='text-primaryFont font-semibold capitalize'>
                {props.label}
            </h2>
            <div className='font-thin text-extraSmall flex flex-wrap flex-col'>
                {props.foodList.map((item,index) => {
                    return (
                        <div
                            key={item + index} 
                            className=''
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='flex items-end flex-col justify-between gap-4 w-full h-full'>
            <p className='text-extraSmall  font-semibold '>
                {
                    props.perHead
                }
            </p>
            <div>

                <Button className='text-extraSmall px-8 py-2  font-mono text-white bg-secondaryColor tracking-wide '>
                    book now

                </Button>
            </div>
        </div>
    </div>
  )
}

export default PackageCard