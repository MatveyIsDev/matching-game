import React from 'react';
import {BackContainer, Cube} from './styles';

export interface CubeProps {
  size: number;
  position: {top: number; left: number};
  speed: number;
}

const Background: React.FC = () => {
  const [squares, setSquares] = React.useState<CubeProps[]>([]);
  React.useEffect(() => {
    const newSquares = Array.from({length: 25}).map(() => ({
      size: Math.floor(Math.random() * 26) + 5,
      position: {
        top: Math.random() * 90,
        left: Math.random() * 90,
      },
      speed: Math.floor(Math.random() * 16) + 5,
    }));
    setSquares(newSquares);
    console.log(newSquares);
  }, []);
  return (
    <BackContainer>
      {squares.map((cube, index) => (
        <Cube key={index} {...cube} />
      ))}
    </BackContainer>
  );
};

export default Background;
