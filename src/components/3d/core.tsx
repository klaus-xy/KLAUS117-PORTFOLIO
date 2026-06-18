"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Torus } from "lucide-react";
import { useRef } from "react";

function RotatingBox(props: any) {
  const meshRef = useRef<any>(null!);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0025;
      meshRef.current.rotation.y += 0.0025;
      meshRef.current.rotation.z += 0.0025;
    }
  });
  return (
    <mesh rotation={[10, 0, 0]} ref={meshRef} {...props}>
      {/* <boxGeometry args={[2.5, 2.5, 2.5]} />/ */}
      <sphereGeometry args={[1, 32, 32]} />
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

function Core() {
  return (
    <Canvas>
      <RotatingBox />
      <ambientLight intensity={0.25} color="pink" />
      <directionalLight position={[10, 10, 5]} color="cyan" />
    </Canvas>
  );
}

export default Core;
