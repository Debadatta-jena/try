"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const particlePositions: [number, number, number][] = Array.from(
  { length: 50 },
  (_, i) => {
    const seed = i * 137.5;
    return [
      ((seed * 17 + 3) % 1000 - 500) / 100,
      ((seed * 23 + 7) % 1000 - 500) / 100,
      ((seed * 31 + 11) % 1000 - 500) / 100,
    ] as [number, number, number];
  }
);

function Particle({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshStandardMaterial
        color="#ffffff"
        transparent
        opacity={0.6}
        emissive="#ffffff"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <group>
      {particlePositions.map((pos, i) => (
        <Particle key={i} position={pos} />
      ))}
    </group>
  );
}
