import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Lapis() {
    const PATH = "/static/textures/lapis/"
    
    const props = useTexture({
        map: PATH + "color.jpg",
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'occ.jpg',
        displacementMap: PATH + "disp.png"
    })

    return (
        <mesh castShadow={true} rotation-y={Math.PI / 6} scale={0.5}>
            <sphereGeometry />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}