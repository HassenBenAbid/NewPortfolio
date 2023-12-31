/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function MenuStand(props) {
  const { nodes, materials } = useGLTF("./models/MenuStand.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.989, 0, 0]} rotation={[-Math.PI, 0, -3.009]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.MainStandMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.BoardMaterial}
        />
      </group>
      <group position={[0.162, 0, 0]} rotation={[0, 0, 0.133]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.MainStandMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.BoardMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/MenuStand.glb");
