import {useGLTF} from "@react-three/drei";
import React, {useRef} from "react";
import {useEffect} from "react";
import {useFrame} from "@react-three/fiber";
import skyScence from '../assets/3d/sky.glb'

const Sky=({isRotating}) => {
    const sky = useGLTF(skyScence);
    const skyRef = useRef();

    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
        }
    });

    return(
        <mesh ref={skyRef}>
            <primitive object={sky.scene}/>
        </mesh>
    )
}
// Sky.jsx

// Example of default export
export default Sky;
