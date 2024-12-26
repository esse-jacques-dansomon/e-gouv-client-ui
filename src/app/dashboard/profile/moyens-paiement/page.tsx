import Card from '@/components/Card'
import React from 'react'

const Paiement = () => {
  return (
    <Card style='text-start'>
      <h2 className='text-start font-bold text-xl mb-1'>Moyens de paiement</h2>
      <p>Retrouver tous les moyens de paiement liés à votre compte.</p>
      <div className='flex flex-col'>
      {/*  Ajoutez vos boutons de paiement ici : titre, icône, texte, lien, etc. */}
      {/*    design*/}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                  </svg>
                </div>
                <p className="ml-2 text-sm font-medium text-gray-900">Carte de crédit</p>
              </div>
              <p className="text-sm text-gray-500">Carte de crédit</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                  </svg>
                </div>
                <p className="ml-2 text-sm font-medium text-gray
                -900">Carte de débit</p>
              </div>
              <p className="text-sm text-gray-500">Carte de débit</p>
            </div>
          </div>
      </div>
    </Card>
  )
}

export default Paiement
