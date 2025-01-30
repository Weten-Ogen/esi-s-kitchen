"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

interface linkprops {
  className?:string,
  label: string
}

const LinkBtn = (props: linkprops) => {
  return (
    <div className={cn('',props.className)}>
      <Button 
          variant={'link'}
          className='text-extraSmall capitalize'
      >
        {props.label}
      </Button>
    </div>
  )
}

export default LinkBtn