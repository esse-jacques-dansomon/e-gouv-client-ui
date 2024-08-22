import Card from '@/components/Card'
import DocumentItem from '@/components/DocumentItem'
import FileFormFiled from '@/components/FileFormFiled'
import SelectFormItem from '@/components/SelectFormItem'
import TextBtn from '@/components/TextBtn'
import { demarchesDocuments } from '@/constantes/data'
import React from 'react'

const DemarchesDocuments = () => {
  return (
    <>
      <Card style='text-start'>
        <h2 className='text-start font-bold text-xl mb-1 border-b-2 pb-4'>Mes documents</h2>  
         {/* submit a file  */}
         <form action="">
          <h2 className='py-3 font-bold text-xl'>Ajouter un document</h2>
          <div className="flex flex-row w-full gap-1 justify-end items-end">
              <SelectFormItem 
              showLabel={false}
              label={'Type de document'}
              options={['Photo', 'Document']} 

                />
              <FileFormFiled 
            
            />
          </div>
          {/* submit */}
          <TextBtn label={'Enregistrer'} type={'submit'} className='mt-5 py-2 px-4  text-white bg-primary hover:bg-primary-light' />
         </form>

         <form action="" className='mt-5'>
            <h2 className='py-3 font-bold text-xl'>List des documents</h2>
            {/* filtres */}
          <div className="flex flex-col  w-full gap-1  items-start">
          <p className='text-start text-gray-500 text-xl'>Filtrer par type de document</p>
            <div className="flex flex-col md:flex-row w-full gap-1 justify-end items-end">
              {/* type of document */}
              <SelectFormItem 
              showLabel={false}
              label={'Type de document'}
              options={['Photo', 'Document']} 

                />
                {/* service */}
                <SelectFormItem 
                showLabel={false}
                label={'Service'}
                options={['Service 1', 'Service 2']} 

                  />
            </div>
            <div className="flex flex-col md:flex-row w-full gap-1 justify-end items-end">
              {/* type of document */}
              <SelectFormItem 
              showLabel={false}
              label={'Type de document'}
              options={['Photo', 'Document']} 

                />
                {/* service */}
                <SelectFormItem 
                showLabel={false}
                label={'Service'}
                options={['Service 1', 'Service 2']} 

                  />
            </div>
          </div>
          {/* Liste des documents */}
          <div className='mt-5'>
            <div className="flex flex-col md:flex-row w-full gap-1 justify-end items-end">
              {/* document */}
              <div className="flex flex-col w-full">
                { demarchesDocuments.map((document, index) => {
                    return (
                      <DocumentItem 
                      key={index}
                      title={document.title}
                      type={document.type}
                      service={document.service}
                      date={document.date}

                        />
                    )
                  })
                }
              </div>
            </div>
          </div>

         </form>
    </Card>
   </>
  )
}

export default DemarchesDocuments