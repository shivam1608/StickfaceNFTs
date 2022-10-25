import React from 'react'

const Install = () => {
  return (
    <>
      <div className="flex justify-center text-gray-300">
        <span className='text-2xl'>If you have no idea about what NFTs are just close this page or if you want to know follow this link <a href="https://www.youtube.com/watch?v=FkUn86bH34M">NFTs Explained</a></span>
      </div>
      <div className="flex justify-center text-gray-300 mt-10">
        <span className="text-blue-500 text-4xl">Metamask not Installed</span>
        <span className="text-gray-300 text-3xl">Install it from <a href="https://metamask.io/" className='text-blue-300'>here</a></span>
      </div>
    </>
  )
}

export default Install;