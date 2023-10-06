import React,{useRef} from 'react'
import { Canvas,useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

const Animate=()=>{
    const boxRef=useRef()
    useFrame(()=>{
        if(boxRef.current){
            boxRef.current.rotation.x+=0.01
            boxRef.current.rotation.y+=0.01
        }
    })
    return(
        <Box ref={boxRef}>
            <meshBasicMaterial color='green' wireframe />
        </Box>
    )
}


export default function ReactThree() {
  return (
    <>
        <Canvas>
            <ambientLight/>
            <pointLight position={[10,10,10]} />
            <Animate/>
        </Canvas>
    </>
  )
}

