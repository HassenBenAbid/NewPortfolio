import { useRef }      from "react";
import MenuStand       from "./ModelsJs/MenuStand.jsx"
import { useControls } from "leva";
import MenuPage        from "./HtmlPages/MenuPage.jsx";

export default function MainMenuStand( { setPageSelected } )
{
    //Only for debug!!!
    const helperControlsObject = useRef(); 

    const { helperControls } = useControls(
    { 
        helperControls : { x: 0, y: 0, z:0  }
    });
    //End only debug!!!

    return <>

        <group position   = { [-12.50, -1.20, 12] } >
            <MenuStand scale = { 2.2 } rotation-y = {-Math.PI * 0.25}  />
            <MenuPage setPageSelected = { setPageSelected } />
        </group>

        {/* <TransformControls object = { helperControlsObject } onMouseUp = { x => console.log(helperControlsObject.current.position) } /> */}
    </>  
}