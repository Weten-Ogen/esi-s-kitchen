import PdfViewer from '@/components/customs/pdfviewer'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='font-poppins text-secondaryFont p-4 space-y-4 ' >
       <PdfViewer 
          file="/esi's bifold brochure pdf.pdf"
       />
    </div>
  )
}
