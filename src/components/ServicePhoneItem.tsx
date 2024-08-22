import React from 'react'

const ServicePhoneItem = () => {
  return (
    <div className='flex flex-col items-start justify-between gap-4'>
      <h2 className='text-xl font-bold text-start'>Compagnie Energie Electrique du Togo (CEET)
      </h2>
      {/* address  */}
      <p className='text-start'>426, Av. Mama FousseniBP. : 42 Lomé TOGO</p>
      {/* infos */}
      <div className="text-start">
          infodg@ceet.tg <br/>
         https://www.ceet.tg <br/>
         0022890907006
      </div>
    </div>
  )
}

export default ServicePhoneItem
