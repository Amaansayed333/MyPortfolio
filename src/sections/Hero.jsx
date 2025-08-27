import React, {Suspense} from "react"
import { Canvas } from "@react-three/fiber"
import Hackerroom from "../components/Hackerroom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {PerspectiveCamera} from "@react-three/drei";
import {Leva,useControls} from "leva";
import Target from "../components/Target.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Reactlogo from "../components/Reactlogo.jsx";
import Cube from "../components/Cube.jsx";
import { EffectComposer, Bloom,Select,Selection } from "@react-three/postprocessing"
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";


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

    const isSmall=useMediaQuery({minWidth:320,maxWidth:480})
    const isMobile=useMediaQuery({maxWidth:768})
    const isTablet=useMediaQuery({minWidth:768,maxWidth:1024})



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
                        <Selection>
                            <HeroCamera>
                                <Hackerroom scale={isMobile?0.3:0.35}
                                                position={isMobile?[6,-20,-80]:[0,-35,-80]}
                                                rotation={[controls.rotationX,-160,controls.rotationZ]}>

                                </Hackerroom>
                            </HeroCamera>
                        <group>
                            <Target scale={3} position={[-33,5,-20]}></Target>
                            <Reactlogo position={[22,5,0]}></Reactlogo>

                                <Select>
                                    <Cube scale={2} position={[-22,-9,-1]}></Cube>
                                </Select>

                        </group>

                        <ambientLight intensity={1}></ambientLight>
                        <directionalLight position={[0,0,5]} intensity={1} castShadow></directionalLight>
                        </Selection>
                        <EffectComposer>
                            <Bloom
                                intensity={2}           // glow strength
                                luminanceThreshold={0.1}  // what counts as "bright"
                                luminanceSmoothing={0.9}  // smooth edges
                                height={300}
                            />
                        </EffectComposer>
                    </Suspense>

                </Canvas>
            </div>
            <div className="absolute bottom-7 right-0 left-0 z-7 w-full">
                <a href="#contact" className="w-fit">
                    <Button name="LETS BUILD" containerClass="sm:w-fit w-full sm:min-w-96" isBeam></Button>
                </a>
            </div>
        </section>
    )
}

export default Hero

//scale={0.4}
//position={[0,-40,-80]}
//rotation={[controls.rotationX,-160,controls.rotationZ]}
