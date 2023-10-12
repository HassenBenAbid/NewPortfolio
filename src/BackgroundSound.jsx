import DefaultParams from "./DefaultParams";
import { useEffect, useRef } from "react";

//This will take care of playing both the ambient sound and the background music.
export default function BackgroundSound( { appStarted, musicIsPlaying } )
{
    const ambientSound = useRef();
    const bgMusic      = useRef();

    //We make sure that when the user hit start, we set the right volume for both the ambient sound and bg music and play both of them.
    useEffect(() => {
        if (appStarted){
            ambientSound.current.volume = DefaultParams.AMBIENT_VOLUME;
            bgMusic.current.volume      = DefaultParams.BG_MUSIC_VOLUME;

            ambientSound.current.play();
            bgMusic.current.play();
        }
    }, [appStarted])

    //We watch the music state that the user has set and we update it accordingly.
    useEffect(() => {
        if (!appStarted) return;

        if (musicIsPlaying) bgMusic.current.play();
        else bgMusic.current.pause();
    }, [musicIsPlaying])

    return <>
    
        <audio src="./Sound/Ambient.mp3"       ref = { ambientSound } loop = { true } />
        <audio src="./Sound/CantinaMusic.mp3"  ref = { bgMusic }      loop = { true } />
    
    </>
}