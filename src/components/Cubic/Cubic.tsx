import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { useCompoundBody } from '@react-three/p2';
import { vec2 } from 'p2-es';
import { useViewportScroll } from 'framer-motion';
/* @ts-ignore */
import { MeshLine, MeshLineMaterial } from 'three.meshline';

extend({ MeshLine, MeshLineMaterial });

export const Cubic = ({ position, material, ...props }: any) => {
  const { scrollY } = useViewportScroll();

  const mesh = React.useRef<THREE.Mesh>(null!);
  const lines = React.useRef<THREE.LineSegments>(null!);

  const { nodes, materials } = useGLTF('models/cubic.glb') as any;
  const edges = React.useMemo(
    () => new THREE.EdgesGeometry(nodes.Cube.geometry, 10),
    [nodes]
  );
  const { viewport } = useThree();
  const [ref, api] = useCompoundBody(() => ({
    shapes: [
      {
        type: 'Box',
        args: [0.1, 0.5],
        position: [0.0, 0.0],
        material,
      },
      {
        type: 'Box',
        args: [0.5, 0.1],
        position: [0.0, 0],
        material,
      },
    ],
    mass: 0.7,
    position,
    fixedRotation: false,
    args: [0.3, 0.3],
    material,
  }));

  api.applyForce(vec2.fromValues(7, 7), vec2.create());

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    lines.current.rotation.y += 0.01;

    mesh.current.rotation.y += scrollY.getVelocity() * 0.0002;
    lines.current.rotation.y += scrollY.getVelocity() * 0.0002;
  });

  return (
    <group
      ref={ref}
      {...props}
      position={position}
      dispose={null}
      scale={viewport.width / 1500}
    >
      <mesh
        ref={mesh}
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        rotation={[0, 0, 10]}
      />
      <lineSegments
        ref={lines}
        geometry={edges}
        renderOrder={100}
        rotation={[0, 0, 10]}
      >
        <lineBasicMaterial color="white" linewidth={20} />
      </lineSegments>
    </group>
  );
};

useGLTF.preload('models/cubic.glb');
