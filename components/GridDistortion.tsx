"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Plane } from "@react-three/drei";

export default function GridDistortion() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={1} />
        <Plane args={[10, 10, 64, 64]}>
          <MeshDistortMaterial
            color="#ffffff"
            speed={2}
            distort={0.3}
          />
        </Plane>
      </Canvas>
    </div>
  );
}