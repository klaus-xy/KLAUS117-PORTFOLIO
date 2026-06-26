"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";

interface CoreProps {
  lookSpeed?: number;
  maxAngle?: number;
}
function CoreMesh(props: any) {
  const meshRef = useRef<any>(null!);
  const { pointer } = useThree(); // Get normalized pointer position

  // Called every frame
  useFrame(() => {
    if (!meshRef.current) return;

    // Calculate the rotation based on the pointer position on both axis
    // (Target Rot - Current Rot) * Speed ---> New Lerped Rot(Smooth ease out Rotation)

    // Rotate the 3D mesh on the Y-axis
    meshRef.current.rotation.y +=
      (pointer.x * Math.PI - meshRef.current.rotation.y) * props.lookSpeed;
    meshRef.current.rotation.y = MathUtils.clamp(
      meshRef.current.rotation.y,
      -props.maxAngle,
      props.maxAngle,
    );

    // Rotate the 3D mesh on the X-axis
    meshRef.current.rotation.x +=
      (-pointer.y * Math.PI * 0.5 - meshRef.current.rotation.x) *
      props.lookSpeed;
    meshRef.current.rotation.x = MathUtils.clamp(
      meshRef.current.rotation.x,
      -props.maxAngle,
      props.maxAngle,
    );
  });

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      {/* <torusGeometry args={[1, 0.3, 16, 100]} /> */}
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

// ::::::: MAIN COMPONENT ::::::: //
function Core({ lookSpeed = 0.05 }: CoreProps) {
  return (
    <Canvas>
      <CoreMesh lookSpeed={lookSpeed} maxAngle={Math.PI / 4} />
      <ambientLight intensity={0.25} color="pink" />
      <directionalLight position={[10, 10, 5]} color="cyan" />
    </Canvas>
  );
}

export default Core;
