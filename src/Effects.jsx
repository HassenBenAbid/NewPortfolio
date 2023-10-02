import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Effects()
{
    return <>

        <EffectComposer>
            <Bloom mipmapBlur intensity={2} luminanceThreshold={0.2} />
        </EffectComposer> 

    </>
}