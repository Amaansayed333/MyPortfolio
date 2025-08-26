import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
    const { scene } = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
    );
    const targetref = useRef();

    useGSAP(()=>{
        gsap.to(targetref.current.position,{
            y:targetref.current.position.y+3,
            duration:1.5,
            yoyo:true,
            repeat:-1,
            ease:"power1.inOut",
        })
    })

    return (
        <mesh {...props} ref={targetref} >
            <primitive object={scene}></primitive>
        </mesh>
    );


};

export default Target;
