import { React, StrictMode, useEffect } from "react";
import ReactDOM                         from "react-dom/client";
import App                              from "./App.jsx"
import { Canvas }                       from "@react-three/fiber";
import { Preload, useProgress }         from "@react-three/drei";
import * as THREE from 'three';
import "./index.css"

var loadingScreen  = document.getElementById("loadingScreen");
var percentageText = document.getElementById("loadPercentage"); 
var water          = document.getElementById("water");
var loadingText    = document.getElementById("loadingText");
var countProgress  = 0;
var progressInterval;

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

//This small component will take care of showing the current percentage of the loading and making sure that it's a smooth animation.
function Loading()
{
    const { progress } = useProgress();

    useEffect(() => {
      //We make sure that the transition btw 0 -> 100 is smooth.
      clearInterval(progressInterval);
      progressInterval = setInterval(() => {
        countProgress++;
        percentageText.innerHTML = countProgress + " %"; 
        water.style.transform    ='translate(0'+','+( 120 - countProgress)+'%)';
        if (countProgress == progress)
        {
          clearInterval(progressInterval);
          //If the loading has ended then we want to remove both the percentage and the loading text and show a start button.
          //When the start button is clicked, we want to make sure to fade out the loading screen into the main scene.
          if (progress == 100)
          {
            loadingText.style.opacity      = 0;
            percentageText.innerHTML       = "START";
            percentageText.style.fontStyle = "bold";
            percentageText.style.cursor    = "pointer";
            percentageText.onclick = () => { loadingScreen.classList.add("fadeOut") };
          }
        } 
      }, 5);
    }, [progress])

    return <></>
}
