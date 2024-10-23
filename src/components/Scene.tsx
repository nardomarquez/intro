"use client";

import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  MeshTransmissionMaterial,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";
import { LayerMaterial, Depth, Noise, Color } from "lamina";
import { useRef, useMemo } from "react";

export default function Scene() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        pointerEvents: "none",
        background: "#d0d3e2",
        zIndex: -1,
      }}
    >
      <Model />
      <PerspectiveCamera position={[0, 0, 100]} makeDefault />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment resolution={64}>
        <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
        <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
        <BackgroundSphere />
      </Environment>
    </Canvas>
  );
}

const Striplight = ({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: [number, number, number];
}) => (
  <mesh position={position} scale={scale}>
    <boxGeometry />
    <meshBasicMaterial color="white" />
  </mesh>
);

const BackgroundSphere = () => (
  <mesh scale={100}>
    <sphereGeometry args={[1, 64, 64]} />
    <LayerMaterial side={THREE.BackSide}>
      <Color color="blue" alpha={1} mode="normal" />
      <Depth
        colorA="#00ffff"
        colorB="#ff8f00"
        alpha={0.5}
        mode="normal"
        near={0}
        far={300}
        origin={[100, 100, 100]}
      />
      <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
    </LayerMaterial>
  </mesh>
);

function Model() {
  const materialProps = useMemo(
    () => ({
      thickness: 0.2,
      metalness: 0.925,
      roughness: 0,
      transmission: 1,
      ior: 1.2,
      chromaticAberration: 0.02,
      backside: true,
    }),
    []
  );

  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null);

  useFrame((time) => {
    if (torus.current) {
      torus.current.rotation.x = -Math.PI / 12;
      torus.current.rotation.y = time.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group scale={viewport.width / 5}>
      <mesh ref={torus}>
        <torusKnotGeometry args={[1, 0.25, 256, 24, 2, 3]} />
        <MeshTransmissionMaterial color="white" {...materialProps} />
      </mesh>
    </group>
  );
}
