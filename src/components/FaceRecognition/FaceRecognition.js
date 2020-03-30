import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  const imageBoxes = boxes.map(box => (
    <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
  ));
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {imageBoxes}
      </div>
    </div>
  );
}

export default FaceRecognition;