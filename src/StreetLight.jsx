import { useEffect, useRef } from "react";
import { gsap }              from "gsap";

const MIN_DELAY_WOBBLE = 0.2;
const MAX_DELAY_WOBBLE = 0.4;

const Min_WOBBLE_COUNT = 8;
const MAX_WOBBLE_COUNT = 26;

const MIN_DELAY_BTW_WOBBLE = 5;
const MAX_DELAY_BTW_WOBBLE = 10;

export default function StreetLight()
{
    //These are the street spot light and target.
    const streetLight       = useRef();
    const streetLightTarget = useRef();

    //
    const streetLightAnimation = () => {
        var startDelay = RandomInterval(MIN_DELAY_BTW_WOBBLE, MAX_DELAY_BTW_WOBBLE);
        gsap.to(streetLight.current, { keyframes: WobbleLight(100, 60, 20), onComplete: streetLightAnimation, delay: startDelay, duration: 1.4 })
    };

    useEffect(() => 
    {
        //We make sure to set the street spot light at the start of the scene. 
        streetLight.current.target = streetLightTarget.current;
        streetLightAnimation();
    }, []);

    return <> 
        <spotLight ref      = { streetLight } 
                            position  = { [ 1, 14.5, -15.5] } 
                            intensity = { 100 } 
                            angle     = { Math.PI * 0.3 }
                            distance  = { 50 }
                            penumbra  = { 0.65 }
                            castShadow
                            shadow-mapSize-width  = { 1024 }
                            shadow-mapSize-height = { 1024 }
                            shadow-radius         = { 3.5 }
                            shadow-normalBias     = { 1 }
        />
        <mesh position = { [ 1, 0, -15.7  ] } ref = { streetLightTarget } />

    </>
}

//Return an array of objects with light intensity that can be passed to a spring.
function WobbleLight(/* The initial intensity of the light */initIntensity, midIntensity, /* The lowest intensity that the light can hit */lowIntensity)
{
    var wobbleCount    = Math.floor(RandomInterval(Min_WOBBLE_COUNT, MAX_WOBBLE_COUNT));
    var intensityArray = [wobbleCount++];

    for(var i = 0; i < wobbleCount; i++)
    {
        var delayTime = RandomInterval(MIN_DELAY_WOBBLE, MAX_DELAY_WOBBLE);

        intensityArray[i] = i % 2 == 0 ? {intensity: lowIntensity, delay: delayTime} 
                                       : {intensity: midIntensity, delay: delayTime};
    }

    intensityArray[wobbleCount++] = {intensity: initIntensity};

    return intensityArray;
}

//Give us a random number between the specified min and max.
function RandomInterval(min, max) { return (Math.random() * (max - min)) + min; } 