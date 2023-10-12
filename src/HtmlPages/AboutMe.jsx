import { Html } from "@react-three/drei";
import useSound from "use-sound";
import DefaultParams from "../DefaultParams";

export default function AboutMe( { isFocused, onCloseCallback} )
{
    const [ playPublicityDisplaySound ] = useSound("./Sound/PublicityDisplayClick.wav", {
        volume: DefaultParams.UI_SOUND_VOLUME
    });

    return <Html className   = " w-[1095px] h-[1570px] bg-[#DFDFDE] select-none" 
                 occlude     = "blending" 
                 zIndexRange = { isFocused ? [10000, 0] : [0, 0] /* We want to make sure that when the page isn't focused it doesn't take priority on the z index. */ } 
                 position    = { [-16.9,  5.925, -13.5] }
                 rotation    = { [0, Math.PI * -0.5 , 0] }
                 scale       = { 0.1255 }
                 transform>
    

        <div>
            { isFocused ?
                <div> 
                    {/* This will allow the user to get back to the main scene. */}
                    <div className="flex flex-row h-[80px]" >
                        <div className="flex bg-[#112A46] w-[770px] border-b-[15px] border-b-[#DFDFDE]"></div>
                        <div className="flex bg-[#FE0000] text-[#DFDFDE] w-[325px] cursor-pointer font-SpaceMono font-bold items-center justify-center text-[3.5em] border-b-[15px] border-b-[#DFDFDE]
                            hover:border-b-[0px]
                            translation-all duration-150" onClick = {  () => { playPublicityDisplaySound(); onCloseCallback(); } }>Back</div>
                    </div>
                    
                    <div className = "mx-2 mt-6 font-bold text-[#112A46] text-[2.8em] font-SpaceMono border-l-[10px] border-[#112A46]" > 
                        <div className=" ml-2" >
                            Hello there! <br />
                            I'm Hassen, an enthusiastic and dynamic software and game programmer. My journey into the realm of programming began at a young age, igniting my unwavering passion. 
                            I still vividly remember crafting my very first game at the age of 14, using QT and C++, setting the stage for my adventurous career. <br /> 
        
                            My academic foundation in computer science is rock-solid, and I've already amassed over two years of invaluable experience in the game industry where I Worked alongside 
                            diverse teams from across the globe which has enriched my professional journey. <br /> 
        
                            I invite you to explore this glimpse into my world to not only delve into my extensive work history but also to discover the exciting personal projects I've passionately undertaken. <br />
        
                            Welcome to my universe!
                        </div>
                    </div>

                    {/* Clicking on this will allow the user to download my resume. */}
                    <a className="text-[5em] text-[#112A46] font-bold font-SpaceMono mt-14 mb-1 flex flex-col justify-center items-center border-x-[150px] border-[#112A46]
                      hover:border-x-[340px]
                      translation-all duration-150" href="./misc/Resume.pdf" target="_blank" onClick = { () => playPublicityDisplaySound() }> 
                        Resume 
                    </a>
                </div>  
            : <div>
                <div className = "bg-[#112A46] w-[1095px] h-[100px] mb-[75px]"></div>
                <div className = "flex justify-center text-[7em] font-SpaceMono font-bold text-[#112A46] " >
                    HASSEN'S CANTINA
                </div>

                <div className = "flex justify-center font-SpaceMono font-bold text-[3em] mb-[70px] text-[#112A46]">
                    Where you can get the worst drink in town!
                </div>

                <svg className="w-[660px] h-[200px] ml-[250px] mt-10 text-gray-800 dark:text-[#112A46]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

                <svg className="w-[350px] h-[400px] ml-[50px] mt-2 text-gray-800 dark:text-[#112A46]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

                <svg className="w-[850px] h-[250px] ml-[350px] mt-2 text-gray-800 dark:text-[#112A46]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

                <div className = "bg-[#112A46] w-[1095px] h-[200px] mt-[55px]"></div>

            </div> }
        </div>

    </Html>
}