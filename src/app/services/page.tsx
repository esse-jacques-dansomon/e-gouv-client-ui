import React from 'react'
import LinkItem from '@/components/LinkItem'
import { allServices } from '@/constantes/data'
import Breadcrumb from '@/components/Breadcrumb'

const Services = ({
  
}) => {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumb title={'Services en lignes'}  links={[{ title: 'Services', href: '/services' }]} />
      {/* Services cards */}
      <div className='bg-white flex flex-col items-start gap-3 p-10 border-white shadow '>
        {allServices.map((service) => (
          <LinkItem key={service.id} title={service.title} href={service.href} />
        ))}
      </div>
    </>
  )
}

export default Services