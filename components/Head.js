import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/head.glb')

  useFrame(()=>{group.current.rotation.y = group.current.rotation.y += .02})
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        position={[0, 0, 0]}

        geometry={nodes.head3d.geometry}
        material={materials.material_0}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.015, 0.015, 0.015]}
      />
    </group>
  )
}

useGLTF.preload('/head.glb')