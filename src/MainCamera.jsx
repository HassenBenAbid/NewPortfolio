import { useEffect, useRef, useState } from "react";
import { OrbitControls }               from "@react-three/drei"
import { useThree }                    from "@react-three/fiber"
import { Vector3 }                     from "three";
import { gsap }                        from "gsap";
import { SelectedPage }                from "./App.jsx"

var Initialized = false;

export default function MainCamera({ position, target, pageSelected = SelectedPage.None, setCanSelect, setObjectIsFocused })
{
    const [ controlsEnabled, setControlsEnabled ] = useState(true); //This will allow us to choose when to allow the user to control the orbit controls and when we actually want to prevent that.
    const { camera, gl: { domElement } }          = useThree();
    const [ isMoving, setIsMoving ]               = useState(false);
    const cameraRef                               = useRef();

    //This function will make sure to animate camera movement.
    const animateCamera = () => {
        if (cameraRef != null && Initialized)
        {
            setIsMoving(true);
            setControlsEnabled(true);

            if (pageSelected == SelectedPage.None) setObjectIsFocused(false); //No object is focused by the camera anymore

            gsap.timeline().to(camera.position,          { duration: 1, x: position.x, y: position.y, z: position.z});
            gsap.timeline().to(cameraRef.current.target, { duration: 1, x: target.x,   y: target.y,   z: target.z }, "<")
            .eventCallback("onComplete", () => { 
                //Whenever the animation finishes, we make to make it possible to select or unselect again and also if there's an object selected currently we disable orbital control.
                //Also We make sure to specify that an object is currently focused by the camera.
                if (pageSelected != SelectedPage.None) { setControlsEnabled(false); setObjectIsFocused(true); }
                setIsMoving(false);
                setCanSelect(true);
            });
        }
    };

    //We set the up axis.
    useEffect(() => { camera.up = new Vector3(0, 1, 0); }, []);

    //Each time the position or the target of the camera changes, we aniamte that movement.
    useEffect(() => {
        animateCamera();
        Initialized = true; //This will make sure that no animation will happen when first starting the page.
    }, [position, target]);

    return <OrbitControls ref           = { cameraRef }
                          args          = { [camera, domElement] }
                          rotateSpeed   = { 0.5 }
                          maxZoom       = { 1 }
                          minDistance   = { !isMoving ? 30 : 0 }
                          maxDistance   = { 60 }
                          enabled       = { controlsEnabled }
                          minPolarAngle = { !isMoving ? Math.PI * 0.2 : 0 }
                          maxPolarAngle = { !isMoving ? Math.PI * 0.4 : Math.PI }
                          enablePan     = { false }
                          makeDefault/>
}