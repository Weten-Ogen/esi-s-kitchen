"use client"
import { generalContent } from '@/content'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import SearchBtn from './searchbtn'


interface navprops {
  className?:string
}

const NavBar = (props : navprops) => {
  return (
    <section className={cn('max-w-full w-full flex items-center justify-between p-2 bg-secondaryColor text-white',props.className)}>
      <div className='flex items-center gap-2'>
      <Image
        src={generalContent.Logo}
        alt={generalContent.LogoName}
        width={40}
        height={40}
        className=''
      />
      <h4 className='text-extraSmall '>
        {generalContent.LogoName}
    </h4>
      </div>
      <div className=''>
          <SearchBtn/>
      </div>
      <div className=''>
        <p className='text-extraSmall '>log in</p>
      </div>
    </section>
  )
}

export default NavBar