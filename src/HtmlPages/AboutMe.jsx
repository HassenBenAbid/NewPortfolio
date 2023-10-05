import { Html } from "@react-three/drei";
import useSound from "use-sound";
import DefaultParams from "../DefaultParams";

export default function AboutMe( { isFocused, onCloseCallback} )
{
    const [ playPublicityDisplaySound ] = useSound("./Sound/PublicityDisplayClick.wav", {
        volume: DefaultParams.UI_SOUND_VOLUME
    });

    return <Html className   = " w-[730px] h-[1040px] bg-[#DFDFDE] select-none" 
                 occlude     = "blending" 
                 zIndexRange = { isFocused ? [10000, 0] : [0, 0] /* We want to make sure that when the page isn't focused it doesn't take priority on the z index. */ } 
                 position    = { [-16.9,  5.925, -13.5] }
                 rotation    = { [0, Math.PI * -0.5 , 0] }
                 scale       = { 0.19 }
                 transform>
    

        <div>
            { isFocused ?
                <div> 
                    {/* This will allow the user to get back to the main scene. */}
                    <div className="flex flex-row h-[60px]" >
                        <div className="flex bg-[#4FAA6D] w-[505px] border-b-[15px] border-b-[#DFDFDE]"></div>
                        <div className="flex bg-[#FE0000] text-[#DFDFDE] w-[225px] cursor-pointer font-SpaceMono font-bold items-center justify-center text-2xl border-b-[15px] border-b-[#DFDFDE]
                            hover:border-b-[0px]
                            translation-all duration-150" onClick = {  () => { playPublicityDisplaySound(); onCloseCallback(); } }>Back</div>
                    </div>
                    
                    <div className = "mx-2 mt-6 font-bold text-[#4FAA6D] text-[25px] font-SpaceMono border-l-4 border-[#4FAA6D]" > 
                        <div className=" ml-2" >
                            Hello there! <br /> <br /> 
                            I'm Hassen, an enthusiastic and dynamic software and game programmer. My journey into the realm of programming began at a young age, igniting my unwavering passion. 
                            I still vividly remember crafting my very first game at the age of 14, using QT and C++, setting the stage for my adventurous career. <br /> <br />
        
                            My academic foundation in computer science is rock-solid, and I've already amassed over two years of invaluable experience in the game industry where I Worked alongside 
                            diverse teams from across the globe which has enriched my professional journey. <br /> <br />
        
                            I invite you to explore this glimpse into my world to not only delve into my extensive work history but also to discover the exciting personal projects I've passionately undertaken. <br /> <br />
        
                            Welcome to my universe!
                        </div>
                    </div>

                    {/* Clicking on this will allow the user to download my resume. */}
                    <a className="text-5xl text-[#4FAA6D] font-bold font-SpaceMono mt-14 mb-1 flex flex-col justify-center items-center border-x-[150px] border-[#4FAA6D]
                      hover:border-x-[240px]
                      translation-all duration-150" href="https://www.linkedin.com/in/hassen-ben-abid/" target="_blank" onClick = { () => playPublicityDisplaySound() }> 
                        Resume 
                    </a>
                </div>  
            : <div>
                <div className = "bg-[#FE0000] w-[730px] h-[80px] mb-[50px]"></div>
                <div className = "flex justify-center text-[75px] font-SpaceMono font-bold text-[#FE0000] " >
                    HASSEN'S CANTINA
                </div>

                <div className = "flex justify-center font-SpaceMono font-bold text-[30px] mb-[50px] text-[#FE0000]">
                    Where you can get the worst drink in town!
                </div>

                <svg className="w-[250px] h-[100px] ml-[250px] mt-10 text-gray-800 dark:text-[#FE0000]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

                <svg className="w-[250px] h-[200px] ml-[50px] mt-2 text-gray-800 dark:text-[#FE0000]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

                <svg className="w-[300px] h-[150px] ml-[350px] mt-2 text-gray-800 dark:text-[#FE0000]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

                <div className = "bg-[#FE0000] w-[730px] h-[190px] mt-[50px]"></div>

            </div> }
        </div>

    </Html>
}