import { useAnimations, useGLTF } from "@react-three/drei"
import planeScene from "../assets/3d/plane.glb";
import { useEffect, useRef } from "react";

export const Plane = ({ ...props }) => {

    const ref = useRef() as any;
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, ref)

    useEffect(() => {
        if (props.isRotating) {
            actions["Take 001"]?.play();
        } else {
            actions["Take 001"]?.stop();
        }
    }, [actions, props.isRotating]);

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}