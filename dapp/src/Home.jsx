import React , {useState} from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { DApp, Intro, Navbar } from './components';
import { ethers } from 'ethers';

const Home = () => {
  const [balance, setBalance] = useState();

  const updateBalance = async () => {

    if (window.ethereum.networkVersion !== 5) {

      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x5' }]
        });
      } catch (err) {
        if (err.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: 'Goerli Test Network',
                chainId: '0x5',
                nativeCurrency: { name: 'GoerliETH', decimals: 18, symbol: 'GoerliETH' },
                rpcUrls: ['https://goerli.infura.io/v3/']
              }
            ]
          });
        }
      }
    }

    const [account] = await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance).substring(0,10));
  }
  
  return (
   <>
          <Router>
            <Navbar balance={balance} updateBalance={updateBalance} />
                <div className="flex justify-center">
                <Routes>
                      <Route path='/' element={<Intro />} />
                      <Route path="/app" element={<DApp updateBalance={updateBalance}/>} />
                  </Routes>
                </div>
          </Router>
    </>
  )
}

export default Home;