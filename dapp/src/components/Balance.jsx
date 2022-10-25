import { ethers } from 'ethers';
import React, { useState } from 'react'

const Balance = () => {

  const [balance , setBalance] = useState(0);

  const updateBalance = async () => {
    const [account] = await window.ethereum.request({method : "eth_requestAccounts"});
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  }

  return (
    <div className=''>
        <div className="flex flex-col">
              <h1 className="text-4xl text-gray-300">Balance</h1>
              <h1 className="text-2xl text-center text-gray-300">{balance}</h1>
        </div>
        <button className='hover:bg-blue-700 text-xl bg-blue-500 rounded-lg p-2 text-white text-bold m-4' onClick={updateBalance}>Click me</button>
    </div>
  )
}

export default Balance;