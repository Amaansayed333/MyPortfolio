import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BlueGlowingDotGlobe = ({ scale = 1, position = [0, 0, 0] }) => {
    const globeRef = useRef();
    const dotRefs = useRef([]);

    // Generate dot positions
    const dotPositions = useMemo(() => {
        const positions = [];
        const radius = 1;
        const dotCount = 3000;

        for (let i = 0; i < dotCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            // Different shades of blue for variation
            const blueShades = ["#0066ff", "#00aaff", "#3399ff", "#0080ff", "#1a75ff"];
            const color = blueShades[Math.floor(Math.random() * blueShades.length)];

            positions.push({
                position: [x, y, z],
                color,
                baseOpacity: Math.random() * 0.5 + 0.5,
                pulseSpeed: Math.random() * 1.5 + 0.5
            });
        }

        return positions;
    }, []);

    // Animation: rotation + pulsing + twinkling
    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;

        if (globeRef.current) {
            globeRef.current.rotation.y += delta * 0.1;
        }

        dotRefs.current.forEach((dot, i) => {
            if (!dot) return;
            const data = dotPositions[i];

            // Pulsing opacity
            const pulse = Math.sin(time * data.pulseSpeed + i) * 0.2;
            if (dot.material) {
                dot.material.opacity = data.baseOpacity + pulse;
            }

            // Slight pulsing scale
            const scalePulse = 1 + Math.sin(time * data.pulseSpeed + i) * 0.1;
            dot.scale.setScalar(scalePulse);
        });
    });

    return (
        <group ref={globeRef} scale={scale} position={position}>
            {dotPositions.map((dot, index) => (
                <group key={index} position={dot.position}>
                    {/* Main dot with ref for pulsing */}
                    <mesh ref={el => dotRefs.current[index] = el}>
                        <sphereGeometry args={[0.006, 6, 6]} />
                        <meshBasicMaterial
                            color={dot.color}
                            transparent
                            opacity={dot.baseOpacity}
                        />
                    </mesh>

                    {/* Subtle glow */}
                    {index % 5 === 0 && (
                        <mesh>
                            <sphereGeometry args={[0.018, 6, 6]} />
                            <meshBasicMaterial
                                color={dot.color}
                                transparent
                                opacity={0.15}
                                side={THREE.BackSide}
                            />
                        </mesh>
                    )}
                </group>
            ))}
        </group>
    );
};

export default BlueGlowingDotGlobe;