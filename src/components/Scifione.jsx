import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Scifione = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/scifione.glb')
    const { actions, names } = useAnimations(animations, group)

    useEffect(() => {
        // Play the first available animation or all if multiple
        if (names.length > 0) {
            names.forEach((name) => {
                if (actions[name]) {
                    actions[name].reset().fadeIn(0.5).play()
                }
            })
        }
    }, [actions, names])

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[1.522, 0, 0]}>
                    <group
                        name="244f3f7d690442fea3be8b8f4a7612befbx"
                        rotation={[-Math.PI, 0, 0]}
                        scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Object_4">
                                    <primitive object={nodes._rootJoint} />
                                    <group name="Preview_Camera">
                                        <group name="Object_10" />
                                    </group>
                                    <group name="Sci_fi_worker">
                                        <group name="Object_12">
                                            <primitive object={nodes._rootJoint_1} />
                                            <skinnedMesh
                                                name="Object_227"
                                                geometry={nodes.Object_227.geometry}
                                                material={materials.texture_pbr_v128_002_Merged0_LOD0_Bake}
                                                skeleton={nodes.Object_227.skeleton}
                                            />
                                            <skinnedMesh
                                                name="Object_229"
                                                geometry={nodes.Object_229.geometry}
                                                material={materials.texture_pbr_v128_006_Merged0_LOD0_Bake}
                                                skeleton={nodes.Object_229.skeleton}
                                            />
                                            <skinnedMesh
                                                name="Object_231"
                                                geometry={nodes.Object_231.geometry}
                                                material={materials.texture_pbr_v128_011_DefaultOptimize_Merged0_LOD0_Bake}
                                                skeleton={nodes.Object_231.skeleton}
                                            />
                                            <skinnedMesh
                                                name="Object_233"
                                                geometry={nodes.Object_233.geometry}
                                                material={materials.texture_pbr_v128_0_Merged0_LOD0_Bake}
                                                skeleton={nodes.Object_233.skeleton}
                                            />
                                            <skinnedMesh
                                                name="Object_235"
                                                geometry={nodes.Object_235.geometry}
                                                material={materials.texture_pbr_v128_0_Merged0_LOD0_Bake_0}
                                                skeleton={nodes.Object_235.skeleton}
                                            />
                                            <group name="Object_226" />
                                            <group name="Object_228" />
                                            <group name="Object_230" />
                                            <group name="Object_232" />
                                            <group name="Object_234" />
                                        </group>
                                    </group>
                                    <group name="texture_pbr_v128_002" />
                                    <group name="texture_pbr_v128_006" />
                                    <group name="texture_pbr_v128_011" />
                                    <group name="texture_pbr_v128_008" />
                                    <group name="texture_pbr_v128_010" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/scifione.glb')

export default Scifione
