import { useGLTF } from "@react-three/drei"
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from "three";

export const Sky = ({ ...props }) => {

    const sky = useGLTF(skyScene)
    const skyRef = useRef() as React.RefObject<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>;

    useFrame((_, delta) => {
        if (props.isRotating) {
            (skyRef && "current" in skyRef && skyRef.current) && (skyRef.current.rotation.y += 0.25 * delta);
            // Adjust the rotation speed as needed
        }
    });

    return (
        <mesh {...props} ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}
