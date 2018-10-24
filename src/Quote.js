import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Quote = ({ quote }) => {
  return (
    <div className="temp grow-max flex col padding shadow" id="quote-box">
      <div className="quote margin">
        <p id="text" className="f-24">
          <FontAwesomeIcon icon="quote-left" /> {quote.quote}
        </p>
      </div>
      <div className="author margin">
        <span id="author">- {quote.author}</span>
      </div>
    </div>
  );
};

export default Quote;
