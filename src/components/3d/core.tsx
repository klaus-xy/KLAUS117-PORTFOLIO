"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { MathUtils } from "three";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { max } from "three/src/nodes/math/MathNode.js";

interface CoreProps {
  lookSpeed?: number;
  maxAngleX?: number;
  maxAngleY?: number;
  neutralY?: number; // 0 = top of screen, 0.5 = center, 1 = bottom
}
function CoreMesh(props: any) {
  const meshRef = useRef<any>(null!);
  // const { pointer } = useThree(); // Get normalized pointer position
  const pointer = useRef({ x: 0, y: 0 });
  const { scene } = useGLTF("/models/destiny-ghost.glb");
  const introElapsed = useRef(0);

  useGLTF.preload("/models/destiny-ghost.glb");

  const INTRO_DURATION = 1;
  const INTRO_START_Z = -1;

  useEffect(() => {
    props.onReady?.();
  }, [props.onReady]);

  useEffect(() => {
    const ny = props.neutralY ?? 0.5;
    const onMouseMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1; // Normalized to [-1, 1] --> Multiplying by 2 stretches to [0, 2], then subtracting 1 shifts to [-1, 1]
      // Shift neutral point to y=0 when cursor is at neutralY fraction of screen height
      pointer.current.y = 2 * (ny - e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [props.neutralY]);

  // Called every frame
  useFrame((_, delta) => {
    if (!meshRef.current) return;

    introElapsed.current = Math.min(
      introElapsed.current + delta,
      INTRO_DURATION,
    );
    const introT = introElapsed.current / INTRO_DURATION;
    // Gentle ease-out quad — a soft, close-distance reveal rather than a snap.
    const introEased = 1 - Math.pow(1 - introT, 2);
    meshRef.current.position.z = INTRO_START_Z * (1 - introEased);

    // Calculate the rotation based on the pointer position on both axis
    // (Target Rot - Current Rot) * Speed ---> New Lerped Rot(Smooth ease out Rotation)

    // Rotate the 3D mesh on the Y-axis
    meshRef.current.rotation.y +=
      (pointer.current.x * Math.PI - meshRef.current.rotation.y) *
      props.lookSpeed;
    meshRef.current.rotation.y = MathUtils.clamp(
      meshRef.current.rotation.y,
      -props.maxAngleY,
      props.maxAngleY,
    );

    // Rotate the 3D mesh on the X-axis
    meshRef.current.rotation.x +=
      (-pointer.current.y * Math.PI * 0.5 - meshRef.current.rotation.x) *
      props.lookSpeed;
    meshRef.current.rotation.x = MathUtils.clamp(
      meshRef.current.rotation.x,
      -props.maxAngleX,
      props.maxAngleX,
    );
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={4}
      position={[0, 0, INTRO_START_Z]}
    />
    // <mesh ref={meshRef} {...props}>
    //   <boxGeometry args={[3, 3, 3]} />
    //   {/* <torusGeometry args={[1, 0.3, 16, 100]} /> */}
    //   <meshStandardMaterial color="white" />
    // </mesh>
  );
}

// ::::::: MAIN COMPONENT ::::::: //
function Core({
  lookSpeed = 0.01,
  neutralY = 0.15,
  maxAngleX = Math.PI / 6,
  maxAngleY = Math.PI / 6,
}: CoreProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`h-full w-full transition-opacity duration-700 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Canvas
      // style={{
      //   position: "fixed",
      //   top: 0,
      //   inset: 0,
      //   width: "100vw",
      //   height: "100vh",
      //   zIndex: -1,
      // }}
      // camera={{ position: [0, 0, 0] }}
      >
        <CoreMesh
          lookSpeed={lookSpeed}
          maxAngleX={maxAngleX}
          maxAngleY={maxAngleY}
          neutralY={neutralY}
          onReady={() => setLoaded(true)}
        />
        <ambientLight intensity={0.5} color="lime" />
        <directionalLight intensity={5} position={[10, 10, 5]} color="white" />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

export default Core;
