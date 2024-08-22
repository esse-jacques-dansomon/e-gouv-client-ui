import Breadcrumb from '@/components/Breadcrumb'
import Card from '@/components/Card'
import ServicePhoneItem from '@/components/ServicePhoneItem'
import React from 'react'

const ServicesAdministratifs = () => {
    return (
        <div className='app-container'>
            {/* Breadcrumb */}
            <Breadcrumb title={'Annuaire des services administratifs'} links={[
                {title: 'Annuaire des services administratifs', href: '/phone-book'}]}/>

             {/* miniters */}
             <Card style='flex flex-col gap-5  md:flex-row max-w-screen-lg'>
                 <div className="md:w-1/2 md:border-r-2 md:border-gray-300 flex flex-col gap-4">
                    <ServicePhoneItem />
                    <ServicePhoneItem />

                 </div>
                 <div className="md:w-1/2">
                    <ServicePhoneItem />
                 </div>
             </Card>

        </div>
    )
}
export default ServicesAdministratifs
