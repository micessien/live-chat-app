import React from 'react';
import { FaWeixin } from 'react-icons/fa';

function LandingPage() {
  return (
    <>
      <div className="app">
        <FaWeixin style={{ fontSize: '4rem' }} />
        <br />
        <span style={{ fontSize: '2rem' }}>Let's Start Enjoy Life!</span>
      </div>
      <div style={{ float: 'right' }}>Thanks For John Ahn</div>
    </>
  );
}

export default LandingPage;
