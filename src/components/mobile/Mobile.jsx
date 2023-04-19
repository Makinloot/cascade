import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import MobileMode from "./MobileMode"
import './Mobile.scss'

const Mobile = () => {

  // const gltf = useLoader(GLTFLoader, '/src/assets/3d/scene.gltf');
  // const meshRef = useRef()

  // useFrame(({ clock }) => {
  //   meshRef.current.rotation.x += clock * 1
  // })

  return (
    <div className="mobile flex-row">
      <div className="mobile-object">
        <Canvas>
          <Suspense>
            <MobileMode />
          </Suspense>
        </Canvas>
      </div>
      {/* <div>s</div> */}
    </div>
  )
}

export default Mobile