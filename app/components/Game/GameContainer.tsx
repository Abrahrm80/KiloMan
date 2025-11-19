'use client';

import React, { useState } from 'react';
import GameCanvas from './GameCanvas';
import UIOverlay from './UIOverlay';
import { GameStatus } from './types';

const GameContainer: React.FC = () => {
  const [gameState, setGameState] = useState<GameStatus>('start');
  const [jumpModifier, setJumpModifier] = useState<number>(1.0);

  const handleRestart = () => {
    setGameState('playing');
  };

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <GameCanvas 
        gameState={gameState} 
        setGameState={setGameState} 
        jumpModifier={jumpModifier} 
      />
      <UIOverlay 
        gameState={gameState} 
        jumpModifier={jumpModifier} 
        setJumpModifier={setJumpModifier}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default GameContainer;