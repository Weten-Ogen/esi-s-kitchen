'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface footlinkprops {
    className?:string,
    reff:string,
    label: string
    
}
const FooterLink = (props: footlinkprops) => {
  return (
    <Link href={props.reff} className={cn('',props.className)}>
        {props.label}
    </Link>
  )
}

export default FooterLink