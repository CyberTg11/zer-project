import React, { useState } from 'react';
import dice1 from './img/dice1.jpeg'
import dice2 from './img/dice2.jpeg'
import dice3 from './img/dice3.jpeg'
import dice4 from './img/dice4.jpeg'
import dice5 from './img/dice5.jpeg'
import dice6 from './img/dice6.jpeg'

const FirstDice = () => {
  const [currentImage, setCurrentImage] = useState(dice1); 

  const imageArray = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
  ];

  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const randomImg = imageArray[randomIndex];
    setCurrentImage(randomImg);
  };

  return (
    <div>
      <img
        src={currentImage}
        alt="Rastgele Resim"
        style={{ cursor: 'pointer' }}
        onClick={randomImage}
      />
    </div>
  );
};

export default FirstDice;
