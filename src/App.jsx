import { Perf } from "r3f-perf";
import { useEffect, useState } from "react";
import { Vector3 } from "three";
import Effects          from "./Effects.jsx";
import MainCantina      from "./MainCantina.jsx";
import MainCommunicator from "./MainCommunicator.jsx";
import MainCamera       from "./MainCamera.jsx";
import MainMenuStand    from "./MainMenuStand.jsx";
import MainPublicityDisplay from "./MainPublicityDisplay.jsx";

//An enum that help us determine what specifc page is currently selected.
export const SelectedPage = {
    None    : 0,
    AboutMe : 1,
    Projects: 2
}

export default function App({ defaultCameraPosition })
{
    const [ canSelect, setCanSelect]            = useState(true);                  //This determine whether the user will be able to select a page/object to focus or not.
    const [ pageSelected, setPageSelected ]     = useState(SelectedPage.None);     //This help us determine what page is currently in focus.
    const [ cameraPosition, setCameraPosition ] = useState(defaultCameraPosition); //The current position of the camera.
    const [ cameraTarget, setCameraTarget]      = useState( { x:0, y:0, z:0} );    //Where the camera is currently looking at.
    
    //Set the object that we want to focus, when null is passed then the camera will just get back to its standard position.
    var focusObject = (objectSelectedPos, xOffset = 0, zOffset = 0) => {
        setCanSelect(false);

        setCameraTarget(pageSelected != SelectedPage.None ? objectSelectedPos : new Vector3(0, 0, 0));
        setCameraPosition(pageSelected != SelectedPage.None ? { x: objectSelectedPos.x + xOffset, y: objectSelectedPos.y, z: objectSelectedPos.z + zOffset} : defaultCameraPosition);
    };

    //Set what page is currently selected.
    var selectPage = (selection) => {
        if (!canSelect && selection != SelectedPage.None) return;
        if (selection == pageSelected) return;

        setPageSelected(selection);
    };

    useEffect(() => {
        //We make sure that when the selected page is none then the camera is in the standard position.
        if (pageSelected == SelectedPage.None) focusObject(null);
    }, [pageSelected]);

    return <>
                <Perf    />
                <Effects />
                
                <ambientLight intensity = { 0.05 } />

                <MainCamera position = { cameraPosition } target = { cameraTarget } pageSelected = { pageSelected } setCanSelect = { setCanSelect } />
                <MainCantina />
                <MainCommunicator     pageSelected = { pageSelected } setPageSelected = { selectPage } focusObjectFunc = { focusObject }  />
                <MainPublicityDisplay pageSelected = { pageSelected } setPageSelected = { selectPage } focusObjectFunc = { focusObject } />
                <MainMenuStand        setPageSelected = { selectPage } />

                {/* <mesh position-y = { -1 } rotation-x = { - Math.PI * 0.5 } scale = { 100 } receiveShadow>
                    <planeGeometry />
                    <meshStandardMaterial color = "sandybrown" />
                </mesh> */}

                <mesh position = { [0, -11.05, 0] } scale = { [45, 20, 45] } receiveShadow>
                    <boxGeometry />
                    <meshStandardMaterial color = "sandybrown" />
                </mesh>
            </>
}