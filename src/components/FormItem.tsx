'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export interface FormItemProps {
  label: string
  desabled?: boolean ;
  placeholder: string
  type: string
  className?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormItem = (
{
   label,
   desabled = false,
   placeholder,
   type,
   className,
   onChange

} :  FormItemProps
) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClick = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={label.replaceAll(' ', '-')} className="block text-start font-bold text-[16px]">{label}</label>
      {
        desabled ? 
        <p className='text-start text-gray-500 py-2 px-1 bg-gray-200 '>{placeholder}</p> : <>
          {
            type === 'password' ? 
            <>
               <div className="flex flex-col w-full relative">
               <input 
                  disabled={desabled}
                  id={label.replaceAll(' ', '-')}
                  type={showPassword ? 'text' : 'password'}
                  className={`${desabled ? 'bg-gray-50' : 'bg-white' } border-2  h-10 text-primary border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full  px-2 ${className}`} 
                  placeholder={placeholder} 
                  onChange={onChange} />
                  {/* icon */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                  {
                    !showPassword ? 
                    <Image  onClick={handleClick} width="25" height="30" src="https://img.icons8.com/ios/100/hide.png" alt="hidden--v1"/> : 
                    <Image  onClick={handleClick} width="25" height="30" src="https://img.icons8.com/ios/100/visible--v1.png" alt="visible--v1"/>
                  }
                  </div>
               </div>
            </> : 
            <>
            <input 
              disabled={desabled}
              id={label.replaceAll(' ', '-')}
              type={type} 
              className={`${desabled ? 'bg-gray-50' : 'bg-white' }  h-10 text-primary border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full  px-2 ${className}`} 
              placeholder={placeholder} 
              onChange={onChange} />
            </>
          }
        </> 
      }
      {/* <
      /> */}
    </div>
  )
}

export default FormItem