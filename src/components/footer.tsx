'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
    // navigation
    const [openNavigation, setOpenNavigation] = useState(false);
    const toggleNavigation = () => {
      setOpenNavigation(!openNavigation);
    };

    // informations
    const [openInformations, setOpenInformations] = useState(false);
    const toggleInformations = () => {
      setOpenInformations(!openInformations);
    };

    // liens rapides
    const [openLiensRapides, setOpenLiensRapides] = useState(false);
    const toggleLiensRapides = () => {
      setOpenLiensRapides(!openLiensRapides);
    };
    // scroll to top
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };



  return (
   <footer className="relative bg-white p-4 shadow mx-auto py-10">
   <div className="app-container flex flex-col  gap-3 md:flex-row">
       <div className="flex flex-1 flex-row justify-start items-start">
           <Image  width="100" height="130" src="https://img.icons8.com/color/48/senegal.png" alt="senegal"/>
       </div>
       <div className="flex flex-1 flex-col justify-start items-start space-x-2">
           <div onClick={toggleNavigation} className="flex w-full flex-row justify-between items-start mb-2 open-footer-links">
               <h2 className="text-xl font-semibold">Navigation</h2>
               <Image src="https://img.icons8.com/ios/50/000000/chevron-right.png" alt="Chevron" width="16" height="16" className="mx-2 md:hidden " />
           </div>
           <div className={`flex flex-col justify-start items-start  footer-links md:flex ${openNavigation ? '' : 'hidden'}`}>
               <Link href="#" className="hover:underline">Accueil</Link>
               <Link href="#" className="hover:underline">Services</Link>
               <Link href="#" className="hover:underline">Contact</Link>
           </div>

       </div>
       <div className="flex flex-1 flex-col justify-start items-start space-x-2">
           <div onClick={toggleInformations} className="flex w-full flex-row justify-between items-center mb-2 open-footer-links">
               <h2 className="text-xl font-semibold">Informations</h2>
               <Image src="https://img.icons8.com/ios/50/000000/chevron-right.png" alt="Chevron" width="16" height="16" className="mx-2 md:hidden" />
               
           </div>
           <div className={`flex flex-col justify-start items-start  footer-links md:flex ${openInformations ? '' : 'hidden'}`}>
               <Link href="#" className="hover:underline">A propos</Link>
               <Link href="#" className="hover:underline">FAQ</Link>
               <Link href="#" className="hover:underline">Annuaire de l administration</Link>
           </div>
       </div>
       <div className="flex flex-1 flex-col justify-start items-start space-x-2">
           <div onClick={toggleLiensRapides} className="flex w-full flex-row justify-between items-center mb-2 open-footer-links">
               <h2 className="text-xl font-semibold">Liens rapides</h2>
               <Image src="https://img.icons8.com/ios/50/000000/chevron-right.png" alt="Chevron" width="16" height="16" className="mx-2 md:hidden" />
           </div>
           <div className={`flex flex-col justify-start items-start  footer-links md:flex ${openLiensRapides ? '' : 'hidden'}`}>
               <Link href="#" className="hover:underline">Mentions légales</Link>
               <Link href="#" className="hover:underline">Politique de confidentialité</Link>
               <Link href="#" className="hover:underline">Conditions d utilisation</Link>
           </div>
       </div>
   </div>
   {/* scroll to top */}
   <div onClick={scrollToTop} className="fixed bottom-0 right-0 z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out m-4">
       <Image src="https://img.icons8.com/ios-glyphs/50/ffffff/chevron-up.png" alt="Chevron" width="24" height="24" />
   </div>
 </footer>
  )
}

export default Footer
