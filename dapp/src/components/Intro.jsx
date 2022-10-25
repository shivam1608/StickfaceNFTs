import { ethers } from 'ethers';
import React , {useState , useEffect} from 'react'
import Faq from './Faq';
import Hero from "./Hero";
import Footer from './Footer';


import StickfaceNFT from "../abi/StickfaceNFT.json";

const Intro = () => {

  const [NFTDemos , setNFTDemos] = useState([]);
  const [taken , setTaken] = useState("X");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = "0x25348E9897f5c3543427106342F5cBBD184db44b";

  const contract = new ethers.Contract(contractAddress , StickfaceNFT.abi , provider);

  const updateTaken = async () => {
    let total = await contract.totalSupply();
    setTaken(total+"");
  }

  useEffect(() => {
    let nfts = [];
    for(let i=0;i<5;i++){
      let x = Math.round(Math.random() * (95 - 1) + 1);
      nfts.push(x+"");
    }
    setNFTDemos(nfts);
    updateTaken();
  }, []);
  

  return (
    <div className='container flex flex-col justify-center'>
        <div className="snap-x flex mt-12 w-full overflow-x-scroll scroll-smooth scrollbar-hide">
            {
              NFTDemos.map((v , i) => 
                <img key={i} className='mx-2 snap-center' src={`/api/img/${v}`} alt={v} />
              )
            }
        </div>
        <Hero />
      <section className="text-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto flex justify-center">
          <div className="flex flex-col">
            <h2 className="title-font font-medium text-7xl text-gray-300">{taken} <span className="text-gray-300 text-3xl">out of</span> 96</h2>
            <p className="leading-relaxed text-center text-blue-500 mt-2 text-3xl">NFTs Minted</p>
          </div>
        </div>
      </section>
       <Faq />
       <Footer />
    </div>
  )
}

export default Intro;