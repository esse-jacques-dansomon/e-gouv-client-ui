import React from 'react'
import { demarchesNavigation } from '@/constantes/data'
import DemarcheCard from '../../../../components/DemarcheCard'

const Demarches = () => {

  return (
<>
  <div className="h-full w-full overflow-y-auto">
      <div className="flex gap-4 h-full w-full justify-start items-start">
        <button className='bg-primary text-white rounded-full px-4 py-2'>Voir tout</button>
        <button className='bg-white rounded-full px-4 py-2'>En cours</button>
        <button className='bg-white rounded-full px-4 py-2'>Terminé</button>
        <button className='bg-white rounded-full px-4 py-2'>Archivé</button>
      </div>
      {/* demarches list */}
      <div className="w-full pt-4 flex flex-col gap-4">
        <DemarcheCard key={1} />
        <DemarcheCard key={2} />
        <DemarcheCard key={3} />
        <DemarcheCard key={4} />
    </div>
</div>
</>
  )
}

export default Demarches
