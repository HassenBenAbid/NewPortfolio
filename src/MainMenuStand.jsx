import { useRef }      from "react";
import MenuStand       from "./modelsjs/MenuStand.jsx"
import { useControls } from "leva";
import MenuPage        from "./HtmlPages/MenuPage.jsx";
import { BakeShadows } from "@react-three/drei";

export default function MainMenuStand( { setPageSelected } )
{
    return <>

        <group position   = { [-12.50, -1.20, 12] } >
            <MenuStand scale = { 2.2 } rotation-y = {-Math.PI * 0.30}  />
            <BakeShadows />
            <MenuPage setPageSelected = { setPageSelected } />
        </group>
    </>  
}