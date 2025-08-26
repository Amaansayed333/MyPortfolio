import React from "react";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath"


const HeroCamera=({children})=>{

    const groupref=useRef()
    useFrame((state,delta)=>{
        easing.dampE(groupref.current.rotation,[0,state.pointer.x/5,0],0.25,delta)

    })

    return(
        <group ref={groupref}>
            {children}

        </group>
    )
}

export default HeroCamera;