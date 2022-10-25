import React , {useState , useEffect} from 'react'
import Card from './Card';

const NFTs = (props) => {

  const [isOwner , setIsOwner] = useState(false);

  const checkForOwner = async () => {
    let owner = await props.contract.owner();
    setIsOwner(owner == props.address);
  }
  
  useEffect(() => {
    checkForOwner();
  }, [])
  

  return (
      <div className="relative">
          <h1 className="sm:text-base text-xs font-medium title-font mt-6 text-center text-gray-300"><span className="text-2xl">👋</span> {isOwner ? "Admin" : props.address}</h1>
          {isOwner && 
           <section className='text-gray-300 body-font'>
            <div className="flex justify-center mt-6">
                      <button
                          onClick={props.withdraw}
                          className="hidden md:flex px-5 py-2.5 text-sm font-medium text-white bg-blue-600 dark:hover:bg-blue-500 rounded-md shadow">
                          🤑 Withdraw Moni
                      </button>
            </div>
           </section>
          }
          <section className="text-gray-300 body-font">
              <div className="container px-5 py-14 mx-auto">
                  <div className="flex flex-col text-center w-full mb-20">
                      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-500">Your NFTs</h1>
                      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">List of NFTs you own. Manage your NFT on <a className="text-blue-500 no-underline" href="https://testnets.opensea.io">testnets.opensea.io</a></p>
                  </div>
                  <div className="flex flex-wrap m-4">
                      
                      {
                        props.owned.map((tokenId , i)=>{
                            return <Card key={i} imgUrl={`/api/img/${tokenId}`} name={`Stickface NFT#${tokenId}`} btnName={"View NFT"} />
                        })
                      }

                      {
                          props.totalSupply <= 96 && <Card btnClick={props.mintToken} imgUrl={"https://i.postimg.cc/BZjsCqB0/image.jpg"} name="Mint a new NFT" btnName={"Mint"} des={"Price : 0.05 ETH"} />
                      }
                  </div>
              </div>
          </section>
      </div>
  )
}

export default NFTs;