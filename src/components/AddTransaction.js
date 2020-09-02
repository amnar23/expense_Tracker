import React from 'react';

function AddTrasaction() {
  return (
    <div>
        <h3>Add New Transaction</h3>
        <form>
            <div className="form-control">
            <label htmlFor="description">Description</label>
            <input type="text" placeholder="Detail of Transaction"></input>
            <label htmlFor="transactionamount">Transaction Amount<br/>(positive-income,negative-expense)</label>
            <input type="number" placeholder="Dollar Value of Transaction"></input>
            </div>
            <button className="btn">Add Transaction</button>
        </form>  
    </div>
    );
}

export default AddTrasaction;
