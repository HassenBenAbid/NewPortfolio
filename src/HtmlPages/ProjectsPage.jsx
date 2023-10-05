import { Html } from "@react-three/drei";
import Project from "./Project";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import DefaultParams from "../DefaultParams";

const BLINKING_INTERVAL = 500;

const ProjectsState = {
    None        : 0, //This how the page will be before the player start it.
    Professional: 1, //This state will show all the professional projects.
    Personal    : 2  //This state will show all the personal projects.
}

//All the information about my professional projects.
var ProProjects = [{ 
    title      : "Strange Loop Games: Programmer",
    period     : "06/2021 - Present",
    videoLink  : "https://www.youtube.com/embed/ud_refZuQoA?rel=0",
    techUsed   : ["Unity", "C#", "Scrum(ClickUp)"],
    description: ["- Implemented new features on both the client and server side like the whole tooltip system.", 
                  "- Reworked and helped reworking many different systems like the chat and the settlement systems.",
                  "- Benchmarked and optimized a large chunk of the legacy code using both the .NET benchmark library and the unity profiler.",
                  "- Took the responsibility of mentoring a new intern and introducing him to our code base which later became an integral part of the team.",
                  "- Constantly debugged and fixed bugs and crashes in record time.",
                  "- Worked in an agile environment with an international team (used ClickUp)."],
    gitLink    : null
 }, {
    title      : "StolenPad Studio: Game developer",
    period     : "06/2021 - 08/2021",
    videoLink  : "https://www.youtube.com/embed/0KgrstnQSOY?rel=0",
    techUsed   : [ "Unity", "C#"],
    description: ["- Prototyped and developed a new hyper-casual game every two weeks.",
                  "- Coordinated my work with both an artist and an animator.",
                  "- Tested games on both android and iOS.",
                  "- Implemented different APIs to track the player progression and game statistics."],
    gitLink    : null
 }, {
    title      : "Amilcar Technologies: Game dev intern",
    period     : "01/2021 - 04/2021",
    videoLink  : "https://www.youtube.com/embed/VsLKklKha0M?rel=0",
    techUsed   : ["Unity", "C#"],
    description: ["- Implemented a base building system with a grid and some resource gathering and management.", 
                  "- Implemented a deck building system where the player unlocked and customized his multiple decks.",
                  "- Worked on a small RTS battle system where the player had the ability to spawn and control different types of units and fight against a basic AI."],
    gitLink    : null
 }];

//All the information about my personal projects
var PersonalProjects = [ {
    title      : "Cygnus3D: Small game engine",
    period     : "2019 - 2021",
    videoLink  : "https://www.youtube.com/embed/Xr4G_if2Zms",
    techUsed   : ["C++", "OpenGL"],
    description: ["- A small game engine that I developed using C++/OpenGL. It has a basic rendering, some physics implementation using the bullet library, a loading model system with skeletal animation and some basic lighting features. ",
                  "This was started as a way for me to understand the backbones of game engines but also as a challenge to push my boundaries and my understanding of computer science.",
                  "To approach this, I started by creating a small 2D game using C++ and openGL and from there I chose the features that I wanted to work on and made a roadmap for myself."],
    gitLink    : "https://github.com/HassenBenAbid/Cygnus3D"
}, {
    title      : "Untold Future: A Rogue-like game",
    period     : "2020",
    videoLink  : "https://www.youtube.com/embed/A7fQHOdjjb4",
    techUsed   : ["C#", "Unity"],
    description: ["- A rogue-like top down shooter where every new restart generates a new dungeon.",
                  "This was done by using BPS tree to create the boundaries of each room, then Delaunay triangulation to connect them and finally (with the help of some preset rules) the A* algorithm to create the corridors.",
                  "For the final touches, it chooses from a large pool of preset rooms the right ones for each position.",
                  "- I also developed my own AI system using a middle ground between pluggable AI and behavior trees to create different AI personalities.",
                  "Some local Coop functionalities were worked on but never implemented in the end.",
                  "- Note: All assets were imported from the Unity asset store."],
    gitLink    : null
}, {
    title      : "Project Occt: An android app",
    period     : "2021",
    videoLink  : "./UI/OcctDisplay.PNG",
    techUsed   : ["Kotlin", "Android Studio"],
    description: ["- An android app compatible with any device that supports miracast which helps in making digital acuity tests more affordable for everybody.",
                  "- The app casts, on any screen of the user choice, the different charts while transforming his smartphone into a simple remote controller.",
                  "- The available charts are : LogMar, Lea, tumbling but also a duochrome option and an astigmatism test. Plus a fun chart for the kids."],
    gitLink    : "https://github.com/HassenBenAbid/OccT"
}, {
    title      : "FearNot: 2D platformer game",
    period     : "2021",
    videoLink  : "https://www.youtube.com/embed/hEGC3Xegj4Y",
    techUsed   : ["C#", "Unity"],
    description: ["- For this game I created nearly all the used assets.",
                  "- This game was a huge adventure for me where I experimented with many new features that I never touched before starting from actually making the pixel art myself, using ragdolls instead of death animation to make it more satisfying and finally some simple procedural generation.",
                  "- A simple boss fight and some narrative were also implemented."],
    gitLink    : "https://github.com/HassenBenAbid/FearNot"
}];

var CurrentlyShownProjects = [];

 //This will allow us to create a projects page where it will contain all the professional and personal projects.
export default function ProjectsPage( { isFocused, onCloseCallback } )
{
    //This will be the current state of the project page, it's either on the main menu, showing professional projects or personal projects.
    const [ projectsState, setProjectsState ] = useState(ProjectsState.None); 
    const [ showText, setShowText ]           = useState(true); //This will help us set the blinking text effect.

    const [ playCommunicatorSound ] = useSound("./Sound/CommunicatorClick.wav", {
        volume: DefaultParams.UI_SOUND_VOLUME
    });

    //Update the state in which this page is in.
    const UpdateProjectsState = (state) => {
        switch (state) {
            case ProjectsState.Professional :
                CurrentlyShownProjects = ProProjects;
                break;
            case ProjectsState.Personal : 
                CurrentlyShownProjects = PersonalProjects;
                break;
            case ProjectsState.None : 
                CurrentlyShownProjects = [];
                onCloseCallback();
                break;
        }

        setProjectsState(state);
    };

    //This is used to make the blinking effect of the text.
    useEffect(() => {
        const blinkingInterval = setInterval(() => {
            setShowText((status) => !status);
        }, BLINKING_INTERVAL);

        return () => clearInterval(blinkingInterval);
    }, []);

    
    //This is used to close all projects and move out from the them.
    const PowerOffButton = () => {
        return <div className ='button bg-communicator-red rounded-full cursor-pointer select-none
                                active:translate-y-2  active:[box-shadow:0_4px_0_0_#c5262b,0_6px_0_0_#c5262b41]
                                active:border-b-[0px]
                                transition-all duration-150 [box-shadow:0_8px_0_0_#c5262b,0_13px_0_0_#c5262b41]
                                mx-20 my-10 py-5' onClick = { () =>  UpdateProjectsState(ProjectsState.None)}>
                    <span className ='flex flex-col justify-center items-center h-full text-communicator-white font-bold text-5xl'>POWER OFF</span>
                </div>
    }

    return <>
        <Html className   = "CommunicatorPage overflow-auto scrollbar-none select-none w-[1085px] h-[1235px]" 
          zIndexRange = { isFocused ? [10000, 2] : [1, 1] /* We want to make sure that when the page isn't focused it doesn't take priority on the z index. */ } 
          occlude     = "blending" 
          scale       = {0.0521} 
          rotation    = { [ Math.PI * -0.5, 0, Math.PI * 0.5] }  
          position    = { [0, 1.21, 0] } 
          style       = { {backgroundImage: `url("./UI/CommunicatorBackground.png")`} }
          transform
        >

            <div className="flex text-5xl text-white mt-16 items-center justify-center font-SpaceMono">

                <div className='button bg-communicator-red rounded-lg cursor-pointer select-none
                active:translate-y-2  active:[box-shadow:0_5px_0_0_#c5262b,0_6px_0_0_#c5262b41]
                active:border-b-[0px]
                transition-all duration-150 [box-shadow:0_10px_0_0_#c5262b,0_15px_0_0_#c5262b41]
                border-b-[1px] border-communicator-red' 
                onClick = { () => { playCommunicatorSound(); UpdateProjectsState(ProjectsState.Professional) } }>    
		            <span className='flex flex-col justify-center items-center text-communicator-white px-5 py-5 font-bold text-5xl'>Professional</span>
	            </div>

                <h1 className="text-communicator-red text-6xl font-extrabold mx-5">Projects</h1>

                <div className='button bg-communicator-red rounded-lg cursor-pointer select-none
                active:translate-y-2  active:[box-shadow:0_5px_0_0_#c5262b,0_6px_0_0_#c5262b41]
                active:border-b-[0px]
                transition-all duration-150 [box-shadow:0_10px_0_0_#c5262b,0_15px_0_0_#c5262b41]
                border-b-[1px] border-communicator-red' 
                onClick = { () => { playCommunicatorSound(); UpdateProjectsState(ProjectsState.Personal); }  }>
		            <span className='flex flex-col justify-center items-center text-communicator-white px-16 py-5 font-bold text-5xl'>Personal</span>
	            </div>
            </div>


            {/* Create each project individually using all the stored information about them. */}
            <div className="relativeflex flex-col space-y-6 mt-20">
                { projectsState != ProjectsState.None ? CurrentlyShownProjects.map((value, index) => {
                                                                return <Project key         = { index }
                                                                                title       = { value.title } 
                                                                                videoLink   = { value.videoLink } 
                                                                                techUsed    = { value.techUsed }
                                                                                period      = { value.period } 
                                                                                description = { value.description } 
                                                                                gitLink     = { value.gitLink } 
                                                                                clickSound  = { playCommunicatorSound } /> })
                                                      : null
                }
            </div>

            { projectsState == ProjectsState.None ? <div style = { { opacity: showText ? 1 : 0 } } className = "flex justify-center text-5xl py-96 mb-24 text-communicator-white font-SpaceMono font-extrabold ">
                                                        Choose what projects to check... 
                                                    </div> 
                                                  : null }


            <div className ='button bg-communicator-red rounded-full cursor-pointer select-none
                             active:translate-y-2  active:[box-shadow:0_4px_0_0_#c5262b,0_6px_0_0_#c5262b41]
                             active:border-b-[0px]
                             transition-all duration-150 [box-shadow:0_8px_0_0_#c5262b,0_13px_0_0_#c5262b41]
                             mx-20 my-10 py-5' onClick = { () =>  { playCommunicatorSound(); UpdateProjectsState(ProjectsState.None); } }>
                    <span className ='flex flex-col justify-center items-center h-[50px] text-communicator-white font-bold text-5xl'>POWER OFF</span>
            </div>

        </Html>
    </>
}