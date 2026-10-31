"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function MemoryCard({ position, delay, rotation }: { position: [number, number, number]; delay: number; rotation: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.2;
      meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.1;
      meshRef.current.rotation.y = rotation[1] + Math.cos(state.clock.elapsedTime * 0.2 + delay) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <boxGeometry args={[1, 1.4, 0.05]} />
        <meshStandardMaterial
          color="#ec4899"
          transparent
          opacity={0.4}
          metalness={0.6}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingMemories() {
  const memoryData = [
    { position: [-2, 0, 0] as [number, number, number], delay: 0, rotation: [0, 0, 0] as [number, number, number] },
    { position: [0, 1, -1] as [number, number, number], delay: 1, rotation: [0.2, 0, 0] as [number, number, number] },
    { position: [2, -0.5, 0] as [number, number, number], delay: 2, rotation: [-0.2, 0.1, 0] as [number, number, number] },
    { position: [-1, -1, 1] as [number, number, number], delay: 3, rotation: [0, -0.1, 0.1] as [number, number, number] },
    { position: [1, 0.5, -1] as [number, number, number], delay: 4, rotation: [0.1, 0.2, 0] as [number, number, number] },
  ];

  const light1Position: [number, number, number] = [5, 5, 5];
  const light2Position: [number, number, number] = [-5, -5, 5];

  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        
        <ambientLight intensity={0.6} />
        <pointLight position={light1Position} intensity={0.8} color="#8b5cf6" />
        <pointLight position={light2Position} intensity={0.5} color="#ec4899" />
        
        <group>
          {memoryData.map((memory, i) => (
            <MemoryCard key={i} {...memory} />
          ))}
        </group>
      </Canvas>
    </div>
  );
}
