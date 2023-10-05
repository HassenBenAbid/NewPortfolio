import { useRef }      from "react";
import MenuStand       from "./modelsjs/MenuStand.jsx"
import { useControls } from "leva";
import MenuPage        from "./HtmlPages/MenuPage.jsx";

export default function MainMenuStand( { setPageSelected } )
{
    return <>

        <group position   = { [-12.50, -1.20, 12] } >
            <MenuStand scale = { 2.2 } rotation-y = {-Math.PI * 0.25}  />
            <MenuPage setPageSelected = { setPageSelected } />
        </group>
    </>  
}