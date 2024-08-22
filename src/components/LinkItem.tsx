'use client'
import React from 'react'
import Image from 'next/image'

export interface LinkItemProps {
  title: string;
  href: string;
}

const LinkItem = ( {title, href}: LinkItemProps) => {
  return (
    <>
      <a href={href} key={title}  className={"hover:underline flex flex-row items-center justify-start space-x-0 hover:text" }>
         <Image width="16" height={1} className="mr-1" alt={title} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO3asQ3CQBAF0WliLdN/JyRImAgCygEhXUSO9HeZ18HXOPDpDiT9yhm4ARvNXYEX8Og+poD7GvMETjRWjglVlglVlglVlgllmVSWSWWZVJZJNarMto7LnzEHjY0YUl+f1k5DjkhhiRSWSGGJFJZIYYkUlkhR/oqHqAklWMfSEdfTlykPBqR/8Abo/nQfGMTYTAAAAABJRU5ErkJggg==" />
         <p className='text-wrap text-start'>{title}</p>
      </a>
    </>
  )
}

export default LinkItem