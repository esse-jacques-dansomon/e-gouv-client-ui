import Card from '@/components/Card'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="app-container">
      <div className="text-start w-full mb-5 flex flex-col items-start ">
        <h2 className='text-2xl font-bold'>Bienvenue sur votre tableau de bord</h2>
        <p>Compte citoyen</p>
        <p>Dernière connexion le 15 avril 2023 à 15h30</p>
      </div>
      <div className="flex flex-col w-full gap-2 md:flex-row">
        <Card style='md:w-2/3'>
          <div className="flex  justify-between">
            <h2 className="font-bold text-start">Vos dernières démarches</h2>
            <p className='underline text-primary'>Voir tout</p>
          </div>
      
        </Card>
        <div className="flex flex-col gap-2 md:w-1/3 ">
          <Card>
            <h1 className="text-start font-bold">Mon agenda</h1>
          </Card>
          <Card>
            <h1 className="text-start font-bold">Services en ligne</h1>
          </Card>

         </div>
      </div>

    </div>
  )
}

export default Dashboard