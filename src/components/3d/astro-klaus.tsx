"use client";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function CompanionCube() {
  const groupRef = useRef<Group>(null!);
  const { scene } = useGLTF("/models/portal-companion-cube.glb");

  useFrame((_, delta) => {
    groupRef.current.rotation.x += delta * 0.025;
    groupRef.current.rotation.y += delta * 0.025;
    groupRef.current.rotation.z += delta * 0.08;
  });

  return (
    <group ref={groupRef} position={[2.25, 1, 0]}>
      <primitive object={scene} scale={0.025} />
      <ambientLight intensity={0.15} color="white" />
      <directionalLight intensity={5} position={[10, 10, 5]} color="white" />
    </group>
  );
}
useGLTF.preload("/models/portal-companion-cube.glb");

const AstroKlaus = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} className="">
      <CompanionCube />
    </Canvas>
  );
};

export default AstroKlaus;
