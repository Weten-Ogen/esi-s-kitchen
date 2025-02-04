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
    <div className={cn('w-full grid grid-cols-1 lg:`grid-cols-2 max-w-full items-start md:justify-between gap-4 p-4 md:max-w-2xl container shadow-lg  ease-out  cursor-pointer hover:-translate-y-0.5  rounded-lg',props.className)}>
        <div className='md:max-w-full  lg:h-[40vh] overflow-hidden '>
            <Image
                className='object-cover w-full border h-auto'
                src={props.imageurl}
                alt={props.label}
                width={500}
                height={400}
            />
        </div>
        <div className='flex flex-col  gap-4 w-full'>
            <div className='flex  justify-between  w-full'>
                    <h2 className='text-primaryFont font-semibold capitalize'>
                        {props.label}
                    </h2>
                    <p className='text-extraSmall  font-semibold '>
                        {
                            props.perHead
                        }
                    </p>
                        
            </div>
            <div className='flex flex-col'>
            <div className='font-thin text-extraSmall grid  grid-cols-1 md:grid-cols-2 gap-2 capitalize border'>
                {props.foodList.map((item,index) => {
                    return (
                        <div
                        key={item + index} 
                        className='border'
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
        <div className=' flex items-end flex-col justify-between gap-4 w-full h-full flex-wrap'>
            <div>
                <Button className='text-extraSmall px-8 py-2  font-mono text-white bg-secondaryColor w-full tracking-wide '>
                    book now
                </Button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PackageCard