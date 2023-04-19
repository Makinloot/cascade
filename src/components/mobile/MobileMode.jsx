import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3 } from "three";

const MobileMode = () => {
  const gltf = useLoader(GLTFLoader, "/src/assets/3d/scene.gltf");
  const position = new Vector3();
  const meshRef = useRef();

  // useFrame(({ clock }) => {
  //   // const center = new Vector3(0, -15, -30);
  //   const center = new Vector3(0, -5,-20);
  //   const { top } = document.body.getBoundingClientRect();
  //   // let angle = top / (clock.elapsedTime + 1);
  //   let angle = 1;
  //   position.set(
  //     center.x - Math.cos(angle),
  //     center.y - Math.sin(angle),
  //     center.z - Math.sin(angle)
  //   );
  //   meshRef.current.position.copy(position);
  //   // meshRef.current.rotation.x += 0.01;
  //   meshRef.current.rotation.y += 0.01;
  // });
  
  return (
    <mesh ref={meshRef} position={[-1.25, -1.84, 4.8]}>
      <ambientLight />
      <primitive object={gltf.scene} scale={6} />
    </mesh>
  );
};

export default MobileMode;
