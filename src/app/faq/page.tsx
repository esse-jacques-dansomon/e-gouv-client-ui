import React from 'react'
import FaqItem from "@/components/FaqItem";
import { FAQS } from '@/constantes/data';

const Faq = () => {
  return (
    <div className='app-container'>
      <h1 className='text-3xl font-bold mt-[140px]'>F.A.Q</h1>
      <p className='text-center text-black'>Foire aux questions</p>
      {/* SEARCH BAR */}
      <div className="flex flex-row  my-10">
          {/* SEARCH BAR */}
          <input type="text" placeholder="Rechercher un service, un mot-clé..."
                 className="w-full px-4 py-2  shadow focus:outline-none" />
          <button className="bg-green-500 text-white text-sm px-2 py-2 ">
              Search
          </button>
      </div>

      {/* FAQ ITEMS */}
      <div className="flex flex-col gap-5 mt-10">
        {FAQS.map((faqCategory) => (
          <>
          <div className="w-full flex flex-col my-1">
              <div className="bg-primary text-white px-4 py-2 text-start ">
                {faqCategory.title}
              </div>
              { faqCategory.items.map((link) => {
                  return (
                  <FaqItem key={link.id} title={link.title} respose={link.respose} />
                  )

              }) }
        </div>
          </>
        ))}
  

    </div>
    </div>
  )
}

export default Faq