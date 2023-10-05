//This is just a simple sphere with some emissive effects and a point light which make the effect of a lamp.
export default function Lamp( { position = [ 0, 0, 0], emissiveColor = [0, 0, 1] } )
{
    return <>

    <mesh scale={ 0.8 } position = { position } >
            <sphereGeometry />
            
            <meshStandardMaterial emissive          = "blue" 
                                  emissiveIntensity = { 4.08 }  
                                  toneMapped        = { false } 
                                  color             ={ [0, 0, 6] } 
                                  opacity           ={ 1 } />

            <pointLight color     = { [0.3, 0.6, 1] } 
                        distance  = { 50 } 
                        intensity = { 40 }/>
    </mesh> 

    </>
}