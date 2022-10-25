import React from 'react'

const Faq = () => {
  return (
      <div>
          <section className="text-gray-300">
              <div className="container px-5 py-24 mx-auto justify-center">
                  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                      <div className="w-full lg:w-1/2 px-4 py-2">
                          <details className="mb-4">
                              <summary className="font-semibold  bg-dark rounded-md py-2 px-4">
                                  How Long is this site live?
                              </summary>

                              <span>
                                  Idk maybe until i own this domain and server. Does it really matters? 😏
                              </span>
                          </details>
                          <details className="mb-4">
                              <summary className="font-semibold bg-dark rounded-md py-2 px-4">
                                  What is a NFT ?
                              </summary>

                              <span>
                                  NFT stands for Non Fungible Token its just some sort of digital art which when become viral people buy it for millions 💸
                              </span>
                          </details>
                          <details className="mb-4">
                              <summary className="font-semibold  bg-dark rounded-md py-2 px-4">
                                  Why i made this ?
                              </summary>

                              <span>
                                Just for Fun & Experience 😎 . im not a lead investor in NFTs its just stupid for me
                              </span>
                          </details>
                      </div>
                      <div className="w-full lg:w-1/2 px-4 py-2">
                          <details className="mb-4">
                              <summary className="font-semibold  bg-dark rounded-md py-2 px-4">
                                  What i'll do with NFT after minting?
                              </summary>

                              <span className="px-4 py-2">
                                  Just keep it,sell it ,list it do whatever you want idc really
                              </span>
                          </details>
                          <details className="mb-4">
                              <summary className="font-semibold  bg-dark rounded-md py-2 px-4">
                                  Will shivzee earn money with this ?
                              </summary>

                              <span className="px-4 py-2">
                                No its on testnet bruhhh 😑. 
                              </span>
                          </details>
                          <details className="mb-4">
                              <summary className="font-semibold  bg-dark rounded-md py-2 px-4">
                                  How can I communicate with you?
                              </summary>

                              <span className="px-4 py-2">
                                  You can't 😁
                              </span>
                          </details>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Faq;