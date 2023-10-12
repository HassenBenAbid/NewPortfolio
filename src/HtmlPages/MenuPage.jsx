import { Html } from "@react-three/drei";
import { SelectedPage } from "../App.jsx";
import DefaultParams from "../DefaultParams.js";
import useSound from "use-sound";
import { useRef } from "react";

export default function MenuPage( { setPageSelected, setMusicIsPlaying } )
{
    const musicStateIcon = useRef();
    const [ playBoardClickSound ] = useSound("./Sound/BoardClick.wav", {
        volume: DefaultParams.UI_SOUND_VOLUME
    });

    //This function will make sure to toggle whether the music play/pause while also changing the right icon and playign the click sound.
    const mute = () => {
        setMusicIsPlaying(old => {
            musicStateIcon.current.src = old ? DefaultParams.MUSIC_OFF_ICON : DefaultParams.MUSIC_ON_ICON;
            playBoardClickSound();
            return !old;
        });
    }

    return <Html className = "select-none w-[1125px] h-[1600px]" 
                 occlude   = "blending" 
                 zIndexRange = { [2, 2] } 
                 scale     = { 0.11 }
                 rotation  = { [ Math.PI * -0.05, Math.PI * 0.2, Math.PI * 0.04] }
                 position  = { [0, 4.4, -0.1] }
                 style     = { {backgroundColor: "black"} }
                 transform>

        <div className="flex flex-col text-[10em] text-white font-bold mr-9 items-center justify-center font-ChalkFont" >
            <button className="flex my-12 after:content-[''] after:bg-white after:h-8 after:left-0 after:w-[0%] after:bottom-[1270px] after:duration-200 after:hover:w-[95%] after:absolute"
                    onClick = { () =>  { playBoardClickSound(); setPageSelected(SelectedPage.AboutMe); } }>
                About me
            </button>

            <button className="flex my-44 after:content-[''] after:bg-white after:h-8 after:left-0 after:w-[0%] after:bottom-[770px]  after:duration-200 after:hover:w-[95%] after:absolute"
                    onClick = { () => { playBoardClickSound(); setPageSelected(SelectedPage.Projects); }  }>
                Projects
            </button>

            <div className="flex flex-row space-x-[250px] ml-[150px]">
                <button className="flex">
                    <a href="https://www.linkedin.com/in/hassen-ben-abid/" target = "_blank" onClick = { () => playBoardClickSound() } >
                        <img src="./UI/LinkedInIcon.png" className=" mt-[180px] scale-[3.5] scale duration-200 hover:scale-[4.5]" ></img>
                    </a>
                </button>
                <button className="flex">
                <a onClick = { () => mute() } >
                        <img ref = { musicStateIcon } src = { DefaultParams.MUSIC_ON_ICON } className=" scale-[0.6] scale duration-200 hover:scale-[0.77]" ></img>
                    </a>
                </button>
            </div>

        </div>

    </Html>
}