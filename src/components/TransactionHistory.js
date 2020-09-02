import React from 'react';

function TransactionHistory() {
  return (
    <div>
        <h3>Transaction History</h3>
        <ul className="list">
            <li className="plus">
                Project Income
                <span>$1000.0</span>
                <button className="delete-btn">X</button>
            </li>
            <li className="minus">
                Electricity Bill
                <span>$500.0</span>
                <button className="delete-btn">X</button>
            </li>
        </ul>
    </div>
    
  );
}

export default TransactionHistory;
