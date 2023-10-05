import { useEffect, useRef } from "react";
import AboutMe from "./HtmlPages/AboutMe.jsx";
import PublicityDisplay from "./modelsjs/PublicityDisplay.jsx";
import { SelectedPage } from "./App.jsx";
import { Vector3 } from "three";

const DISPLAY_POSITION = new Vector3(-16.5, 6, -13.5);

//This is the publicity display where the about me page will be shown up.
export default function MainPublicityDisplay( {pageSelected, setPageSelected, focusObjectFunc, objectIsFocused, focusedSound} )
{
    useEffect(() => {
        //When the selected page is the projects (the communicator object), then we should set this object as the focus of teh camera.
        if (pageSelected == SelectedPage.AboutMe) focusObjectFunc(DISPLAY_POSITION, -10, 0); 
    }, [pageSelected])

    return <>
        <PublicityDisplay scale    = { 2 }
                          position = { [DISPLAY_POSITION.x, -1.7, DISPLAY_POSITION.z] }
                          rotation = { [  0, Math.PI * -0.5, 0] } />

        {/* We create a point light to make the illusion that the display is creating some light around itself. */}
        <pointLight position = { [DISPLAY_POSITION.x, 5, DISPLAY_POSITION.z] } intensity = { 8 } color = { "#DFDFDE" } />

        {/* This will be the display "hitbox". */}
        <mesh scale         = { [0.5, 4.8, 3.5] } 
              position      = { [DISPLAY_POSITION.x - 0.5, DISPLAY_POSITION.y, DISPLAY_POSITION.z] } 
              onPointerDown = { () => { focusedSound(); setPageSelected(SelectedPage.AboutMe); } }>
            <boxGeometry />
            <meshBasicMaterial opacity = { 0 } transparent = { true } color={"red"} />
        </mesh>

        <AboutMe isFocused = { pageSelected == SelectedPage.AboutMe && objectIsFocused } onCloseCallback = { () => setPageSelected(SelectedPage.None) } />
    </>
}