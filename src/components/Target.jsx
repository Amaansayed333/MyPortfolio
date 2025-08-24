import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
    const { scene } = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
    );
    const targetref = useRef();

    useGSAP(() => {
        gsap.to(targetref.current.position, {
            x: targetref.current.position.x + 2,
            y: targetref.current.position.y + 2.8,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    });

    return (
        <group {...props}>   {/* Leva moves this */}
            <group ref={targetref}>  {/* GSAP animates this */}
                <primitive object={scene} />
            </group>
        </group>
    );


};

export default Target;
