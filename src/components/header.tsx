'use client'
import React, { act, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link';
import { useAppContext } from '@/app/providers';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('FR');
  const router = useRouter();

  const { activeTab, setActiveTab } = useAppContext();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedCountry(value);
  };

  // const handleEspaceChange = () => {
  //   setActiveTab(activeTab === "espace citoyen" ? "espace entreprise" : "espace citoyen");
  //   router.push(activeTab === "espace citoyen" ? "/" : "/entreprise");
  // };

  function toggleMenu(): void {
    setIsOpen(!isOpen);
  }

  function toogleLinks(): void {
    setIsMenuOpen(!isMenuOpen);
  }


  const currentPath = usePathname()
  const isEspaceEntreprise = activeTab === "espace entreprise" // Détecte si l'utilisateur est sur la page Espace Entreprise



  return (
   <header className=" bg-white  fixed top-0 left-0 right-0 z-30 ">
    <div className="bg-white text-white ">
      <div className="app-container flex items-center justify-between">
        <div className="flex items-center h-8 justify-between text-sm">
          <Link href="/" className={`hover:underline px-4 text-center h-8  flex items-center justify-center ${ !isEspaceEntreprise?  'bg-primary' :'bg-white text-black ' }`}>Espace Citoyen</Link>
          <Link href="/entreprise" className={`hover:underline px-4 text-center h-8  flex items-center justify-center ${isEspaceEntreprise  ? 'bg-senRed' : 'bg-white text-black ' }`}>Espace Entreprise</Link>
        </div>
        <div className="space-x-2  sm:flex text-sm">
          <form className="max-w-sm mx-auto">
            <select defaultValue="FR" onSelect={handleChange} id="countries" className="bg-white  text-primary border-white block w-full h-8 px-2 ">
              <option  value="FR">Francais</option>
              <option value="EN">English</option>
              <option value="WOLOF">Wolof</option>
            </select>
          </form>
        </div>                      
      </div>
    </div>
    <div className={` ${isEspaceEntreprise ? 'bg-senRed' : 'bg-primary'} `}>
      <div className="app-container flex justify-between items-center py-3 border-b-2 border-white">
      <div className="flex items-center justify-center">
            <div onClick={toggleMenu} id="menu-btn" className="text-gray-800 font-bold flex space-x-2 ">
                  <Image src="https://img.icons8.com/?size=100&id=8113&format=png&color=ffffff" alt="logo" width="32" height="32" />
                  <div className="w-2 leading-none text-sm font-bold text-white">
                    Services Numériques
                  </div>
            </div>
        </div>
        <div className="flex items-center justify-between  text-white text-sm gap-1">
            {/* <Link href="/auth/login" className="hover:underline">Se connecter</Link>
            <span className='te'>/</span> */}
            <Link href="/dashboard" className="hover:underline px-3 py-1 bg-sendGreen">Mon Compte</Link>

        </div>
      </div>

    </div>
    <div id="menu" className={` bg-white absolute top-0 left-0 right-0 z-10 overflow-y-scroll min-h-[100vh] max-w-[540px] shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white shadow flex flex-row items-center justify-between h-14 px-4">
          <div className="text-xl font-bold">Menu</div>
          <Image onClick={() => toggleMenu()} id="close-btn" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete-sign"/>
      </div>
      <div className="grid grid-cols-1 divide-gray-50 px-4 py-4 gap-y-4">
          <Link href="/" className="hover:underline text-xl font-semibold">Accueil</Link>
          <div className="">
              <div onClick={toogleLinks} className="flex w-full flex-row justify-between items-start">
                  <Link href={`/services`} className="text-xl font-semibold">Nos Services</Link>
                  <Image  src="https://img.icons8.com/ios/50/000000/chevron-right.png" alt="Chevron" width="16" height="16" />
              </div>
              <div className={`flex flex-col space-y-4 pl-3 mt-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
                  <Link onClick={toggleMenu}  href="/services/education-formation" className="hover:underline">Education & Formation</Link>
                  <Link onClick={toggleMenu}  href="/services/emploi-securite-sociale" className="hover:underline">Emploi & Sécurité sociale</Link>
                  <Link onClick={toggleMenu}  href="/services/papiers-citoyennete" className="hover:underline">Papiers & Citoyenneté</Link>
                  <Link onClick={toggleMenu}  href="/services/fiscalite-foncier-douanes" className="hover:underline">Fiscalité, Foncier & Douanes</Link>
                  <Link onClick={toggleMenu}  href="/services/agriculture-elevage-industrie" className="hover:underline">Agriculture, Elevage & Industrie</Link>
                  <Link onClick={toggleMenu}  href="/services/sante-protection-sociale" className="hover:underline">Santé & Protection sociale</Link>
                  <Link onClick={toggleMenu}  href="/services/loisirs-media-culture" className="hover:underline">Loisirs, Media & Culture</Link>
                  <Link onClick={toggleMenu}  href="/services/habitat-transport" className="hover:underline">Habitat & Transport</Link>
                  <Link onClick={toggleMenu}  href="/services/justice" className="hover:underline">Justice</Link>
                  <Link onClick={toggleMenu}  href="/services/securite-surete" className="hover:underline">Sécurité & surêté</Link>  
              </div>
          </div>
          <Link onClick={toggleMenu}  href="/contact" className="hover:underline text-xl font-semibold">Contact</Link>   
          <Link onClick={toggleMenu}  href="/faq" className="hover:underline text-xl font-semibold">FAQ</Link>   
          <Link onClick={toggleMenu}  href="phone-book" className="hover:underline text-xl font-semibold">Annuaire de l administration</Link>
          <Link onClick={toggleMenu}  href="#" className="hover:underline text-xl font-semibold">Espace Entreprise</Link>   

          <div className="flex flex-col justify-start items-start gap-3">
              <button className="bg-white text-black border-2 border-red-300 text-sm px-2 py-2 rounded">Créer un compte</button>
              <button className="bg-white border-green-500 border-2 text-w text-sm px-2 py-2 rounded">Se connecter</button>
          </div>

      </div>
    </div>
</header>
  )
}

export default Header


