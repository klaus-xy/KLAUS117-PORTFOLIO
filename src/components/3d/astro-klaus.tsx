"use client";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { animate, useMotionValue, type MotionValue } from "motion/react";
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

  // Poke physics: the cube sits in a spring field centred on its resting
  // depth. A poke adds velocity (via motion's own spring solver) that pulls
  // it back toward zero, like it's tethered by a soft magnetic field rather
  // than snapping back rigidly. getVelocity() lets overlapping pokes combine
  // naturally instead of each one resetting the motion.
  const pokeZ = useMotionValue(0);
  const POKE_STIFFNESS = 25;
  const POKE_DAMPING = 2;
  const POKE_STRENGTH = 6;

  useEffect(() => {
    onReady();
  }, [onReady]);

  const INTRO_DURATION = 2.4;
  const INTRO_START_Z = -1.2;

  const handlePoke = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    // Camera is static, looking straight down -Z, so "inward" is always
    // -Z regardless of where on the cube you click.
    animate(pokeZ, 0, {
      type: "spring",
      stiffness: POKE_STIFFNESS,
      damping: POKE_DAMPING,
      velocity: pokeZ.getVelocity() - POKE_STRENGTH,
    });
  };

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
    groupRef.current.position.z =
      INTRO_START_Z * (1 - introEased) + pokeZ.get();

    const scale = 0.05 + progress * 0.03;
    groupRef.current.scale.setScalar(scale);
  });

  return (
    <group
      ref={groupRef}
      position={[2, 1, -1.2]}
      scale={0.05}
      onClick={handlePoke}
    >
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
