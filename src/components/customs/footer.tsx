'use client'
import { linksContent } from '@/content/links'
import { cn } from '@/lib/utils'
import React from 'react'
import FooterLink from './footerlink'
import FooterTab from './footertab'
import { generalContent } from '@/content'
import Link from 'next/link'
import Image from 'next/image'

interface footeprops {
    className?:string
}

const Footer = (props : footeprops) => {
  return (
    <div className={cn('bg-secondaryColor text-white', props.className)}>
      <div className='flex  gap-4 justify-center md:gap-24 p-4 '>
        {linksContent.footerLinks.map((item,index) => {
          return (
           <FooterTab
              key={item.title}
              {...item}
           />
          )
        })}

      </div>
      <div className='flex items-center gap-4 md:gap-8 justify-center p-4 '>
         {generalContent.Socials.map((item) =>{
          return (
                <Link  
                    key={item.label}
                    href={item.link}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                </Link>
          )

         })}
      </div>
    </div>
  )
}

export default Footer