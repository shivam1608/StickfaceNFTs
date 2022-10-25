import { ethers } from 'ethers';
import React , {useState , useEffect} from 'react'
import NFTs from './NFTs';
import StickfaceNFT from "../abi/StickfaceNFT.json";

const DApp = (props) => {

  const [owned , setOwned] = useState([]);
  const [totalSupply , setTotalSupply] = useState(0);
  const [loading , setLoading] = useState(true);
  const [address , setAddress] = useState();

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = "0x25348E9897f5c3543427106342F5cBBD184db44b";

  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress , StickfaceNFT.abi , signer);

  const mintToken = async() =>{
    const connection = contract.connect(signer);
    const exe = await contract.mintToken(await signer.getAddress() , {
      value : ethers.utils.parseEther('0.05'),
    });
    await exe.wait();
    updateOwnedTokens();
  }

  const updateOwnedTokens = async () => {
    setLoading(true);
    await props.updateBalance();
    const adds = await signer.getAddress();
    setAddress(adds);
    const tSupply = await contract.totalSupply();
    setTotalSupply(tSupply);
    let xOwned = [];
    for(let i=0;i<tSupply;i++){
      if ((await contract.ownerOf(i)) === adds){
        xOwned.push(i);
      }
    }
    setOwned(xOwned);
    setLoading(false);
  }

  const withdrawForOwner = async () => {
    await contract.withdraw();
  }

  useEffect(()=>{
    updateOwnedTokens();
  } , []);

  

  return (
    <>
        <div className="flex flex-col">
        {loading ? 
        <>
        <div className="flex justify-center mt-36 m-3">
          <div className="flex flex-col">
                <h1 className="text-3xl text-gray-300">Fetching Information Please wait....</h1>
                <span className="text-2xl text-blue-500">Taking too Long?</span>
                <p className="text-xl text-gray-300">Check Metamask for Web3 Requests & Refresh the page after checking</p>
          </div>
        </div>
        </> 
          : <NFTs contract={contract} mintToken={mintToken} owned={owned} totalSupply={totalSupply} address={address} withdraw={withdrawForOwner}/>}
        </div>
    </>
  )
}

export default DApp;