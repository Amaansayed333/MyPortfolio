import React, {Suspense} from "react"
import { Canvas } from "@react-three/fiber"
import Hackerroom from "../components/Hackerroom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {PerspectiveCamera} from "@react-three/drei";
import {Leva,useControls} from "leva";
import Target from "../components/Target.jsx";


const Hero = () => {
    const controls=useControls('Hackerroom',{
        positionX:{
            value:2,
            min:-50,
            max:50
        },
        positionY:{
            value:2,
            min:-50,
            max:50
        },
        positionZ:{
            value:2,
            min:-100,
            max:100
        },
        rotationX:{
            value:0,
            min:-10,
            max:10
        },
        rotationY:{
            value:0,
            min:-10,
            max:10
        },
        rotationZ:{
            value:0,
            min:-10,
            max:10
        },
        scale:{
            value:0,
            min:-50,
            max:50
        }
    })

    const controls2=useControls('Target',{
        positionX:{
            value:0,
            min:-350,
            max:350
        },
        positionY:{
            value:0,
            min:-350,
            max:350
        },
        positionZ:{
            value:0,
            min:-350,
            max:350
        },
        rotationX:{
            value:0,
            min:-50,
            max:50
        },
        rotationY:{
            value:0,
            min:-50,
            max:50
        },
        rotationZ:{
            value:0,
            min:-50,
            max:50
        }
    })

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
                <p className="text-white font-bold sm:text-3xl text-2xl text-center">
                    Hi I AM AMAAN <span className="waving-hand">😃👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building What You Desire</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Leva></Leva>
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader></CanvasLoader>}>
                        <PerspectiveCamera makeDefault position={[0,0,30]}></PerspectiveCamera>
                        <Hackerroom scale={0.4}
                                    position={[0,-40,-80]}
                                    rotation={[controls.rotationX,-160,controls.rotationZ]}>

                        </Hackerroom>
                        <group>


                        </group>

                        <ambientLight intensity={1}></ambientLight>
                        <directionalLight position={[0,0,5]} intensity={1} castShadow></directionalLight>
                    </Suspense>

                </Canvas>
            </div>
        </section>
    )
}

export default Hero
