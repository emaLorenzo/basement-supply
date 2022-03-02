/* eslint-disable react/jsx-props-no-spreading */

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export const Cubic = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('cubic.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[1, 1, 1]}
        rotation={[0, 1, 0]}
        scale={0.1}
      />
    </group>
  );
};

useGLTF.preload('cubic.glb');
