import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from "gsap"
import {useGSAP} from "@gsap/react"


const Model=(props)=> {
    const { nodes, materials } = useGLTF('/models/alarm_clock.glb')

    const clockref=useRef()
    useGSAP(()=>{
        clockref.current.rotation.y=-0.3
        gsap.to(clockref.current.rotation,{
            y:0.3,
            duration:2,
            yoyo:true,
            repeat:-1,
            ease:"power1.inOut",
        })
    })
    return (
        <group {...props} dispose={null} ref={clockref}>
            <group position={[0, 1.546, -0.432]} rotation={[-Math.PI, 0, 0]} scale={0.197}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.emission}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials['Material.001']}
                />
            </group>
            <group position={[-1.529, 0.978, -0.432]} rotation={[0, 0, -Math.PI / 2]} scale={0.2}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.knob}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.knob_2}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials.alarm_sign}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials['Material.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials.glass}
                position={[0, 0.978, -0.08]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_16.geometry}
                material={materials.material}
                position={[0, 0.978, 0.182]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/alarm_clock.glb')

export default Model

