'use client'
import { cn, formSchema } from '@/lib/utils'
import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import {z} from 'zod'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const FormSchema = formSchema

interface customprops {
    className?: string,
    control: Control< z.infer < typeof FormSchema >>,
    name: FieldPath< z.infer < typeof FormSchema >>,
    label:string,
    placeholder:string,
 }

const CustomInputField = (props: customprops) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="">
          <FormLabel className="font-bold font-poppins text-primaryFont">
            {props.label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
                <Input 
                  {...field}
                  placeholder={props.placeholder}
                  className="py-6 px-4 bg-white"
                  type={props.name === 'dateOfEvent' ? 'date': 'text'
                  }
                  />
            </FormControl>
          </div>
            <FormMessage className="form-message font-poppins text-red-500 mt-2 text-extraSmall" />
          </FormItem>)}/>)}

export default CustomInputField