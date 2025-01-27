import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="description-box-navigator">
            <div className="description-box-nav">
               Description
            </div>
            <div className="description-box-nav fade">
                Reviews(122)
            </div>
        </div>
        <div className='description-box-description'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt soluta, iure praesentium perspiciatis blanditiis fuga at exercitationem commodi maiores in asperiores animi laborum facere optio ducimus nulla quasi atque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum incidunt magni ipsa velit laborum quas ipsam est accusamus sequi voluptatum ratione eos consequuntur, aut impedit! Repellendus ipsa obcaecati nulla.</p>
        </div>
      </div>
  )
}

export default DescriptionBox
