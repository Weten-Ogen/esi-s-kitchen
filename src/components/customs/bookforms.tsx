'use client'
import { cn, formSchema } from '@/lib/utils'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import CustomInputField from './customauthfield'
import CustomSelectField from './CustomInputField'
import { serviceContent } from '@/content/service'
import { Form } from '../ui/form'


interface booprops {
    className?:string,
}


 const FormScheme = formSchema

const BookForms = (props: booprops) => {
  
    const FormSchema = useForm<z.infer<typeof FormScheme>>({
        resolver:zodResolver(FormScheme),
    })

    return (
    <div className={cn('md:p-12 font-poppins',props.className)}>
        <Form    
        {...FormSchema}
        >
            <form 
                className='flex flex-col items-center bg-secondaryColor '
            >
                <CustomInputField
                    control={FormSchema.control}
                    label='Name'
                    name='name'
                    placeholder='Enter your name'
                    className=''
                    />
                    <div className=''>
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
                            className=''
                        />
                        <CustomSelectField
                            control={FormSchema.control}
                            label="location"
                            name="location"
                            placeholder='pick a location'
                            values={serviceContent.location }
                            className=""
                        />
                    </div>
                    <div className="">
                    
                    <CustomInputField
                    control={FormSchema.control}
                    label='number of expected Guest'
                    name='name'
                    placeholder='minimum should be 200'
                    className=''
                    />
                    <CustomSelectField
                        control={FormSchema.control}
                        label="packages"
                        name="packages"
                        placeholder='choose a package'
                        values={serviceContent.packagesSelect}
                        />
                     <CustomSelectField
                        control={FormSchema.control}
                        label="services"
                        name="services"
                        placeholder='choose a service'
                        values={serviceContent.serviceSelect}
                        />
                        <CustomSelectField
                        control={FormSchema.control}
                        label="type of event"
                        name="typeOfEvent"
                        placeholder='choose an event type'
                        values={serviceContent.eventtype }
                        />                     
                        </div>
                    
        </form>
        </Form>
    </div>
  )
}

export default BookForms

