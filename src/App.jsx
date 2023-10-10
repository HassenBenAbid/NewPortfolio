import { Perf } from "r3f-perf";
import { useEffect, useState } from "react";
import { Vector3 } from "three";
import Effects          from "./Effects.jsx";
import MainCantina      from "./MainCantina.jsx";
import MainCommunicator from "./MainCommunicator.jsx";
import MainCamera       from "./MainCamera.jsx";
import MainMenuStand    from "./MainMenuStand.jsx";
import MainPublicityDisplay from "./MainPublicityDisplay.jsx";
import DefaultParams from "./DefaultParams.js";
import useSound from "use-sound";
import { Stage } from "@react-three/drei";

//An enum that help us determine what specifc page is currently selected.
export const SelectedPage = {
    None    : 0,
    AboutMe : 1,
    Projects: 2
}

export default function App({ started = false})
{
    const [ canSelect     , setCanSelect]         = useState(true);                                   //This determine whether the user will be able to select a page/object to focus or not.
    const [ pageSelected  , setPageSelected ]     = useState(SelectedPage.None);                      //This help us determine what page is currently in focus.
    const [ cameraPosition, setCameraPosition ]   = useState(DefaultParams.ON_START_CAMERA_POSITION); //The current position of the camera.
    const [ cameraTarget  , setCameraTarget]      = useState( { x:0, y:0, z:0} );                     //Where the camera is currently looking at.
    const [ objectIsFocused, setObjectIsFocused ] = useState(false);

    //The sound that gets played whenever an object is selected to be focused.
    const [ playObjectFocusedSound ] = useSound("./Sound/FocusObjectClick.wav", {
        volume: DefaultParams.UI_SOUND_VOLUME
    });

    //Set the object that we want to focus, when null is passed then the camera will just get back to its standard position.
    var focusObject = (objectSelectedPos, xOffset = 0, zOffset = 0) => {
        if (!started) return;
        setCanSelect(false);

        setCameraTarget(pageSelected != SelectedPage.None ? objectSelectedPos : new Vector3(0, 0, 0));
        setCameraPosition(pageSelected != SelectedPage.None ? { x: objectSelectedPos.x + xOffset, y: objectSelectedPos.y, z: objectSelectedPos.z + zOffset} : DefaultParams.DEFAULT_CAMERA_POSITION);
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

    useEffect(() => {
        if (started) {
            setCanSelect(false);
            setCameraPosition(DefaultParams.DEFAULT_CAMERA_POSITION);
        }
    }, [started]);

    return <>
                {/* <Perf    /> */}
                <Effects />

                {/* <BackggroundSound appStarted = { started } /> */}

                <ambientLight intensity = { 0.05 } />

                <MainCamera position = { cameraPosition } target = { cameraTarget } pageSelected = { pageSelected } setCanSelect = { setCanSelect } setObjectIsFocused = { (state) => setObjectIsFocused(state) } />

                <MainCantina />
                <MainCommunicator     pageSelected = { pageSelected } setPageSelected = { selectPage } focusObjectFunc = { focusObject } objectIsFocused = { objectIsFocused } focusedSound = { playObjectFocusedSound }  />
                <MainPublicityDisplay pageSelected = { pageSelected } setPageSelected = { selectPage } focusObjectFunc = { focusObject } objectIsFocused = { objectIsFocused } focusedSound = { playObjectFocusedSound }  />
                <MainMenuStand        setPageSelected = { selectPage } />

                <mesh position = { [0, -11.05, 0] } scale = { [80, 20, 80] } receiveShadow>
                    <boxGeometry />
                    <meshStandardMaterial color = "sandybrown" />
                </mesh>
            </>
}