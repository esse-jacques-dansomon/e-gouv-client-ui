import React from 'react'
import DashboardMenu from '../../components/DashboardMenu'

const DashboardLayout = (
   { children }: { children: React.ReactNode }
) => {
  return (
    <>
      <div className="w-full relative">
         <DashboardMenu />
         <div className="pt-20">
         {children}
         </div>
      </div>
      
    </>
  )
}

export default DashboardLayout