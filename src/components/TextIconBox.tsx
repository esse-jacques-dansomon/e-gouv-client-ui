import React from 'react'
import Image from 'next/image'

export interface TextIconBoxProps {
  icon: string;
  title: string;
  subTitle: string;
  style?: string;
}

const TextIconBox = ({ icon, title,subTitle, style }: TextIconBoxProps) => {
  return (
    <div className={`flex flex-col items-start justify-center bg-slate-300 flex-1 p-3 gap-2 ${style}`}>
      <Image width={45} height={45} src={icon} alt={title} className='b-4' />
      <p className='text-black text-[14px] font-semibold text-start'>
        {title}
      </p>
      <p className='text-black-100 text-[12px] text-start'>
        {subTitle}
      </p>
    </div>
  )
}

export default TextIconBox