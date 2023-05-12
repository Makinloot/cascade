import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import MobileMode from "./MobileMode"
import './Mobile.scss'
import { Link } from 'react-router-dom'
import MobileBackground from './MobileBackground'
import mp3 from '../../../public/ramzi.mp3'
const Mobile = () => {

  return (
    <div className="mobile flex-row">
      <div className="mobile-object">
        <Canvas>
          <Suspense>
            <MobileMode />
            {/* <MobileBackground /> */}
          </Suspense>
        </Canvas>
      </div>
      <div className='mobile-details flex-col'>
        <Link to="https://soundcloud.com/ramzi911/cascade-selector-series-13" target='_blank'>
          Cascade Selector Series 13
        </Link>
        <span>best months podcast by techno artist ramzi b2b iv</span>
        <audio controls>
          <source src={mp3} type='audio/mpeg' />
        </audio>
      </div>
    </div>
  )
}

export default Mobile