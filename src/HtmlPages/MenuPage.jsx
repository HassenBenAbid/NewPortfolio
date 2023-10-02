import { Html } from "@react-three/drei";
import { SelectedPage } from "../App.jsx";

export default function MenuPage( { setPageSelected } )
{
    return <Html className = "MenuStandPage select-none" 
                 occlude   = "blending" 
                 zIndexRange = { [2, 2] } 
                 scale     = { 0.11 }
                 rotation  = { [ Math.PI * -0.06, Math.PI * 0.25, Math.PI * 0.04] }
                 position  = { [0, 4.4, -0.1] }
                 style     = { {backgroundColor: "black"} }
                 transform>

        <div className="flex flex-col text-10xl text-white font-bold mr-9 items-center justify-center font-ChalkFont" >
            <button className="flex my-12 after:content-[''] after:bg-white after:h-8 after:left-0 after:w-[0%] after:bottom-[1270px] after:duration-200 after:hover:w-[95%] after:absolute"
                    onClick = { () =>  setPageSelected(SelectedPage.AboutMe) }>
                About me
            </button>

            <button className="flex my-44 after:content-[''] after:bg-white after:h-8 after:left-0 after:w-[0%] after:bottom-[770px]  after:duration-200 after:hover:w-[95%] after:absolute"
                    onClick = { () =>  setPageSelected(SelectedPage.Projects) }>
                Projects
            </button>

            <button>
                <a href="https://www.linkedin.com/in/hassen-ben-abid/" target = "_blank" >
                    <img src="./UI/LinkedInIcon.png" className=" mt-32 scale-[3.5] scale duration-200 hover:scale-[4.5]" ></img>
                </a>
            </button>
        </div>

    </Html>
}