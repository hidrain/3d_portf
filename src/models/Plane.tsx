import { useGLTF } from "@react-three/drei"
import planeScene from "../assets/3d/plane.glb";

type PlaneProps = {
    planeScale: number[],
    planePosition: number[],
    isRotating: boolean,
    rotation: number[],
}

export const Plane = ({ planeScale, planePosition, isRotating, rotation }: PlaneProps) => {

    const { scene, animation } = useGLTF(planeScene)

    return (
        <mesh>
            <primitive object={scene} />
        </mesh>
    )
}