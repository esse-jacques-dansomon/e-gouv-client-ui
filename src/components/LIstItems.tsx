import React from 'react'
import LinkItem from './LinkItem';

export interface ListItemsProps {
   title: string;
  links: Array<{
    title: string;
    href: string;
  }>;
}
const ListItems = ( {title, links}: ListItemsProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-y-4 p-4  ">
       <h2 className="text-xl font-semibold">{title}</h2>
            <div className="my-2">
              {links.map((link) => (
                <LinkItem key={link.title} title={link.title} href={link.href} />
              ))}
      
            </div>
    </div>
  )
}

export default ListItems