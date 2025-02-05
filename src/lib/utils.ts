import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const formSchema = z.object({
    name: z.string(),
    services: z.string(),
    packages: z.string(),
    numberPerHead: z.string(),
    typeOfEvent: z.string(),
    location: z.string(),
    contact: z.string(),
    dateOfEvent:z.string(),
})