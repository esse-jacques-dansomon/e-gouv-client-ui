import Breadcrumb from '@/components/Breadcrumb'
import ListItems from '@/components/LIstItems'
import { subCategories } from '@/constantes/data'
import React from 'react'

const CategoryService = () => {
  return (
    <div className='max-w-5xl'>
       <Breadcrumb title={'Transport'}  links={[{ title: 'Services', href: '/services' }, { title: 'Transport', href: '/services/category' }]} />

      {/* sub-categories*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  bg-white shadow">
        {subCategories.map((subCategory) => (
          <ListItems key={subCategory.id} title={subCategory.name}  links={subCategory.services} />
        ))}

      </div>
    </div>
  )
}

export default CategoryService
