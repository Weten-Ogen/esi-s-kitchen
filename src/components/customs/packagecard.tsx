'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface packageprops {
    className?: string,
    label: string,
    imageurl:string,
    perHead:string,
    foodList: string[]
}

const PackageCard = (props: packageprops) => {
  
      const router = useRouter()
      const handleRouter = () => {
          router.push('/booking')
      }
  return (
    <div className={cn('w-full grid grid-cols-1 lg:`grid-cols-2 max-w-full items-start md:justify-between gap-4 p-4 md:max-w-2xl container shadow-2xl  ease-out  bg-white cursor-pointer hover:-translate-y-0.5  rounded-lg',props.className)}>
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
            <div className='flex  items-center justify-between  w-full'>
                    <h2 className='text-primaryFont font-semibold capitalize p-2'>
                        {props.label}
                    </h2>
                    <p className='text-extraSmall flex gap-1  font-semibold '>
                        <span>
                            {
                                props.perHead
                            }
                             
                        </span>
                        <span className='uppercase'>
                            ghc
                        </span >
                        <span className="text-secondaryColor ">
                             per head
                        </span>
                    </p>
                        
            </div>
            <div className='flex flex-col'>
            <ul className='font-thin text-extraSmall grid  grid-cols-1  md:grid-cols-2 gap-2 capitalize  p-4'>
                {props.foodList.map((item,index) => {
                    return (
                        <li
                        key={item + index} 
                        className=' list-disc  bg-blend-luminosity '
                        >
                           <span className=''>
                            {item}
                            </span> 
                            
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className=' flex items-end flex-col justify-between gap-4 w-full h-full flex-wrap'>
            <div>
                <Button
                    onClick={handleRouter} 
                    className='text-extraSmall px-8 py-2  font-mono text-white bg-secondaryColor w-full tracking-wide '
                >
                    book now
                </Button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PackageCard