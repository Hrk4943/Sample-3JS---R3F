import React,{useEffect,useRef} from 'react'
import * as THREE from 'three'

function Three() {
    const sceneRef=useRef(null)// reference the dom elements which the 3JS is rendered, the inital value is null    
    useEffect(()=>{
        // creates a scene,camera, and the render
        const scene=new THREE.Scene()
        const camera=new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1,1000)// the camera is PerspectiveCamera and it takes the parameters the 75 is fov , the apsect ratio (based on the window dimension, and the near and far clipping planes 0.1,1000)
        const renderer=new THREE.WebGLRenderer()//the renderer use the WebGL to render the  scene

        renderer.setSize(window.innerWidth, window.innerHeight)// set the size of the renderer to match the dimension of the browser
        sceneRef.current.appendChild(renderer.domElement) //the renderer DOM is added to the sceneRef

        //Create a cube and add it to the scene
        const geometry=new THREE.BoxGeometry(2,2,2)//BoxGeometry is created
        const material=new THREE.MeshBasicMaterial({ color: 0xffffff,wireframe:true })// the MeshBasicMaterial is created to specify the appereance of the cube
        const cube=new THREE.Mesh(geometry,material)//Mesh is the object which combines the cube geometry and material
        scene.add(cube)//cube mesh is added to the scene

        //Position of the camera
        camera.position.z=2//sets the initial position of the camera along the z-axis

        //creating the rotation animation for the cube
        const animate=()=>{
            cube.rotation.x +=0.01
            cube.rotation.y +=0.01
            renderer.render(scene,camera)
            requestAnimationFrame(animate)
        }
        animate()

    },[])
  return (
    <div ref={sceneRef}/>
  )
}

export default Three