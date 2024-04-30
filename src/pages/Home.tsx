// <div className='absolute top-28 left-0 right-0 z-10 flex align-center justify-center'>
//     POPUP
// </div>

import { Canvas, Euler } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { Loader } from "../components"
import { Bird, Island, Plane, Sky } from "../models"

export const Home = () => {

    const [isRotating, setIsRotating] = useState<boolean>(false)
    const [currentStage, setCurrentStage] = useState<number>(1);

    const adjustIslandForScreenSice = () => {
        let screenScale: Euler | undefined = undefined
        let screenPosition: Euler | undefined = [0, -6.5, -43]
        let rotation: Euler | undefined = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1, 1, 1]
        }
        return [screenScale, screenPosition, rotation]
    }
    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSice()

    const adjustPlaneForScreenSice = () => {
        let screenScale: Euler | undefined = undefined
        let screenPosition: Euler | undefined = undefined

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [3, 3, 3]
            screenPosition = [0, -4, -4]
        }
        return [screenScale, screenPosition]
    }
    const [planeScale, planePosition] = adjustPlaneForScreenSice()

    return (
        <section className='w-full h-screen relative'>
            <Canvas
                className={`w-full h-screen bg-transparent
                ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight color='#b1e1ff' groundColor='#000000' intensity={1} />

                    <Bird />
                    <Sky />
                    <Island
                        scale={islandScale}
                        position={islandPosition}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        planeScale={planeScale}
                        planePosition={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

