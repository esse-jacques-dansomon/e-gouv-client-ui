import React from 'react'
import Image from 'next/image'
import ListItems from './LIstItems';

export interface InfoCardProps {
  title: string;
  style: string;
  links: Array<{
    title: string;
    href: string;
  }>;
}

const InfoCard = ({ title, style, links }: InfoCardProps) => {
  return (
         <div className="flex flex-1 justify-start items-start bg-white p-6 relative ">
            <div className="text-start ">
              <div className="">
                <div className="border-l-2 border-primary  z-5 absolute left-0 top-1/4 bottom-1/4 w-2 max-h-[60%] "></div>
               <ListItems  title={title} links={links} />
              </div>
              <button className={`text-black text-sm px-4 py-2 rounded border-2 ${style}`}>
              Voir tout
            </button>
          </div>
        </div>
   
  )
}

export default InfoCard
