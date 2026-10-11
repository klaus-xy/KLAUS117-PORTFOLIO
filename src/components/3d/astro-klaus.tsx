"use client";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";

function CompanionCube({
  onReady,
  scrollProgress,
}: {
  onReady: () => void;
  scrollProgress?: MotionValue<number>;
}) {
  const groupRef = useRef<Group>(null!);
  const { scene } = useGLTF("/models/portal-companion-cube.glb");

  useEffect(() => {
    onReady();
  }, [onReady]);

  useFrame((_, delta) => {
    const progress = scrollProgress?.get() ?? 0;
    groupRef.current.rotation.x += delta * (0.025 + progress * 0.15);
    groupRef.current.rotation.y += delta * (0.025 + progress * 0.15);
    groupRef.current.rotation.z += delta * (0.08 + progress * 0.25);
    groupRef.current.position.y = 1 - progress * 5;
    groupRef.current.position.x = 2 - progress * 1.5;
    const scale = 0.05 + progress * 0.03;
    groupRef.current.scale.setScalar(scale);
  });

  return (
    <group ref={groupRef} position={[2, 1, 0]} scale={0.05}>
      <primitive object={scene} />
    </group>
  );
}
useGLTF.preload("/models/portal-companion-cube.glb");

interface AstroKlausProps {
  scrollProgress?: MotionValue<number>;
}

const AstroKlaus = ({ scrollProgress }: AstroKlausProps) => {
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
        <CompanionCube
          onReady={() => setLoaded(true)}
          scrollProgress={scrollProgress}
        />
      </Canvas>
    </div>
  );
};

export default AstroKlaus;
