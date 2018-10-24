import React from 'react';

const Quote = ({quote}) =>{
  return (
    <div className="temp grow-max flex col padding shadow" id="quote-box" >
      <div className="quote margin">
        <p id='text'><i>[icon]</i> {quote.quote}</p>
      </div>
      <div className="author margin">
        <span id='author'>- {quote.author}</span>
      </div>
    </div>
  )
}

export default Quote;
