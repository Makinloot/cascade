import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const MobileBackground = () => {

  const bgMesh = useRef()

  useFrame(() => {
    bgMesh.current.rotation.y += 0.007
  })

  return (
    <>
      <mesh ref={bgMesh} position={[0, 0, -50]}>
        <ambientLight />
        <boxGeometry args={[28, 60, .001]}  />
      </mesh>
    </>
  )
}

export default MobileBackground