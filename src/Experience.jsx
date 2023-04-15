import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Lapis from './Lapis'
import Floor from './Floor'
import { useRef } from 'react'
import { HemisphereLightHelper, SpotLightHelper, PointLightHelper } from 'three'

export default function Experience() {
    //const hemisphereLightRef = useRef()
    const spotLightRef = useRef()
    //const pointLightRef = useRef()

    //useHelper(hemisphereLightRef, HemisphereLightHelper, 1)
    useHelper(spotLightRef, SpotLightHelper, 1)
    //useHelper(pointLightRef, PointLightHelper, 1)

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        //<hemisphereLight  ref={hemisphereLightRef} castShadow position={[-5, 0, 0]} intensity={2} color={'green'} />
        <spotLight  ref={spotLightRef} castShadow position={[0, 10, 0]} intensity={1.5} />
        //<pointLight  ref={pointLightRef} castShadow position={[1, 1, 1]} intensity={3} color={'yellow'} />
        //<ambientLight intensity={0.5} />
        <Lapis/>
        <Floor/>
    </>
}
