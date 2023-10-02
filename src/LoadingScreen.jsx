import { Html, useProgress } from "@react-three/drei"

export default function LoadingScreen( { setLoaded } )
{
    const { progress } = useProgress();

    return <div>
        
        <div className="text-4xl text-red-600 flex justify-center items-center my-[24%]" >
            { progress != 100 ? <div>
                {progress} %
            </div>      
            : <div>
                <button onClick = { () => setLoaded(true) } >START</button>
            </div>
            }
        </div>
    
    </div>
}
