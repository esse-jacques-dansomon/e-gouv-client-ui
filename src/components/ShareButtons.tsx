import React from 'react'
import Image from 'next/image'

const ShareButtons = () => {
  return (
    <>
      <div className='flex items-center justify-center space-x-4 bg-white  h-10  px-3'>
          <Image width="16" height="16" src="https://img.icons8.com/ios-glyphs/30/print.png" alt="print"/>
          <Image width="16" height="16" src="https://img.icons8.com/ios-glyphs/30/new-post.png" alt="print"/>
          <Image width="16" height="16" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="print"/>
          <Image width="16" height="16" src="https://img.icons8.com/ios-glyphs/30/facebook.png" alt="print"/>
          <Image width="16" height="16" src="https://img.icons8.com/ios-glyphs/30/twitter.png" alt="print"/>
          <Image width="16" height="16" src="https://img.icons8.com/ios-glyphs/30/instagram.png" alt="print"/>
          <Image width="16" height="16" src="https://img.icons8.com/ios-glyphs/30/pinterest.png" alt="print"/>
      </div>
    </>
  )
}

export default ShareButtons