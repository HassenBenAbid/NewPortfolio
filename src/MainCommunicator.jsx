import { useEffect, useRef, useState } from "react";
import { Vector3 }      from "three";
import { gsap }         from "gsap";
import ProjectsPage     from "./HtmlPages/ProjectsPage.jsx";
import Communicator     from "./modelsjs/Communicator.jsx";
import { SelectedPage } from "./App.jsx"
import { BakeShadows } from "@react-three/drei";
import { viewportResolution } from "three/examples/jsm/nodes/Nodes.js";

//The default position and rotation of the communicator group.
var DEFAULT_POSITION = new Vector3(-0.62, 3.55, 5.58);
var DEFAULT_ROTATION = new Vector3(0, - Math.PI * 0.5, 0);

//The rotation and position of the communicator group when it's hovered.
var ANIMATED_POSITION = new Vector3(-0.62, 6.05, 5.58);
var ANIMATED_ROTATION = new Vector3(Math.PI * 0.5, - Math.PI * 0.5, 0);

export default function MainCommunicator( { pageSelected, setPageSelected, focusObjectFunc, objectIsFocused, focusedSound } )
{
    const communicatorRef           = useRef();                   //A reference to the group that's holding the communicator model.
    const [ position, setPosition ] = useState(DEFAULT_POSITION); //The current position of the communicator group.
    const [ rotation, setRotation ] = useState(DEFAULT_ROTATION); //The current rotation of the communicator group.

    const [ isHovered, setIsHovered ] = useState(false); //This will inform us whether the communicator box is actually hovered or not.

    //When  the communicator is hovered, we want it to rotate to face the player (we also change the y position so that it stays on top of the bar).
    const animateRotation = () => {
        gsap.timeline().to(communicatorRef.current.position, {duration: 0.5, x: position.x, y: position.y, z: position.z});
        gsap.timeline().to(communicatorRef.current.rotation, {duration: 0.5, x: rotation.x, y: rotation.y, z: rotation.z}, "<");
    };

    //We update the rotation of the communicator depending on whether it's hovered/selected or not.
    const updateRotation = () => {
        setPosition(isHovered || pageSelected == SelectedPage.Projects ? ANIMATED_POSITION : DEFAULT_POSITION);
        setRotation(isHovered || pageSelected == SelectedPage.Projects ? ANIMATED_ROTATION : DEFAULT_ROTATION);
    };

    //Set the initial position and rotation of the communicator when the scene starts.
    useEffect(() => {
        communicatorRef.current.position.copy(DEFAULT_POSITION);
        communicatorRef.current.rotation.y = DEFAULT_ROTATION.y;
    }, []);

    useEffect(() => {
        //When the selected page is the projects (the communicator object), then we should set this object as the focus of teh camera.
        if (pageSelected == SelectedPage.Projects) focusObjectFunc(ANIMATED_POSITION, 0, window.innerWidth / window.innerHeight >= 0.5 ? 4.5 : 5); 
        updateRotation();
    }, [pageSelected])

    //Whenever the object is selected or hovered we make the object rotate toward the player.
    useEffect(() => {
        updateRotation();
    }, [isHovered]);

    //We don't animate in the same useEffect as the one that's setting the new position and rotation because it takes of bit time for the values to change.
    useEffect(() => { animateRotation(); }, [position, rotation]);

    return <>
            {/* This will be the communicator "hitbox". */}
            <mesh scale         = { [2.5, 2, 2.5] } 
                  position      = { [-0.62, 5, 5.58] } 
                  onPointerOver = { () => setIsHovered(true)  }
                  onPointerOut  = { () => setIsHovered(false) }
                  onPointerDown = { () => { focusedSound(); setPageSelected(SelectedPage.Projects); } }>
                <boxGeometry />
                <meshBasicMaterial opacity = { 0 } transparent = { true }/>
            </mesh>

            <group ref = { communicatorRef }>
                <Communicator />
                <BakeShadows />
                <ProjectsPage isFocused = { pageSelected == SelectedPage.Projects && objectIsFocused } onCloseCallback = { () => setPageSelected(SelectedPage.None) } />
            </group>
    </>
}