import React, { Fragment } from "react";

const Table = ({ money, plates }) => {
  const renderPlates = (array) => {
    return array.map((_, index) => (
      <div key={index} className="empty-plate" style={{ top: -7 * index }} />
    ));
  };

  return (
    <Fragment>
      <h1 className="remaining">You have: ${money} remaining!</h1>
      <div className="table">
        <div className="stack">
          {renderPlates(Array(plates).fill(null))} {/* Render empty plates */}
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
