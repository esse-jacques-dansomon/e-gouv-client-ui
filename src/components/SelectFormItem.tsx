import React from 'react'

export interface FormItemProps {
    showLabel?: boolean,
  label?: string
  className?: string,
  options: string[],
  defaultValue?: string,
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void | any
}
const SelectFormItem = (
    {
        showLabel = true,
        label,
        options,
        className,
        defaultValue,
        onChange
    } :  FormItemProps
) => {  
  return (
    <div className="flex flex-col w-full">
        {
            showLabel ?
            <label htmlFor={label?.replaceAll(' ', '-')} className="block text-start font-bold text-[16px]">{label}</label>

            : null
        }
        <select 
           
            defaultValue={defaultValue}
            id={label?.replaceAll(' ', '-')}
            className={`bg-white h-10 text-gray-500 border-2 border-gray-200 focus:ring-blue-500 focus:border-blue-500 block w-full  px-2 ${className}`} 
            onChange={onChange}
            
        >

            <option  value="">{label}</option> : null
         
            {options.map((option, index) => (
                <option className='text-gray-200'  key={index} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectFormItem