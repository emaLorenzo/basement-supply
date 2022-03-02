import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useViewportScroll } from 'framer-motion';
/* @ts-ignore */
import { MeshLine, MeshLineMaterial } from 'three.meshline';

extend({ MeshLine, MeshLineMaterial });

export const Cubic = ({ ...props }) => {
  const { scrollY } = useViewportScroll();

  const group = React.useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF('cubic.glb');
  const edges = React.useMemo(
    /* @ts-ignore */
    () => new THREE.EdgesGeometry(nodes.Cube.geometry, 10),
    [nodes]
  );

  useFrame(() => {
    group.current.rotation.x += 0.01;
    group.current.rotation.x += scrollY.getVelocity() * 0.0002;
    group.current.rotation.z += 0.01;
    group.current.rotation.z += scrollY.getVelocity() * 0.0002;

    // group.current.position.x += 0.005;
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
