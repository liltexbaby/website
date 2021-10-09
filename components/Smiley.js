import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import { useGLTF } from '@react-three/drei'

export default function Smiley(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/smiley.glb')

      useFrame(()=>{group.current.rotation.y = group.current.rotation.y += .02})
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials.SVGMat}
        position={[0, 0, 0]}
        rotation={[1.55, -0.02, 0.4]}
        scale={[170, 170, 170]}
      />
    </group>
  )
}

useGLTF.preload('/smiley.glb')