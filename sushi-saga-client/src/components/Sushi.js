import React from "react";

const Sushi = ({ sushi, eatSushi, eatenSushi }) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(sushi)}>
        {eatenSushi.includes(sushi.id) ? null : <img src={sushi.img_url} alt={sushi.name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
