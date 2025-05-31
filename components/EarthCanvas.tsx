// components/EarthCanvas.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return <primitive object={earth.scene} scale={2.5} />;
};

const EarthCanvas = () => (
  <Canvas
    frameloop="demand"
    shadows
    dpr={[1, 2]}
    camera={{ position: [0, 0, 4], fov: 75 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={null}>
      <OrbitControls autoRotate enableZoom={false} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} />
      <Earth />
    </Suspense>
  </Canvas>
);

export default EarthCanvas;
