import Cantina      from "./modelsjs/Cantina";
import Lamp         from "./Lamp.jsx";
import { Sparkles } from "@react-three/drei";
import StreetLight  from "./StreetLight.jsx";

//This is the main object of the scene (cantina/bar + street).
export default function MainCantina()
{
    return <>
        <Cantina position = { [ 0, -1.25, 0 ] }
                 rotation = { [ 0, Math.PI * -0.5, 0 ] } />

        <StreetLight />

        <Sparkles position = { [1, 8, -16.5] } 
                  size     = { 5 } 
                  scale    = { [6, 12, 8] } 
                  count    = { 40 }
                  speed    = { 0.4 } />

        <Lamp position = { [ -14.59, 10.01, 12.03 ] } />
        <Lamp position = { [  14.59, 10.01, 12.03 ] } />

        {/*Led lamp*/}
        <mesh position   = { [ -2.47, 1.67, 6.34 ] } 
              scale      = { [ 0.25, 5.2, 0.25 ] }  
              rotation-y = { Math.PI * 0.75 }>

            <boxGeometry />
            <meshStandardMaterial color             = { [ 0.6 * 5, 0.55 * 5, 0 ] } 
                                  emissive          = "orange"
                                  emissiveIntensity = { 0.9 }
                                  toneMapped        = { false }
                                   />
            <pointLight color    = { [1, 1, 1] }  
                        distance = { 10 } 
                        position = { [ 0, 0, 0 ] }
                        intensity = { 15 }/>
        </mesh>
    </>
}