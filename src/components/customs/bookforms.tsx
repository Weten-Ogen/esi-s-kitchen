'use client'
import { cn, formSchema } from '@/lib/utils'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import CustomSelectField from './CustomInputField'
import { serviceContent } from '@/content/service'
import { Form } from '../ui/form'
import CustomInputField from './customauthfield'


interface booprops {
    className?:string,
}


 const FormScheme = formSchema

const BookForms = (props: booprops) => {
  
    const FormSchema = useForm<z.infer<typeof FormScheme>>({
        resolver:zodResolver(FormScheme),
        defaultValues: {
            contact:"",
            dateOfEvent:"",
            nameOfClient:"",
            numberPerHead:"",
        

        }
    })

    return (
    <div className={cn('font-poppins w-full',props.className)}>
        <Form    
        {...FormSchema}
        >
            <form 
                className='flex flex-col w-full items-center bg-secondaryColor p-4 md:p-16 gap-4  rounded-lg'
            >
                <h2 className='text-primaryFont font-bold text-white'>
                    Tell  us more about your Event
                </h2>
                <div className='w-full lg:flex items-center gap-4 '>

                <CustomInputField
                    control={FormSchema.control}
                    label='Name'
                    name='nameOfClient'
                    placeholder='Enter your name'
                    className='w-full'
                    />
                        
                        <CustomInputField
                            control={FormSchema.control}
                            label='Population'
                            name='numberPerHead'
                            placeholder='minimum should be 200'
                            className='w-full'
                        />
                </div>
                    <div className='w-full lg:flex gap-4'>
                        <CustomInputField
                            control={FormSchema.control}
                            label='Contact'
                            name='contact'
                            placeholder='Enter your phone number.'
                            className='w-full'
                        />
                        <CustomInputField
                            control={FormSchema.control}
                            label='Date of Event'
                            name='dateOfEvent'
                            placeholder='pick a date'
                            className='w-full'
                        />
                        <CustomSelectField
                            control={FormSchema.control}
                            label="location"
                            name="location"
                            placeholder='pick a location'
                            values={serviceContent.location }
                            className="w-full"
                        />
                    </div>
                    <div className="w-full lg:flex  gap-4">
                    <CustomSelectField
                        control={FormSchema.control}
                        label="packages"
                        name="packages"
                        placeholder='choose a package'
                        values={serviceContent.packagesSelect}
                        className="w-full"
                        />
                     <CustomSelectField
                        control={FormSchema.control}
                        label="services"
                        name="services"
                        placeholder='choose a service'
                        values={serviceContent.serviceSelect}
                        className="w-full"
                        />
                        <CustomSelectField
                        control={FormSchema.control}
                        label="type of event"
                        name="typeOfEvent"
                        placeholder='choose an event type'
                        values={serviceContent.eventtype}
                        className='w-full'
                        />                     
                        </div>
                    
        </form>
        </Form>
    </div>
  )
}

export default BookForms

