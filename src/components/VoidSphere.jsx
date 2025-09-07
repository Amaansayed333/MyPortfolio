import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const VoidSphere = ({
                        position = [0, -10, 0],
                        radius = 12,
                        borderColor = "#0f91cd",
                        borderWidth = 0.3,
                        opacity = 0.75
                    }) => {
    const meshRef = useRef();
    const borderRef = useRef();

    useFrame((state) => {
        // Optional: Add subtle pulsing effect to black borders
        if (borderRef.current) {
            borderRef.current.material.opacity = 0.7 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
        }
    });

    return (
        <group position={position}>
            {/* Black void sphere that blocks galaxy effect */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[radius - borderWidth, 64, 64]} />
                <meshBasicMaterial
                    color="#c95dd8"
                    transparent
                    opacity={opacity}
                />
            </mesh>

            {/* Main golden border ring */}
            <mesh ref={borderRef}>
                <ringGeometry args={[radius - borderWidth, radius, 64]} />
                <meshBasicMaterial
                    color={borderColor}
                    transparent
                    opacity={0.8}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Golden wireframe sphere for border effect */}
            <mesh>
                <sphereGeometry args={[radius, 32, 16]} />
                <meshBasicMaterial
                    color={borderColor}
                    transparent
                    opacity={0.6}
                    wireframe={false}
                />
            </mesh>

            {/* Outer golden glow ring */}
            <mesh>
                <sphereGeometry args={[radius + borderWidth * 0.5, 32, 32]} />
                <meshBasicMaterial
                    color={borderColor}
                    transparent
                    opacity={0.2}
                    wireframe={false}
                />
            </mesh>

            {/* Additional golden glow layers for enhanced emission effect */}
            <mesh>
                <sphereGeometry args={[radius + borderWidth * 1.5, 32, 32]} />
                <meshBasicMaterial
                    color={borderColor}
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </mesh>

            <mesh>
                <sphereGeometry args={[radius + borderWidth * 2.5, 32, 32]} />
                <meshBasicMaterial
                    color={borderColor}
                    transparent
                    opacity={0.05}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    );
};

export default VoidSphere;