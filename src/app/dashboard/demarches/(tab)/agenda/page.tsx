import Card from '@/components/Card'
import React from 'react'

const Agenda = () => {
  return (
    <>
    <section className="h-full w-full overflow-y-auto">
      <div className="flex gap-4 h-full w-full justify-start items-start">
        <button className='bg-primary text-white rounded-full px-4 py-2'>Voir tout</button>
        <button className='bg-white rounded-full px-4 py-2'>À venir</button>
        <button className='bg-white rounded-full px-4 py-2'>Passé</button>
        <button className='bg-white rounded-full px-4 py-2'>Raté</button>
      </div>
      {/* agenda list */}
      <div className="w-full pt-4 flex flex-col gap-4">
        {/* agenda item */}
        <Card style="flex flex-col w-full">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <p className="text-start font-bold text-[16px]">Titre de lévénement</p>
              <p className="text-start text-gray-500 text-[12px]">Date de l événement</p>
            </div>
            <div className="flex flex-col">
              <p className="text-start font-bold text-[16px]">Nom service de l événement</p>
              <p className="text-start text-gray-500 text-[12px]">Adresse de l événement</p>
            </div>
          
          </div>
          <hr className="border-gray-200 my-2" />

          <button className="text-start font-bold text-[16px] text-primary">Voir l événement</button>
        </Card>
      </div>
    </section>
    </>
  )
}

export default Agenda