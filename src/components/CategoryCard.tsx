"use client"
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
}
const CategoryCard = ({ category }: { category: Category }) => {
  return (
   <Link href={`services/${category.name.replaceAll(" ", "-")}`} className="min-h-[210px] bg-white  border-gray border-2 shadow text-center flex flex-col items-center justify-center">
   <div className="mb-4">
     <Image src={category.icon} alt={category.name}
          className="mx-auto" width="50" height="50" />
   </div>
   <div className="px-2">
   <h2 className="text-[15px] text-black font-semibold">{category.name}</h2>
   <p className="mt-2 text-gray-600 text-sm">{category.description}</p>
   </div>

 </Link>
  )
}

export default CategoryCard
