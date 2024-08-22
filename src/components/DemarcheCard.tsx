import Card from '@/components/Card'
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React from 'react'

const DemarcheCard = (

) => {

  return (
       <Card style='w-full '>
         <div className="flex flex-col gap-2 w-full">
                {/* demarcher header */}
                <div className="flex justify-between flex-col md:flex-row">
                  
                  <div className="flex flex-col text-start">
                    <h2 className='text-xl'>Deamnde de passeport</h2>
                    <p className='text-primary'>No 123456789</p>
                  </div>

                  <div className="flex  text-start gap-1 md:flex-col">
                    <p>Initée le</p>
                    <p>Mercredi 15 avril</p>
                    <p>2023</p>
                  </div>

                </div>
                {/* name of dealer */}
                <div className="border-y-2 border-gray-200 text-start py-3">
                  <span>Nom du demandeur</span> <span className='font-bold'>Adanhoudou</span>
                </div>
                {/* status/details/cancel buttons */}
                <div className="">
                  <div className="bg-yellow-200 py-2 text-clip">En cours</div>
                  <div className="justify-between flex flex-row gap-2 mt-3">
                    <Link href={`/dashboard/demarches/details/${1}`} className="text-center text-white py-1 px-4 bg-primary">Détails</Link>
                    <button className="text-start text-white py-1 px-4 bg-sendGreen">Annuler</button>
                  </div>
                </div>
            </div>  
      </Card>
  )
}

export default DemarcheCard