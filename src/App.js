import React from 'react';
import Header from './components/Header'
import './App.css';
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TransactionHistory';
import AddTrasaction from './components/AddTransaction';

function App() {
  return (
    <div className="view">
     <Header/>
     <div className="container">
      <Balance/>
      <AccountSummary/>
      <TransactionHistory/>
      <AddTrasaction/>
     </div>
     
    </div>
  );
}

export default App;
