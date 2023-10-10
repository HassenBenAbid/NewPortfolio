import DefaultParams from "./DefaultParams";
import { useEffect, useRef } from "react";

//This will take care of playing both the ambient sound and the background music.
export default function BackgroundSound( { appStarted } )
{
    const ambientSound = useRef();
    const bgMusic      = useRef();

    useEffect(() => {
        if (appStarted){
            ambientSound.current.volume = DefaultParams.AMBIENT_VOLUME;
            bgMusic.current.volume      = DefaultParams.BG_MUSIC_VOLUME;

            ambientSound.current.play();
            bgMusic.current.play();
        }
    }, [appStarted])

    return <>
    
        <audio src="./Sound/Ambient.mp3"       ref = { ambientSound } loop = { true } />
        <audio src="./Sound/CantinaMusic.mp3"  ref = { bgMusic }      loop = { true } />
    
    </>
}