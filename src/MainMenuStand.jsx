import MenuStand       from "./modelsjs/MenuStand.jsx"
import MenuPage        from "./HtmlPages/MenuPage.jsx";
import { BakeShadows } from "@react-three/drei";

export default function MainMenuStand( { setPageSelected, setMusicIsPlaying } )
{
    return <>

        <group position   = { [-9.50, -1.20, 12] } >
            <MenuStand scale = { 2.2 } rotation-y = {-Math.PI * 0.40}  />
            <BakeShadows />
            <MenuPage setPageSelected = { setPageSelected } setMusicIsPlaying = { setMusicIsPlaying } />
        </group>
    </>  
}