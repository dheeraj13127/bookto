import React,{useEffect} from 'react'
import Web3 from "web3";
import { useDispatch } from "react-redux";
import {BOOKTO_CONTRACT} from './ContractProvider'
import { loadBooktoContract } from '../components/redux/actions';
function BlockchainProvider() {
    const dispatch = useDispatch();
    useEffect(()=>{
        const web3 = new Web3(Web3.givenProvider);
        try {
          
            const BooktoContract = new web3.eth.Contract(
             BOOKTO_CONTRACT.abi,BOOKTO_CONTRACT.address
            );
            dispatch(loadBooktoContract(BooktoContract))
         
          
          } catch (err) {
            console.log(err);
          }
      
     },[])   
   
    return (
        <div>
            
        </div>
    )
}

export default BlockchainProvider
