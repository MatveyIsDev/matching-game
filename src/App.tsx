import React from 'react';
import GamePage from './pages/GamePage';
import {Route, Routes} from 'react-router-dom';
import {InitialPage} from './pages/InitialPage';
import {ResultPage} from './pages/ResultPage';
import {GameContainer, WrapperForPage} from './GeneralStyles';
import Background from './components/Background';

export const App = () => {
  return (
    <GameContainer>
      <Background />
      <WrapperForPage>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </WrapperForPage>
    </GameContainer>
  );
};
