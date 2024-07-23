import React from 'react';


const title = 'Our clientbase extends to different parts of the world';

const desc = "You can buy products from us from anywhere in the world";


const Locations = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>

        {/* the main content  */}
        <div className='section-wrapper'>
        </div>
      </div>
    </div>
  )
}

export default Locations
