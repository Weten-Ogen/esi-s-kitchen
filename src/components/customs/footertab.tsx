'use client'
import React from 'react'
import FooterLink from './footerlink'

interface tabprops {
    title : string,
    links : any[]
}

const FooterTab = (props: tabprops) => {
  return (
    <div className=''>
        <div className='flex flex-col gap-4 items-center'>
            <h2 className='text-primaryFont capitalize font-medium'>
                {props.title}
            </h2>
            <div className='flex flex-col items-center gap-2'>
                {props.links.map((item) => {
                    return (
                        <FooterLink
                            key={item.label}
                            className='capitalize text-extraSmall font-thin'
                            {...item}
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default FooterTab