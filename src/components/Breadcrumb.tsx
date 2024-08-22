"use client"   
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import ShareButtons from './ShareButtons'


export interface BreadcrumbProps {
   title: string,
   links: Array<{
      title: string,
      href: string
   }>
}

const Breadcrumb = ( {title, links}: BreadcrumbProps) => {
  return (
   <div>
      {/* Breadcrumbs */}
      <div className='flex items-center justify-between py-4 border-gray-200 '>
         <div className='flex items-center gap-2'>
            <Link href='/' className='underline  hover:text-blue-900'> Accueil</Link>
         {
            links.map((link) => (
               <Link key={link.title} href={link.href} className='flex items-center gap-2'>
                  <Image width="14" height="30" src="https://img.icons8.com/ios-glyphs/30/more-than.png" alt="more-than"/>    
                  <p className='underline hover:text-blue-900'>{link.title}</p>
               </Link>
            ))
         }
         </div>
      </div>


      {/* title et share  */}
      <div className='flex flex-col items-start gap-3 pb-4 border-gray-200  md:flex-row md:items-center md:justify-between '>
        <h2 className='text-2xl font-bold'>{title}</h2>
         <ShareButtons />
      </div>
   </div>

  )
}

export default Breadcrumb