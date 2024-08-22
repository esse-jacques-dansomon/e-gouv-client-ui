'use client'
import React from 'react'
import Card from '@/components/Card'
import FormItem from '@/components/FormItem'
import SelectFormItem from '@/components/SelectFormItem'
import TextBtn from '@/components/TextBtn'

const Profile = () => {

  return (

    <>
       <Card>
        <form className="h-full w-full border-b border-gray-300 mb-3 ">
      
            {/* title */}
            <div className="flex flex-col ">
              <h2 className='text-start font-bold text-xl'>Paramètres du compte</h2>
              <p className='text-start'>Retrouvez toutes les informations de connexion à votre compte.</p>
            </div>
            
            <div className="flex flex-col mt-4 md:flex-row gap-2">
              {/* email */}
              <FormItem
                desabled={true}
                label={`Adresse e-mail`}
                placeholder={'essedansmon@gmail.com'} 
                type={'text'} 
                className={'flex flex-col'} 
                // onChange={(e)=> console.log(e.target.value)}
                />
                {/* phone */}
                <FormItem
                  label={`Numéro de téléphone`}
                  placeholder={'0612345678'} 
                  type={'text'} 
                  className={'flex flex-col'} 
                  // onChange={(e)=> console.log(e.target.value)}
                  />
            </div>

            {/*  carrd and id-number*/}
              <div className="flex flex-col mt-4 md:flex-row gap-2">
                <SelectFormItem 

                label={`Document d'identification`}
                onChange={(e)=> console.log(e.target.value)}
                className={''} 
                defaultValue={'Carte d\'identité'}
                options={[
                  'Carte d identité',
                  'Carte d électeur',
                  'Passeport',
                  'Carte de séjour',
                  'Carte de résident'
                ]} />
                <FormItem
                  label={`Numéro d identification`}
                  placeholder={'1273838930303'} 
                  type={'text'} 
                  className={'flex flex-col'} 
                  onChange={(e)=> console.log(e.target.value)}
                  />
            </div>
            <div className="flex flex-col mt-4 md:flex-row gap-2">
              {/* password */}
              <FormItem
                label={`Mot de passe`}
                placeholder={'********'} 
                type={'password'} 
                className={'flex flex-col'} 
                onChange={(e)=> console.log(e.target.value)}
                />
              <FormItem
                label={`Confirmer le mot de passe`}
                placeholder={'********'} 
                type={'password'} 
                className={'flex flex-col'} 
                onChange={(e)=> console.log(e.target.value)}
                />
            </div>

            <TextBtn className='w-full bg-primary py-2 mt-10 text-white' label={'Appliquer les modifications'} type={'submit'} />

        </form>
      {/*  delete account */}
        <div className="text-start flex flex-col">
          <h2 className='text-start text-xl font-semibold mb-2'>Vous souhaitez supprimer votre compte ?</h2>
          <p>En supprimant votre compte service-public.gouv.tg, vous supprimerez tous les documents et informations quil contient. Nous vous recommandons de télécharger vos documents avant de supprimer votre compte.
          </p> <br/>
          <p>Seules sont conservées les informations permettant de répondre à déventuelles contestations et aux besoins statistiques du service. Votre adresse e-mail est conservée pendant un an, vous ne pourrez utiliser cette adresse pour ouvrir un nouveau compte service-public.gouv.tg pendant ce délai.</p>
          <TextBtn className='w-full bg-red-500 py-2 mt-10 text-white' label={'Supprimer mon compte'} type={'submit'} />
        </div>
      </Card>
    </>
  )
}

export default Profile
