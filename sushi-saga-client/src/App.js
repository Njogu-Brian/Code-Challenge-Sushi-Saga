import React, { useState, useEffect } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import Wallet from "./components/Wallet";


const API = "http://localhost:3000/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(100);
  const [eatenSushi, setEatenSushi] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setSushis(data))
      .catch((error) => console.error("Error fetching sushi:", error));
  }, []);

  function eatSushi(sushi) {
    if (money >= sushi.price && !eatenSushi.includes(sushi.id)) {
      setEatenSushi([...eatenSushi, sushi.id]);
      setMoney(money - sushi.price);
    }
  }

  function addMoney(amount) {
    setMoney((prevMoney) => prevMoney + amount);
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi} eatenSushi={eatenSushi} />
      <Table money={money} plates={eatenSushi.length} />
      <Wallet addMoney={addMoney} /> {/* Include the Wallet Component */}
    </div>
  );
}

export default App;
