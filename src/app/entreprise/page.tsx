'use client'
import CategoryCard from "@/components/CategoryCard";
import InfoCard from "@/components/InfoCard";
import { categories, entreprisesCategories, infoLinks, servicesLinks } from "@/constantes/data";
import { useAppContext } from "@/app/providers";

import React from 'react'

const Home = () => {
  const { activeTab, setActiveTab } = useAppContext();

  setActiveTab("espace entreprise")

  return (
      <>
      <div className="min-h-[60vh] w-full bg-senRed"></div>
          <div className=" -mt-[40vh] left-0 right-0 bottom-0 z-0 app-container  max-sm:px-5">
            <div className="">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Votre plateforme de services <br/>gouvernementaux</h1>
              <div className="mt-10">
                <div className="relative max-w-xl mx-auto">
                  <label>
                    <input  type="text" placeholder="Rechercher un service, un mot-clé..."
                          className="w-full px-4 py-2  shadow focus:outline-none" />
                  </label>
                  <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-sendGreen text-white px-4 py-2 ">
                    Search
                  </button>
                </div>
              </div>
              <div className="grid ms:grid-col-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-20">
              {entreprisesCategories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}

              </div>
            </div>

            <div className="gap-5 mt-10 flex flex-col md:flex-row">
              <InfoCard title="Services disponibles" style={"border-red-500"} links={servicesLinks} />
              <InfoCard title="Besoin d'aide ? " style={"border-primary"} links={infoLinks} />
            </div>
          </div>
      </>
  )
}

export default Home