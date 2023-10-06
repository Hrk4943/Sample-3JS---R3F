import React,{useRef} from 'react'
import {Canvas,useFrame} from '@react-three/fiber'
import {Torus} from '@react-three/drei'

const RotatingBox=()=>{ //this function is for applying the rotaion animation for the box
    const boxRef=useRef()//used to reference the 3js mesh element that represents the box

    useFrame(()=>{//used to create an animation loop
        if(boxRef.current){//checks if the boxRef has a valid reference to the box element
            boxRef.current.rotation.x +=0.01
            boxRef.current.rotation.y +=0.01
        }
    })
    return(
        <Torus ref={boxRef}>
            <meshBasicMaterial color="green" wireframe />
        </Torus>
    )    

}

const ThreeSecond=()=> {
  return (
    <>
    <Canvas>
        <ambientLight/>
        <pointLight position={[10,10,10]} />
        <RotatingBox/>
    </Canvas>
    </>
  )
}

export default ThreeSecond