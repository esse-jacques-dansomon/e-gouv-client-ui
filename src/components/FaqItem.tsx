'use client'
import React, { useState } from 'react'

const FaqItem = ( {title, respose}: {title: string, respose: string} ) => {
    const [isOpen, setIsOpen] = useState(false);

    function closeFaq(): void {
        setIsOpen(!isOpen);
    }

    return (
        <div className="">
            <div onClick={closeFaq}
                className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse items-center justify-center mt-2 cursor-pointer  bg-white hover:bg-white ">
                <div className="flex-auto text-start text-sm">{title}</div>
                <div className="px-2 ">
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round" className={`feather  w-5 h-5 ${isOpen ? 'feather-chevron-up' : 'feather-chevron-down'}`}>
                            {
                                isOpen ?
                                    <polyline points="6 9 12 15 18 9"></polyline> :
                                    <polyline points="18 15 12 9 6 15"></polyline>
                            }

                        </svg>
                </div>
                </div>
            </div>
            <div className={`p-2 text-justify  text-gray-800 mb-5 bg-white faq-reponse ${isOpen ? 'block' : 'hidden'}`}>
                {respose}
            </div>
        </div>
    )
}
export default FaqItem
