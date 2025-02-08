import React, { useState } from "react";

const Wallet = ({ addMoney }) => {
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const numAmount = parseInt(amount, 10);
    if (!isNaN(numAmount) && numAmount > 0) {
      addMoney(numAmount);
      setAmount("");
    }
  }

  return (
    <div className="wallet">
      <h3>Add More Money</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Money</button>
      </form>
    </div>
  );
};

export default Wallet;
