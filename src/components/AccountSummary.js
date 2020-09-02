import React from 'react';

function AccountSummary() {
  return (
    <div className="inc-exp-container ">
        <div className="money.plus">
            <h4>Income</h4>
            <h2>$0.00</h2>
        </div>
        <div className="money.minus">
            <h4>Expenses</h4>
            <h2>$0.00</h2>
        </div>  
    </div>
    
  );
}

export default AccountSummary;
