import { useState } from 'react';

const useBallControls = () => {
  const [color, setColor] = useState('#0077ff');
  const [speed, setSpeed] = useState(0.05);
  const [isAnimating, setIsAnimating] = useState(true);
  const [soundOn, setSoundOn] = useState(false);

  const changeColor = (newColor: string) => setColor(newColor);
  const handleSpeedChange = (newSpeed: number) => setSpeed(newSpeed);
  const toggleAnimation = () => setIsAnimating(prev => !prev);
  const toggleSound = () => setSoundOn(prev => !prev);

  return {
    color,
    speed,
    isAnimating,
    soundOn,
    changeColor,
    handleSpeedChange,
    toggleAnimation,
    toggleSound,
  };
};

export default useBallControls;
