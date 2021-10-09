import React, { useRef, Suspense} from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Smiley from './Smiley'



// function Head() {
//     const { nodes } = useGLTF('/smiley.glb')
//     return (
//         <mesh geometry={nodes.Default.geometry}>
//           <meshStandardMaterial
//             attach="material"
//             color="black"
//             roughness={0.3}
//             metalness={0.3}
//           />
//         </mesh>
//     );
//   }
  

// function CenterPiece(){


//     const { nodes } = useGLTF('/smiley.glb')


//     const mesh = useRef(null);
//     useFrame(()=>{mesh.current.rotation.x = mesh.current.rotation.y += .01})

//     return(
            
//         <mesh ref={mesh} geometry={nodes.Default.geometry}>
//         <meshStandardMaterial
//           attach="material"
//           color="black"
//           roughness={0.3}
//           metalness={0.3}
//         />
//       </mesh>

//     );
// }

export default function CornerAvatar() {
    return (
        <div className="cornerAvatarHolder">
            
            <Canvas>
                <OrbitControls/>
                {/* <CenterPiece/> */}
                <Suspense fallback={null}>
            <Smiley/>
                </Suspense>
            </Canvas>
        </div>
    )
}


