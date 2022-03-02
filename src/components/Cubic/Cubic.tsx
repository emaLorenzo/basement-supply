/* eslint-disable react/jsx-props-no-spreading */
/* @ts-ignore */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
/* @ts-ignore */
import { MeshLine, MeshLineMaterial } from 'three.meshline';

extend({ MeshLine, MeshLineMaterial });

export const Cubic = ({ ...props }) => {
  const group = React.useRef(null);
  const { nodes, materials } = useGLTF('cubic.glb');
  const edges = React.useMemo(
    /* @ts-ignore */
    () => new THREE.EdgesGeometry(nodes.Cube.geometry, 10),
    [nodes]
  );

  useFrame(() => {
    /* @ts-ignore */
    group.current.rotation.x += 0.01;
    /* @ts-ignore */
    group.current.rotation.z += 0.01;
  });

  return (
    <group ref={group} {...props} dispose={null} scale={0.15}>
      {/* @ts-ignore  */}
      <mesh geometry={nodes.Cube.geometry} material={materials.Material}>
        {/* geometry={nodes.Cube.geometry} material={materials.Material} */}
        {/* <meshLine attach="geometry" points={nodes.Cube.geometry} />
        <meshLineMaterial
          attach="material"
          // transparent
          depthTest={false}
          lineWidth={4}
          color="white"
          dashArray={0.05}
          dashRatio={0.95}
        /> */}
      </mesh>
      <lineSegments geometry={edges} renderOrder={100}>
        <lineBasicMaterial color="white" linewidth={20} />
      </lineSegments>
    </group>
  );
};

useGLTF.preload('cubic.glb');
