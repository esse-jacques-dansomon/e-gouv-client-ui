import React from 'react'

const TextBtn = (
   {
      label,
      className,
      onClick   } :  {
      label: string,
      className?: string,
      onClick?: () => void,
      type: 'submit' | 'reset' | 'button'
   }
) => {
  return (
    <button className={`${className} text-primary`} onClick={onClick}>
      <span className="text-sm font-bold">{label}</span>   
    </button>
  )
}

export default TextBtn
