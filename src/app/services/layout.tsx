import React from 'react'

const ServiceLayout = ({children} : React.PropsWithChildren<{}>) => {
  return (
    <div className='app-container'>{children}
    </div>
  )
}

export default ServiceLayout