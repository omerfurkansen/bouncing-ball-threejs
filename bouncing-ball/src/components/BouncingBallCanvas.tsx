import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import BouncingBall from './BouncingBall';
import Ground from './Ground';
import Controls from './Controls';
import useBallControls from '../hooks/useBallControls';
import styles from '../styles/BouncingBallCanvas.module.css';

const BouncingBallCanvas: React.FC = () => {
  const {
    color,
    speed,
    isAnimating,
    soundOn,
    changeColor,
    handleSpeedChange,
    toggleAnimation,
    toggleSound,
  } = useBallControls();

  return (
    <div className={styles['canvas-wrapper']}>
      <Canvas className={styles['canvas']} camera={{ position: [0, 1, 10], fov: 50 }} shadows>
        <Sky distance={50} sunPosition={[0, 10, 0]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <BouncingBall color={color} speed={speed} soundOn={soundOn} isAnimating={isAnimating} />
        <Ground />
      </Canvas>
      <Controls
        color={color}
        onColorChange={changeColor}
        speed={speed}
        onSpeedChange={handleSpeedChange}
        isAnimating={isAnimating}
        onToggleAnimation={toggleAnimation}
        soundOn={soundOn}
        onToggleSound={toggleSound}
      />
    </div>
  );
};

export default BouncingBallCanvas;
