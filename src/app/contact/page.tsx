import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='app-container text-black'>
      <Breadcrumb title={'Contacts'}  links={[{ title: 'Contacts', href: '/contacts' }]} />
  
       {/* content */}
       <div className="text-start flex flex-col items-start gap-3  ">
        <p>Responsabilité technique et éditoriale</p>
        <p>Directeur de la publication: Cheikh BAKHOUM</p>
        <p>Résponsable du site : El Hadji Mayoro FALL</p>
        <p>Agence de l informatique de l Etat</p>
        <p>Direction des Relations extérieures, du Marketing, de la Formation et de la Communication</p>
        <div className="flex flex-row items-center gap-3  mt-4">
            {/* image */}
            <Image width="50" height="60" src="https://img.icons8.com/ios/000096/100/apple-phone.png" alt="apple-phone"/>
            {/* contact */}
            <div className="flex flex-col items-start  ">
              <p className="text-[16px] font-bold">Contact téléphonique</p>
              <p>+33 4 76 66 00 00</p>
            </div>
        </div>

        <div className="flex flex-row items-center gap-3  mt-4">
            {/* image */}
            <Image width="50" height="60" src="https://img.icons8.com/ios/000096/100/fax.png" alt="apple-phone"/>
            {/* contact */}
            <div className="flex flex-col items-start  ">
              <p className="text-[16px] font-bold">Fax:</p>
              <p>+33 4 76 66 00 00</p>
            </div>
        </div>


        <div className="flex flex-row items-center gap-3  mt-4">
            {/* image */}
            <Image width="50" height="60" src="https://img.icons8.com/ios/000096/100/region-code.png" alt="region-code"/>
            {/* contact */}
            <div className="flex flex-col items-start  ">
              <p className="text-[16px] font-bold">Adresses</p>
              <p>Darkar, Rue de la Liberté, 10500 Dakar</p>
            </div>
        </div>


        <div className="flex flex-row items-center gap-3  mt-4">
            {/* image */}
            <Image width="50" height="60" src="https://img.icons8.com/ios/000096/100/domain--v1.png" alt="domain--v1.png"/>
            {/* contact */}
            <div className="flex flex-col items-start  ">
              <p className="text-[16px] font-bold">Site:</p>
              <p>senegal.gouv.fr</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Contact
