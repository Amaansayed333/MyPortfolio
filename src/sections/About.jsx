import React from "react"
import Globe from "react-globe.gl"
import Model from "/src/components/Clock.jsx"
import {Canvas} from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import {useMediaQuery} from "react-responsive"
import Button from "../components/Button.jsx"
import {PerspectiveCamera} from "@react-three/drei";
import BlueGlowingDotGlobe from "../components/Globe.jsx";


const About=()=>{

    const isMobile=useMediaQuery({maxWidth:768})


    return(
        <section className='c-space my-20'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-8 w-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container animated-border'>
                        <img src='/assets/grid12.png' className='h-[600px] sm:h-[276px] sm:w-[276px] object-cover w-fit
                        rounded-2xl border border-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.7)] mx-6'/>
                        <div className='grid-headtext'>Hi, I'm Amaan</div>
                        <div className='grid-subtext'>Been building effective and eye catching websites along with 3D and live effects since last 2.5years</div>

                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container animated-border'>
                        <img src='/assets/grid2.png' className=' h-[600px] sm:h-[276px] sm:w-[276px] object-cover w-full'/>
                        <p className='grid-headtext'>TECH STACK</p>
                        <p className='grid-subtext'>I have pretty good experience in building websites using javascript/typescript with a focus on react along with 3D environment space.</p>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-2'>
                    <div className='grid-container animated-border'>
                        <p className='grid-headtext'>I believe in crafting smooth user experiences powered by clean code.</p>
                        <p className='grid-subtext'>Diving deeper into Next.js,Three.js, WebGL, and Generative AI to create
                            more interactive experiences.</p>
                        <Button name='contact me' isBeam containerClass='w-full'></Button>
                    </div>

                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container animated-border'>
                        <div className='rounded-3xl w-full h-fit sm:h-[326px] flex-col justify-center items-center'>
                            <Canvas className='w-full h-full'>
                                <pointLight position={[0, 2, 0]} intensity={100} color={"#30cc33"} />
                                <pointLight position={[0, -1, 0]} intensity={150} color={"#2dd834"} />
                                <ambientLight intensity={0.8} position={[0,2,2]} />
                                <Model scale={isMobile?0.5:2} position={[0,-1,0.4]}/>

                                {/* Bloom Effect */}
                                <EffectComposer>
                                    <Bloom
                                        intensity={3} // glow strength
                                        luminanceThreshold={0.2} // lower = more glow
                                        luminanceSmoothing={0.9}
                                        height={300}
                                    />
                                </EffectComposer>


                            </Canvas>

                            <p className='grid-headtext'>Flexible Timings And Deadline Driven</p>
                            <p className='grid-subtext'>I can adjust my working hours to fit project needs and ensure tasks are completed on time — often ahead of deadlines.</p>

                        </div>
                    </div>
                </div>
                <div className='col-span-2 xl:row-span-3'>
                    <div className='grid-container animated-border relative'>
                        {/* 3D Globe */}
                        <Canvas className="w-full h-[400px]">
                            <PerspectiveCamera position={[0, 0, 10]} />
                            <ambientLight intensity={2} />
                            <directionalLight position={[0, 0, 5]} intensity={0.7} castShadow color="#22c2e6" />
                            <pointLight position={[10, -7, -38]} intensity={250} color="#2ba1c5" />
                            <BlueGlowingDotGlobe scale={4.2} position={[0,0,4]} />
                        </Canvas>

                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
                                Global Reach & Vision
                            </h2>
                            <p className="text-base sm:text-lg text-gray-200 mt-3 max-w-xl">
                                Connecting innovative ideas with people across the world,
                                leveraging technology and creativity to make a lasting impact.
                            </p>
                        </div>
                    </div>
                </div>


            </div>


        </section>
    )
}

export default About