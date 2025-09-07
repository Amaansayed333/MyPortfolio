import React, { useRef, useEffect, useState } from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Hologram = ({
                      text = "PLEASE WAIT",
                      position = [0, 0, 0],
                      fontSize = 0.6,
                      frameWidth = 4,
                      frameHeight = 1,
                      color = "#00ffff",
                      glitchColor = "#ff0080",
                      changeTextAfter = 15000, // 15 seconds by default
                      newText = "NOW SCROLL",
                      enableTextChange = true,
                      ...props
                  }) => {
    const textRef = useRef()
    const glitchTextRef = useRef()
    const scanlineRef = useRef()
    const glitchLinesRef = useRef()

    const [displayText, setDisplayText] = useState(text)
    const [glitchIntensity, setGlitchIntensity] = useState(0)

    // Change text after specified time
    useEffect(() => {
        if (enableTextChange && changeTextAfter > 0) {
            const timer = setTimeout(() => {
                setDisplayText(newText)
            }, changeTextAfter)

            return () => clearTimeout(timer)
        }
    }, [enableTextChange, changeTextAfter, newText])

    useFrame((state) => {
        const time = state.clock.elapsedTime

        // Main text effects
        if (textRef.current) {
            // Floating animation (relative to group position)
            textRef.current.position.y = Math.sin(time * 2) * 0.2

            // Random glitch displacement
            if (Math.random() > 0.92) {
                setGlitchIntensity(Math.random() * 0.5)
                textRef.current.position.x = (Math.random() - 0.5) * 0.3
                textRef.current.position.z = (Math.random() - 0.5) * 0.2
            } else {
                // Return to center position smoothly
                textRef.current.position.x = THREE.MathUtils.lerp(textRef.current.position.x, 0, 0.1)
                textRef.current.position.z = THREE.MathUtils.lerp(textRef.current.position.z, 0, 0.1)
                setGlitchIntensity(prev => prev * 0.9)
            }

            // Opacity flickering
            if (textRef.current.material) {
                textRef.current.material.opacity = 0.8 + Math.sin(time * 15) * 0.1 + (Math.random() > 0.85 ? Math.random() * 0.3 : 0)
            }
        }

        // Glitch text effect
        if (glitchTextRef.current && glitchTextRef.current.material) {
            glitchTextRef.current.material.opacity = glitchIntensity * 0.4
        }

        // Scanline animation (relative to group position)
        if (scanlineRef.current) {
            scanlineRef.current.position.y = Math.sin(time * 3) * 0.5
            scanlineRef.current.material.opacity = 0.1 + Math.sin(time * 8) * 0.05
        }

        // Glitch lines animation (relative to group position)
        if (glitchLinesRef.current) {
            glitchLinesRef.current.position.x = Math.sin(time * 20) * 0.1 * glitchIntensity
            glitchLinesRef.current.material.opacity = 0.2 * glitchIntensity
        }
    })

    return (
        <group position={position} {...props}>
            {/* Main holographic text */}
            <Text
                ref={textRef}
                position={[0, 0, 0]}
                fontSize={fontSize}
                color={color}
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.05}
                font="/fonts/Orbitron-VariableFont_wght.ttf"
            >
                {displayText}
                <meshStandardMaterial
                    transparent
                    opacity={0.8}
                    emissive={color}
                    emissiveIntensity={0.6}
                    color={color}
                />
            </Text>

            {/* Glitch outline text */}
            <Text
                ref={glitchTextRef}
                position={[0.02, 0, -0.01]}
                fontSize={fontSize}
                color={glitchColor}
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.05}
                font="/fonts/Orbitron-VariableFont_wght.ttf"
            >
                {displayText}
                <meshStandardMaterial
                    transparent
                    opacity={0.5}
                    emissive={glitchColor}
                    emissiveIntensity={0.4}
                />
            </Text>

            {/* Background scanline plane */}
            <mesh ref={scanlineRef} position={[0, 0, -0.1]}>
                <planeGeometry args={[frameWidth, frameHeight]} />
                <meshBasicMaterial
                    transparent
                    opacity={0.08}
                    color={color}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Glitch lines */}
            <mesh ref={glitchLinesRef} position={[0, 0, -0.05]}>
                <planeGeometry args={[frameWidth + 0.5, 0.05]} />
                <meshBasicMaterial
                    transparent
                    opacity={0.2}
                    color={glitchColor}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Cyberpunk corner brackets */}
            {[
                [-1, 0.5],  // Top left
                [1, 0.5],   // Top right
                [-1, -0.5], // Bottom left
                [1, -0.5],  // Bottom right
            ].map(([x, y], i) => (
                <group key={i} position={[x * (frameWidth / 2 - 0.2), y * frameHeight, 0]}>
                    {/* Horizontal bracket line */}
                    <mesh>
                        <planeGeometry args={[0.4, 0.03]} />
                        <meshBasicMaterial transparent opacity={0.6} color={color} />
                    </mesh>
                    {/* Vertical bracket line */}
                    <mesh>
                        <planeGeometry args={[0.03, 0.2]} />
                        <meshBasicMaterial transparent opacity={0.6} color={color} />
                    </mesh>
                </group>
            ))}

            {/* Random glitch artifacts */}
            {Array.from({ length: 8 }).map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        (Math.random() - 0.5) * frameWidth * 0.8,
                        (Math.random() - 0.5) * frameHeight * 0.8,
                        -0.2
                    ]}
                >
                    <planeGeometry args={[0.05, Math.random() * 0.3 + 0.05]} />
                    <meshBasicMaterial
                        transparent
                        opacity={Math.random() * 0.2}
                        color={Math.random() > 0.5 ? color : glitchColor}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            ))}
        </group>
    )
}

export default Hologram