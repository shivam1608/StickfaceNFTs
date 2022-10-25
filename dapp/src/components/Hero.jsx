import React from 'react'
import { Link } from 'react-router-dom';

const Hero  = () => {
  return (


      <div className="bg-dark">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">
                      Want to be millionaire ?
                  </span>
                  <span className="block text-blue-500">
                      It&#x27;s today or never.
                  </span>
              </h2>
              <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
                  I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to buy any NFT freely and spend millions on stupid things
              </p>
              <div className="lg:mt-0 lg:flex-shrink-0">
                  <div className="mt-12 inline-flex rounded-md shadow">
                      <Link to="/app" type="button" className="py-4 px-6 mx-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                          Mint Now!
                      </Link>
                      <a href="https://testnets.opensea.io" type="button" className="py-4 px-4 mx-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-xs font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                          Buy on Opensea
                      </a>
                  </div>
              </div>
          </div>
      </div>


  )
}

export default Hero;