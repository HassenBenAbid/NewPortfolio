import { Vector3 } from "three"
import * as THREE from "three"

//Check if the two specified vectors are nearly equals or not using the specified epsilon.
export function VectorsNearlyEqual(vector1, vector2, epsilon)
{
    return Math.abs(vector1.x - vector2.x) < epsilon && Math.abs(vector1.y - vector2.y) < epsilon && Math.abs(vector1.z - vector2.z) < epsilon
}

export function VectorDamp(vector1, vector2, lambda, deltaTime)
{
    var x = THREE.MathUtils.damp(vector1.x, vector2.x, lambda, deltaTime);
    var y = THREE.MathUtils.damp(vector1.y, vector2.y, lambda, deltaTime);
    var z = THREE.MathUtils.damp(vector1.z, vector2.z, lambda, deltaTime);

    return new Vector3(x, y, z);
}