import { React, StrictMode, Suspense, useEffect, useState } from "react";
import ReactDOM       from "react-dom/client";
import App            from "./App.jsx"
import { Canvas }     from "@react-three/fiber";
import * as THREE from 'three';
import "./index.css"
import { Loader, Preload, useProgress } from "@react-three/drei";
import LoadingScreen from "./LoadingScreen.jsx";

var cnt     = document.getElementById("loadPercentage"); 
var water   = document.getElementById("water");

const root = ReactDOM.createRoot(document.querySelector("#root"));
const defaultCameraPosition = {x: 0, y: 20, z: 50};

root.render(
    <StrictMode>
      <Loading />
      <Canvas camera = { { fov: 45, position: [defaultCameraPosition.x, defaultCameraPosition.y, defaultCameraPosition.z] }  } shadows = { { type: THREE.PCFShadowMap } } >
        <App defaultCameraPosition = { defaultCameraPosition } />
        <Preload all />
      </Canvas>
    </StrictMode>
);

function Loading()
{
    const { progress } = useProgress();

    useEffect(() => {
      cnt.innerHTML = progress + " %"; 
      water.style.transform='translate(0'+','+( 120 - progress)+'%)';
      console.log("sasa");
    }, [progress])

    return <></>
}
