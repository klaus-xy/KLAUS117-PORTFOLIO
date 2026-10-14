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
  const introElapsed = useRef(0);

  useEffect(() => {
    onReady();
  }, [onReady]);

  const INTRO_DURATION = 2.4;
  const INTRO_START_Z = -1.2;

  useFrame((_, delta) => {
    const progress = scrollProgress?.get() ?? 0;

    introElapsed.current = Math.min(
      introElapsed.current + delta,
      INTRO_DURATION,
    );
    const introT = introElapsed.current / INTRO_DURATION;
    // Gentle ease-out quad — softer, less snappy than a cubic curve.
    const introEased = 1 - Math.pow(1 - introT, 2);

    groupRef.current.rotation.x += delta * (0.025 + progress * 0.15);
    groupRef.current.rotation.y += delta * (0.025 + progress * 0.15);
    groupRef.current.rotation.z += delta * (0.08 + progress * 0.25);
    groupRef.current.position.y = 1 - progress * 5;
    groupRef.current.position.x = 2 - progress * 1.5;
    groupRef.current.position.z = INTRO_START_Z * (1 - introEased);
    const scale = 0.05 + progress * 0.03;
    groupRef.current.scale.setScalar(scale);
  });

  return (
    <group ref={groupRef} position={[2, 1, -1.2]} scale={0.05}>
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
      className={`h-full w-full transition-opacity duration-700 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
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
