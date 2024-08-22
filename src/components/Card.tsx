import React from 'react'

const Card = (
   {
      children,
      style
   } : {
      children: React.ReactNode;
      style?: string;
   }

) => {
  return (
    <div className={`bg-white p-5 ${style}`}>
      {children}
    </div>
  )
}

export default Card