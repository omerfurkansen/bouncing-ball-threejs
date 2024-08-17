import React, { useRef } from 'react';
import { Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import BounceSound from '../assets/audio/bounce.mp3';

interface BouncingBallProps {
  color: string;
  speed: number;
  soundOn: boolean;
  isAnimating: boolean;
}

const BouncingBall: React.FC<BouncingBallProps> = ({ color, speed, soundOn, isAnimating }) => {
  const ballRef = useRef<THREE.Mesh>(null);
  const [direction, setDirection] = React.useState(new THREE.Vector3(1, 0, 0));
  const audioRef = useRef<HTMLAudioElement | null>(new Audio(BounceSound));

  useFrame(() => {
    if (ballRef.current && isAnimating) {
      const ball = ballRef.current;
      ball.position.add(direction.clone().multiplyScalar(speed));

      // Check for collision with the horizontal boundaries
      if (Math.abs(ball.position.x) > 5) {
        setDirection(direction.clone().multiplyScalar(-1));
        ball.position.x = Math.sign(ball.position.x) * 5;

        // Play sound on bounce
        if (soundOn && audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(error => console.error('Error playing sound:', error));
        }
      }
    }
  });

  return (
    <Sphere ref={ballRef} args={[1, 32, 32]} castShadow receiveShadow>
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.2} />
    </Sphere>
  );
};

export default BouncingBall;
