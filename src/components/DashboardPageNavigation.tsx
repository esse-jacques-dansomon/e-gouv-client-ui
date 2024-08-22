'use client'

import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
export interface NavigationItem {
  id: number,
  title: string,
  href: string
}
const DashboardPageNavigation = ({items, className} : {
  items: NavigationItem[],
  className?: string
}) => {
  const router = useRouter()
  const path = usePathname()

  const handleChange = (item: string) => {
    router.push(item)
  }
  

  return (
    <div className={`${className}`}>
          <form className="md:hidden">
            <select 
              onChange={(e) => handleChange(e.target.value)}
              className="bg-gray-50 h-14 text-primary border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full  px-2">
              { items.map((item) =>  {
                  return  <option value={item.href} key={item.id}>{item.title}</option>
                })
              }
            </select>
          </form>
          <div className="hidden md:flex flex-row justify-between gap-4">
              <div className='w-[250px] bg-white '>
                  <div className="flex justify-start flex-col itens-start  gap-y-2">
                      { items.map((item) => {
                      return  <button 

                      key={item.id}
                      onClick={() => handleChange(item.href)}
                       className={`text-start flex flex-row justify-between items-center px-4 py-2 ${path === item.href ? 'bg-sendGreen text-white' : 'text-primary '}`}>
                         {item.title}
                         {/* icon */}
                         <Image  width="15" height="30" src="https://img.icons8.com/ios/ffffff/100/forward.png" alt="visible--v1"/>
                       </button>
                  
                      })
                    }   
                  </div>
              </div>
        </div>
    </div>
  )
}

export default DashboardPageNavigation
