import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const MobileMode = () => {
  const gltf = useLoader(GLTFLoader, 'scene.gltf');
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.007
  })

  return (
    <>
      <mesh ref={meshRef} position={[-1.25, -38, -65]}>
        <ambientLight intensity={3} />
        <primitive object={gltf.scene} scale={0.8} />
      </mesh>
    </>
  );
};

export default MobileMode;
