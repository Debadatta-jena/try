"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function FloatingFrame({ position, delay }: { position: [number, number, number]; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1.2, 1.6, 0.1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const framePositions: [number, number, number][] = [
    [-2, 1, 0],
    [2, -0.5, -1],
    [0, 2, -2],
    [-1.5, -1.5, 1],
    [1.5, 0.5, 2],
  ];

  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <group>
          {framePositions.map((pos, index) => (
            <FloatingFrame key={index} position={pos} delay={index} />
          ))}
        </group>
      </Canvas>
    </div>
  );
}
