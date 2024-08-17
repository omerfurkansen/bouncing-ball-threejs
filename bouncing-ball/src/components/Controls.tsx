import React from 'react';
import { MuteIcon, UnmuteIcon, PlayIcon, PauseIcon } from '../assets';

import styles from '../styles/Controls.module.css';

interface ControlsProps {
  color: string;
  onColorChange: (color: string) => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
  isAnimating: boolean;
  onToggleAnimation: () => void;
  soundOn: boolean;
  onToggleSound: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  color,
  onColorChange,
  speed,
  onSpeedChange,
  isAnimating,
  onToggleAnimation,
  soundOn,
  onToggleSound,
}) => {
  const colors = ['#0077ff', '#ff0000', '#00ff00', '#ffff00'];

  return (
    <div className={styles['controls-container']}>
      <div className={styles['controls-item']}>
        <span>Ball Color:</span>
        {colors.map((c) => (
          <div
            key={c}
            className={styles['color-option']}
            style={{
              backgroundColor: c,
              borderColor: c === color ? '#333' : 'transparent',
            }}
            onClick={() => onColorChange(c)}
          />
        ))}
      </div>
      <div className={styles['controls-item']}>
        <span>Ball Speed:</span>
        <input
          type="range"
          min="0.01"
          max="0.2"
          step="0.01"
          value={speed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
        />
      </div>
      <div className={styles['controls-item']}>
        <span>Animation / Sound:</span>
        <button onClick={onToggleAnimation} className={styles['icon-button']}>
          {isAnimating ? <PlayIcon /> : <PauseIcon />}
        </button>
        <button onClick={onToggleSound} className={styles['icon-button']}>
          {soundOn ? <UnmuteIcon /> : <MuteIcon />}
        </button>
      </div>
    </div >
  );
};

export default Controls;
