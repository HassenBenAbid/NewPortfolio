// import useSound from "use-sound";
// import DefaultParams from "./DefaultParams";
// import { useEffect, useRef } from "react";

// export default function BackggroundSound( { appStarted } )
// {
//     const ambientSound = useRef();
//     // const bgMusic      = useRef();

//     // const [ playBGMusic, musicData ] = useSound("./Sound/CantinaMusic.mp3", {
//     //     volume: DefaultParams.BG_MUSIC_VOLUME,
//     // });

//     useEffect(() => {
//         if (appStarted){
//             ambientSound.current.play();
//         }
//     }, [appStarted])

//     return <>
    
//         <audio src="./Sound/Ambient.mp3"  ref = { ambientSound } loop = { true } volume = { DefaultParams.AMBIENT_VOLUME } />
    
//     </>
// }