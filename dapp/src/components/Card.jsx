import React from 'react'

const Card = (props) => {
  return (
      <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
              <div className="block">
                  <img
                      alt="NFT"
                      src={props.imgUrl}
                      className="object-contain w-full h-auto shadow-xl rounded-xl"
                  />

                  <div className="p-4">
                      <h5 className="text-xl font-bold text-blue-500">
                          {props.name}
                      </h5>
                      {props.des && 
                          <h6 className="text-base text-gray-300">
                            {props.des}
                          </h6>
                      }
                      <div onClick={props.btnClick} className="flex justify-end">
                          <button type="button" className="py-2 px-4 mx-2 my-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-auto transition ease-in duration-200 text-center text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                             {props.btnName}
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Card;