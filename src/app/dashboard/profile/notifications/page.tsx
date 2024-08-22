import Card from '@/components/Card'
import FormItem from '@/components/FormItem'
import React from 'react'

const Notification = () => {
  return (
    <>
      <Card style='text-start'>
        <h2 className='text-start font-bold text-xl mb-1'>Notifications</h2>
        <p>Modifiez vos préférences de communication        </p>
        {/*  */}
        <div className="flex flex-col ">
          <div className="flex flex-col mt-4 md:flex-row gap-2">
            <FormItem label={'Email'} placeholder={'Email'} type={'email'} />
            <FormItem label={'SMS'} placeholder={'SMS'} type={'text'} />
          </div>
        </div>
      </Card>
    </>
  )
}

export default Notification