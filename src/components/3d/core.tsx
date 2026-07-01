"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { MathUtils } from "three";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

interface CoreProps {
  lookSpeed?: number;
  maxAngle?: number;
  neutralY?: number; // 0 = top of screen, 0.5 = center, 1 = bottom
}
function CoreMesh(props: any) {
  const meshRef = useRef<any>(null!);
  // const { pointer } = useThree(); // Get normalized pointer position
  const pointer = useRef({ x: 0, y: 0 });
  const { scene } = useGLTF("/models/destiny-ghost.glb");

  useGLTF.preload("/models/destiny-ghost.glb");

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
  useFrame(() => {
    if (!meshRef.current) return;

    // Calculate the rotation based on the pointer position on both axis
    // (Target Rot - Current Rot) * Speed ---> New Lerped Rot(Smooth ease out Rotation)

    // Rotate the 3D mesh on the Y-axis
    meshRef.current.rotation.y +=
      (pointer.current.x * Math.PI - meshRef.current.rotation.y) *
      props.lookSpeed;
    meshRef.current.rotation.y = MathUtils.clamp(
      meshRef.current.rotation.y,
      -props.maxAngle,
      props.maxAngle,
    );

    // Rotate the 3D mesh on the X-axis
    meshRef.current.rotation.x +=
      (-pointer.current.y * Math.PI * 0.5 - meshRef.current.rotation.x) *
      props.lookSpeed;
    meshRef.current.rotation.x = MathUtils.clamp(
      meshRef.current.rotation.x,
      -props.maxAngle,
      props.maxAngle,
    );
  });

  return (
    <primitive ref={meshRef} object={scene} scale={4} />
    // <mesh ref={meshRef} {...props}>
    //   <boxGeometry args={[3, 3, 3]} />
    //   {/* <torusGeometry args={[1, 0.3, 16, 100]} /> */}
    //   <meshStandardMaterial color="white" />
    // </mesh>
  );
}

// ::::::: MAIN COMPONENT ::::::: //
function Core({ lookSpeed = 0.01, neutralY = 0.15 }: CoreProps) {
  return (
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
        maxAngle={Math.PI / 6}
        neutralY={neutralY}
      />
      <ambientLight intensity={0.5} color="lime" />
      <directionalLight intensity={5} position={[10, 10, 5]} color="white" />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

export default Core;
