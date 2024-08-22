import React from 'react'
import DashboardPageNavigation from '@/components/DashboardPageNavigation'
import { demarchesNavigation } from '@/constantes/data'

const MesDemarchesLayout = (
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
          key={'demarches'} 
          items={demarchesNavigation} 
        />
       <div className="h-full w-full relative ml-3 md:ml-[16rem]"> {/* Add margin to accommodate the fixed nav */}
         {children}
       </div>
    </div>
    </>
  )
}

export default MesDemarchesLayout
