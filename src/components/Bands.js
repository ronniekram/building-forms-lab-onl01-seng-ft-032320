import React from 'react'

const Bands = props => {
  const bandsList = props.bands.map((band, index) => {
    return <li key={index}>{band.name}</li>
  });
  return (
    <ul>
      {bandsList}
    </ul>
  );
};

export default Bands;