'use client'
import { cn, formSchema } from '@/lib/utils'
import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import {z} from 'zod'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'


 const FormSchema = formSchema 

interface customprops {
    className?: string,
    control: Control< z.infer < typeof FormSchema >>,
    name: FieldPath< z.infer < typeof FormSchema >>,
    label:string,
    placeholder:string,
    values: any[]
 }

const CustomSelectField = (props: customprops) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="w-full ">
          <FormLabel
               className="font-bold font-poppins text-primaryFont capitalize  tracking-wider"
              >
            {props.label}
          </FormLabel>
          <div className="flex w-full flex-col bg-white p-2 rounded-lg">
            <FormControl>
            <Select  
              {...field}
            >
                <SelectTrigger>
                    <SelectValue 
                    placeholder={props.placeholder} 
                    />
                </SelectTrigger>
                <SelectContent 
                className='w-full bg-white p-2'>
                    {
                        props.values.map((item) => {
                            return (
                                <SelectItem
                                className='bg-white w-full '
                                {...field}
                                key={item.label} 
                                value={item.label}
                                >
                                    {item.label}
                                </SelectItem>
                            )
                        })
                    }
                </SelectContent>
             </Select>
            </FormControl>
          </div>
            <FormMessage className="form-message font-poppins text-red-500 mt-2 text-extraSmall" />
          </FormItem>)}/>)}

export default CustomSelectField