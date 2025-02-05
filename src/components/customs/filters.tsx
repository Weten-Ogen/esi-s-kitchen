"use client"
import { dashboardContent } from '@/content/dashboard'
import { cn } from '@/lib/utils'
import React from 'react'
import LinkBtn from './link'

interface filterprops {
    className?:string
}
const Filters = (props :  filterprops) => {
  return (
    <div className={cn('text-white w-full max-w-full overflow-hidden font-poppins', props.className)}>
        <div className='flex items-center text-white '>
            {dashboardContent.filters.map((item) => {
                return(
                    <LinkBtn
                        key={item.label}
                        className=''
                        label={item.label}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Filters