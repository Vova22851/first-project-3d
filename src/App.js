import './App.css';
import React from "react";
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';


function RotatingBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current){
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
    }
  });

  return(
    <mesh ref={meshRef}>
    <boxGeometry args={[2,2,2]}/>
    <meshStandardMaterial color="red"/>
    </mesh>
  );
}

function App() {
  return (
    <div id="canvas-countainer" className="App">
      <Canvas>
        <RotatingBox />
          <ambientLight intensity={0.2}/>
          <directionalLight color="yellow" position={[0,2,5]} />
          <OrbitControls />
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />)
export default App;
