import React, {Component} from 'react';
import TuneDetail from './TuneDetail.js';

const TuneSelector = (props) => {
  const tuneCollection = props.tunes.map( (tune, index) => {
  return (
    <TuneDetail
      key={index}
      title={tune["im:name"].lable}
      artist={tune["im:artist"].lable}>
    </TuneDetail>
  );
});

return(
  <div className="tunes-collection">
    <ol>
    {tuneCollection}
    </ol>
  </div>
  )
}

export default TuneDetail;
