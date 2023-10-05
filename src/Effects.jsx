import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Effects()
{
    return <>

        <EffectComposer>
            <Bloom mipmapBlur intensity={1.5} luminanceThreshold={0.15} />
        </EffectComposer> 

    </>
}