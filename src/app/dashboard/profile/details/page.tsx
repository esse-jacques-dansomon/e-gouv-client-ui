import Card from '@/components/Card'
import FormItem from '@/components/FormItem'
import SelectFormItem from '@/components/SelectFormItem'
import TextBtn from '@/components/TextBtn'
import React from 'react'

const PersonnalInfo = () => {
  return (
    <Card style='text-start'>
      <h2 className='text-start font-bold text-xl mb-1'>Informations personnelles</h2>
      <p>Retrouver toutes les informations personnelles liées à votre compte.</p>
      <p>Attention, les champs suivants ne sont modifiables quune seule fois
      </p>
      <div className="w-full border-t-2 border-gray-200 mt-3">
        {/* form */}
        <form className="h-full w-full ">
          {/* name and surname */}
            <div className="flex flex-col mt-4 md:flex-row gap-2">
              <FormItem label={'Prénom'} placeholder={'Prénom'} type={'text'}  />
              <FormItem label={'Nom'} placeholder={'Nom'} type={'text'}  />
            </div>
            {/* born date and gender */}
            <div className="flex flex-col mt-4 md:flex-row gap-2">
               <FormItem label={'Date de naissance'} placeholder={'JJ/MM/AAAA'} type={'date'} /> 
               <FormItem label={'Sexe'} placeholder={'Masculin ou Féminin'} type={'text'} />
            </div>
            {/* nationality  and country of birth */}
            <div className="flex flex-col mt-4 md:flex-row gap-2">
              <SelectFormItem label={'Nationalité'} options={['France', 'Allemagne', 'Italie', 'Espagne', 'Autre']} className={''} />
              <SelectFormItem label={'Pays de naissance'} options={['France', 'Allemagne', 'Italie', 'Espagne', 'Autre']} className={''} />
            </div>
            {/* address */}
            <div className="flex flex-col mt-4 md:flex-row gap-2">
              <FormItem label={'Adresse courante'} placeholder={'Adresse'} type={'text'}  />
              <FormItem label={'Code postal'} placeholder={'Code postal'} type={'text'}  />
            </div>
            {/* city and country */}
            <div className="flex flex-col mt-4 md:flex-row gap-2">
              <FormItem label={'Ville'} placeholder={'Ville'} type={'text'}  />
              <SelectFormItem label={'Pays'} options={['France', 'Allemagne', 'Italie', 'Espagne', 'Autre']} className={''} />
            </div>
          
            {/* submit */}
            <TextBtn label={'Enregistrer'} type={'submit'} className='mt-5 py-2 px-4 w-full text-white bg-primary hover:bg-primary-light' />

        </form>
      </div>
    </Card>
  )
}

export default PersonnalInfo
