
import DashboardPageNavigation from '@/components/DashboardPageNavigation'
import { profileNavigation } from '@/constantes/data'
import React from 'react'

const ProfileLayout = (
   {
         children,
    }: { 
         children: React.ReactNode,
      }
) => {
  return (
    <>
      <div className="app-container flex flex-col md:flex-row gap-2 relative">
        {/* Make the navigation fixed */}
        <DashboardPageNavigation 
            className="mb-3 top-10 left-0  md:top-auto md:left-auto md:fixed md:w-64" 
            key={'profile'} 
            items={profileNavigation} 
          />
        <div className="h-full w-full relative ml-3 md:ml-[16rem]"> {/* Add margin to accommodate the fixed nav */}
          {children}
        </div>
      </div>
    </>
  )
}

export default ProfileLayout
