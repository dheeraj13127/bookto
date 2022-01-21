import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import "./App.css";
import Landing from "./components/Landing/Landing";
import CreateBook from "./components/Createbook/CreateBook";
import PurchaseBook from "./components/PurchaseBook/PurchaseBook";
import BlockchainProvider from './BlockChainProvider/index'
import {UseWalletProvider} from 'use-wallet'
import MyBooks from "./components/MyBooks/MyBooks";
Amplify.configure(awsconfig);
const poolID="ap-south-1:31108f87-a613-4b5d-b264-9e45c7d09408"
Amplify.configure({
  Auth: {
      identityPoolId: poolID, 
      region: 'ap-south-1',
      // userPoolId: 'ap-south-1_VrWNdgG4R', //OPTIONAL - Amazon Cognito User Pool ID
     
  },
  Storage: {
      AWSS3: {
          bucket: 'booktobucket175249-dev',
         
      }
  }
});
function App() {
  return (
    <div>
     <UseWalletProvider chainId={4} connectors={{}}>
       <BlockchainProvider />
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path="/createBook" exact element={<CreateBook/>}/>
          <Route path="/purchaseBook/:id" exact element={<PurchaseBook/>}/>
          <Route path="/myBooks" exact element={<MyBooks/>}/>
          <Route path='/dashboard' exact element={<Dashboard />} />
          
        </Routes>
      </Router>
      </UseWalletProvider>
    </div>
  );
}

export default App;
