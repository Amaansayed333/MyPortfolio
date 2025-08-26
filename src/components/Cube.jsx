import React from 'react'
import { useGLTF} from '@react-three/drei'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

const Cube=(props)=> {
    const { nodes, materials } = useGLTF('/models/kevin_the_cube_fortnite.glb')
    const cuberef=useRef()

    materials.mini_KEVIN.color.set("#ff00ff") // neon pink base
    materials.mini_KEVIN.emissive = { r: 1, g: 0, b: 1 } // fake emissive
    materials.mini_KEVIN.emissiveIntensity = 2


    useGSAP(()=>{
        gsap.to(cuberef.current.rotation,{
            y:cuberef.current.rotation.y+3,
            duration:3,
            yoyo:true,
            repeat:-1,
            ease:"power1.inOut",
        })
    })

    return (
        <group {...props} dispose={null} ref={cuberef}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={1.764}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Kevin_mini_KEVIN_0.geometry}
                        material={materials.mini_KEVIN}
                        scale={0.389}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/kevin_the_cube_fornite.glb')

export default Cube