import React from 'react';

const Links = () => {
  return (
    <div className="flex row space-between grow-max ">
      <div className='flex row'>
        <a href="twitter.com/intent/tweet" className="button margin" id="tweet-quote">TWEET</a>
        <a href="/" className="button margin">POST</a>
      </div>
      <div className="">
        <a href='/' className="button margin" id="new-quote">New Quote</a>
      </div>

    </div>
  )
}
export default Links;
