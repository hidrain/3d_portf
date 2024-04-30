import { useGLTF } from "@react-three/drei"
import planeScene from "../assets/3d/plane.glb";


export const Plane = ({ ...props }) => {

    const { scene } = useGLTF(planeScene)

    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}