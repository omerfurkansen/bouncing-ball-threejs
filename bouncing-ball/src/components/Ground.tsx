import React from 'react';
import { Plane } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';
import { useLoader } from '@react-three/fiber';
import GroundTexture from '../assets/images/ground.png';

const Ground: React.FC = () => {
  const groundTexture = useLoader(TextureLoader, GroundTexture);
  groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(4, 4);

  return (
    <Plane position={[0, -1, 0]} args={[10, 14]} receiveShadow rotation-x={-Math.PI / 2}>
      <meshStandardMaterial map={groundTexture} roughness={1} metalness={0} />
    </Plane>
  );
}

export default Ground;