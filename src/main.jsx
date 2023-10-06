import { React, StrictMode, useEffect, useState } from "react";
import ReactDOM                         from "react-dom/client";
import App                              from "./App.jsx"
import { Canvas }                       from "@react-three/fiber";
import { AdaptiveDpr, Bvh, PerformanceMonitor, Preload, useProgress }         from "@react-three/drei";
import * as THREE from 'three';
import "./index.css"
import DefaultParams from "./DefaultParams.js";

var loadingScreen  = document.getElementById("loadingScreen");
var percentageText = document.getElementById("loadPercentage"); 
var water          = document.getElementById("water");
var loadingText    = document.getElementById("loadingText");
var countProgress  = 0;
var progressInterval;

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Loading />
);

//This small component will take care of showing the current percentage of the loading and making sure that it's a smooth animation.
function Loading()
{
    const { progress }            = useProgress();
    const [ started, setStarted ] = useState(false);
    const [ dpr, setDpr ]         = useState(1);

    useEffect(() => {
      //We make sure that the transition btw 0 -> 100 is smooth.
      clearInterval(progressInterval);
      progressInterval = setInterval(() => {
        countProgress++;
        countProgress = Math.min(countProgress, 100);
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
            percentageText.classList.add("hover:text-[#F56C22]");
            percentageText.onclick = () => { loadingScreen.classList.add("fadeOut"); setStarted(true); };
          }
        } 
      }, 5);
    }, [progress])

    return <StrictMode>
      <Canvas dpr         = { dpr } 
              camera      = { { fov: 45, position: [DefaultParams.ON_START_CAMERA_POSITION.x, DefaultParams.ON_START_CAMERA_POSITION.y, DefaultParams.ON_START_CAMERA_POSITION.z] }  } 
              shadows     = { { type: THREE.PCFShadowMap } } 
              performance = { { min: 0.1 } }>
        <PerformanceMonitor onIncline = { () => setDpr(1.5) } onDecline = { () => setDpr(0.5) } />
        <Bvh firstHitOnly>
          <scene />
        </Bvh>
        <App started = { started } />
        <Preload all />
        <AdaptiveDpr pixelated />
      </Canvas>
    </StrictMode>
}
