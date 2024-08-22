import React from 'react'

const FileFormFiled = () => {
  return (
   <div className="flex flex-col w-full">
      <input
       className="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 focus:outline-none file:h-10" aria-describedby="file_input_help" id="file_input" type="file" />
   </div>
  )
}

export default FileFormFiled