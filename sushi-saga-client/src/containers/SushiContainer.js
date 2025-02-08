import React, { Fragment, useState } from "react";
import Sushi from "../components/Sushi";
import MoreButton from "../components/MoreButton";

const SushiContainer = ({ sushis, eatSushi, eatenSushi }) => {
  const [index, setIndex] = useState(0);

  function showNextSushi() {
    setIndex((prevIndex) => (prevIndex + 4) % sushis.length); // Loop back to start
  }

  return (
    <Fragment>
      <div className="belt">
        {sushis.slice(index, index + 4).map((sushi) => (
          <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} eatenSushi={eatenSushi} />
        ))}
        <MoreButton showNextSushi={showNextSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
