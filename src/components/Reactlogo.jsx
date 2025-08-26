import React from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

const Reactlogo=(props)=> {
    const { nodes, materials } = useGLTF('/models/react_logo_circle(1).glb')

    const reactref=useRef();
    useGSAP(()=>{
        reactref.current.rotation.y=-1
        gsap.to(reactref.current.rotation,{
            y:0.3,
            duration:2,
            yoyo:true,
            repeat:-1,
            ease:"power1.inOut",
        })

    })
    return (
        <group {...props} dispose={null} ref={reactref}>
            <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['React-Logo_Material002_0'].geometry}
                        material={materials['Material.002']}
                        position={[0, 7.935, 0]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[39.166, 39.166, 52.734]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Backdrop_Material001_0.geometry}
                        material={materials['Material.001']}
                        position={[-17.091, 7.935, 0]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[247.854, 247.854, 52.734]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/react_logo_circle(1).glb')

export default Reactlogo