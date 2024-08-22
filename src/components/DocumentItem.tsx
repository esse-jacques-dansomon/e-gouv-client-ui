import React from 'react'
import TextBtn from './TextBtn'

export interface DocumentItemProps {
   title: string
   type: string
   service: string
   date: string
}
const DocumentItem = (
    {
        title,
        type,
        service,
        date
    }: DocumentItemProps
) => {
  return (
    <>
        <div className="flex w-full felx-col md:flex-row justify-between items-center border-y-2  border-gray-300 py-4">
                {/* details */}
                <div className='flex flex-col flex-1 '>
                  <p className='text-start text-gray-500 text-xl'>{title}</p>
                  <p className='text-start text-gray-500 text-sm'>Type de document : {type}</p>
                  <p className='text-start text-gray-500 text-sm'>Service : {service}</p>
                  <p className='text-start text-gray-500 text-sm'>Date de création : {date}</p>
                </div>
                {/* actions */}
                <div className='flex flex-col'>
                  <TextBtn label={'Télécharger'} type={'submit'} className='mt-5  px-4  text-white bg-primary hover:bg-primary-light' />
                </div>
          
                {/* download */}
              </div>
    </>
  )
}

export default DocumentItem
