"use client";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";

function CompanionCube({ onReady }: { onReady: () => void }) {
  const groupRef = useRef<Group>(null!);
  const { scene } = useGLTF("/models/portal-companion-cube.glb");

  useEffect(() => {
    onReady();
  }, [onReady]);

  useFrame((_, delta) => {
    groupRef.current.rotation.x += delta * 0.025;
    groupRef.current.rotation.y += delta * 0.025;
    groupRef.current.rotation.z += delta * 0.08;
  });

  return (
    <group ref={groupRef} position={[2, 1, 0]}>
      <primitive object={scene} scale={0.05} />
    </group>
  );
}
useGLTF.preload("/models/portal-companion-cube.glb");

const AstroKlaus = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`h-full w-full transition-all duration-5000 ease-out ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <Canvas camera={{ position: [0, 0, 5] }} className="">
        <ambientLight intensity={0.15} color="white" />
        <directionalLight intensity={5} position={[5, 10, 5]} color="white" />
        <CompanionCube onReady={() => setLoaded(true)} />
      </Canvas>
    </div>
  );
};

export default AstroKlaus;
