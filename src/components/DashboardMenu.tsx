'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const DashboardMenu = () => {
   const router = useRouter()
   const path = usePathname()

   const [selectedTab, setSelectedTab] = useState(

      path.includes('profile') ? 2 : 
      path.includes('demarches') ? 1 : 0
   )


   const handleChange = (tab: string, index: number) => {
    setSelectedTab(index)
    router.push(`/dashboard/${tab}`)
   }


  return (
    <div className="z-20 flex bg-white  mt-1  border-t-2  flex-col w-full  overflow-scroll fixed justify-end items-end">
        <div className="flex h-full mt-2 flex-1 flex-row app-container justify-between items-end">
         <div className="mt-2 flex flex-row  justify-center items-end ">
            <button onClick={ () => handleChange('/', 0)} className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
               <span className={`text-sm font-medium ${selectedTab === 0 ? 'text-primary border-b-2 border-primary' : ''}`}>Mon Tableau de bord</span>
            </button>
            <button onClick={ () => handleChange('demarches', 1)} className="flex flex-row items-center  transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
               <span className="inline-flex items-center justify-center  w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
               <span className={`text-sm font-medium ${selectedTab === 1 ? 'text-primary border-b-2 border-primary' : ''}`}>Mes Demarches</span>
            </button>
            <button onClick={ () => handleChange('profile', 2)} className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
               <span className="inline-flex items-center justify-center  w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
               <span className={`text-sm font-medium ${ selectedTab === 2 ? 'text-primary border-b-2 border-primary' : ''}`}>Mon Profil</span>
            </button>
         </div>

         {/* deconnection */}
         <button className="text-sm ">Se déconnecter</button>
         
        </div>
    </div>
  )
}

export default DashboardMenu
