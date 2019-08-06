import React from 'react';

const TuneDetail = (props) => {
  return (
    <div className="tune">
      <li> {props.title} {props.artist}</li>
    </div>
  )
}

export default TuneDetail;
// <p>C:{country.capital}</p>
// <p>Population: {country.population}</p>

// <div>
//   <h3> {tune.name} </h3>
// </div>
