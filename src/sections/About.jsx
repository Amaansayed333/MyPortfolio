import React from "react"
import Globe from "react-globe.gl"
import Model from "/src/components/Clock.jsx"
import {Canvas} from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

const About=()=>{


    return(
        <section className='c-space my-20'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-8 w-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid12.png' className='h-[600px] sm:h-[276px] sm:w-[276px] object-cover w-fit
                        rounded-2xl border border-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.7)] mx-6'/>
                        <div className='grid-headtext'>Hi, I'm Amaan</div>
                        <div className='grid-subtext'>Been building effective and eye catching websites along with 3D and live effects since last 2.5years</div>

                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid2.png' className=' h-[600px] sm:h-[276px] sm:w-[276px] object-cover w-full'/>
                        <p className='grid-headtext'>TECH STACK</p>
                        <p className='grid-subtext'>I have pretty good experience in building websites using javascript/typescript with a focus on react along with 3D environment space.</p>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <p className='grid-headtext'>I believe in crafting smooth user experiences powered by clean code.</p>
                        <p className='grid-subtext'>Diving deeper into Next.js,Three.js, WebGL, and Generative AI to create
                            more interactive experiences.</p>
                    </div>

                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full h-fit sm:h-[326px] flex justify-center items-center'>
                            <Canvas className='w-full h-full'>
                                <pointLight position={[0, 2, 0]} intensity={100} color={"#3b82f6"} />
                                <pointLight position={[0, -1, 0]} intensity={150} color={"#3b82f6"} />
                                <ambientLight intensity={0.3} />

                                <Model scale={2} position={[0,-1,0.4]}/>

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



                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About