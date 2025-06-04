"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const RenderModal = ({ children, className }) => {
  return (
    <Canvas className={`w-screen h-screen -z-10 relative ${className}`}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment
        files="/hdr/kiara_1_dawn_1k.hdr"
        // background
        // preset="dawn"
      />
    </Canvas>
  );
};

export default RenderModal;
