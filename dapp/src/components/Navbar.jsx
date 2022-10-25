import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
      <header className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                  <div className="flex-1 md:flex md:items-center md:gap-12">
                      <Link className="block text-blue-500 text-3xl" to="/">
                          STICKFACE NFT
                      </Link>
                  </div>

                  <div className="md:flex md:items-center md:gap-12">
                      <nav className="hidden md:block" aria-labelledby="header-navigation">
                          <h2 className="sr-only" id="header-navigation">Header navigation</h2>

                          <ul className="flex items-center gap-6 text-sm">
                              <li>
                                  <Link to="/"
                                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                  >
                                      Home
                                  </Link>
                              </li>

                              <li>
                                  <Link to="/app"
                                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                  >
                                      DApp
                                  </Link>
                              </li>
                          </ul>
                      </nav>

                      <div className="flex items-center gap-4">
                          <div className="sm:gap-4 sm:flex">

                              <button
                                  onClick={props.updateBalance}
                                  className="hidden md:flex px-5 py-2.5 text-sm font-medium text-white bg-blue-600 dark:hover:bg-blue-500 rounded-md shadow"
                                  href="/">
                                  {props.balance ? `${props.balance} ETH` : "Connect Wallet"}
                              </button>
                              
                          </div>

                          <div className="block md:hidden">
                              <button
                                  className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M4 6h16M4 12h16M4 18h16"
                                      />
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>

  )
}

export default Navbar;