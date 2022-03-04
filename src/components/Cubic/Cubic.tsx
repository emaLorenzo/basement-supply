import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { useBox, useCompoundBody } from '@react-three/p2';
import { vec2 } from 'p2-es';
import { useViewportScroll } from 'framer-motion';
/* @ts-ignore */
import { MeshLine, MeshLineMaterial } from 'three.meshline';

extend({ MeshLine, MeshLineMaterial });

export const Cubic = ({ position, material, ...props }) => {
  const { scrollY } = useViewportScroll();

  const mesh = React.useRef<THREE.Group>(null!);
  const lines = React.useRef<THREE.Group>(null!); /// TODO: type is wrong

  const { nodes, materials } = useGLTF('cubic.glb');
  const edges = React.useMemo(
    /* @ts-ignore */
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
    // angle: Math.PI / 2,
    fixedRotation: false,
    args: [0.3, 0.3],
    material,
    // angularDamping: 0.9,
    onCollide: (e) => {
      // @ts-ignore
      const normal = e.contact.contactNormal;
      // vec2.scale(normal, normal, -0.3);
      api.applyTorque(vec2.create());
    },
  }));

  api.applyForce(vec2.fromValues(7, 7), vec2.create());

  useFrame(({ clock }) => {
    mesh.current.rotation.y += 0.01;
    lines.current.rotation.y += 0.01;

    mesh.current.rotation.y += scrollY.getVelocity() * 0.0002;
    lines.current.rotation.y += scrollY.getVelocity() * 0.0002;
    // ref.current.rotation.z += 0.01;
    // api.position.set(Math.sin(clock.getElapsedTime()) * 3, 0);
    // api.applyForce([0, 0, 0.01]);
    // group.current.position.x += 0.005;
  });

  return (
    <group
      ref={ref}
      position={position}
      {...props}
      dispose={null}
      scale={viewport.width / 1500}
    >
      {/* @ts-ignore  */}
      <mesh
        ref={mesh}
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        rotation={[0, 0, 10]}
      >
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

useGLTF.preload('cubic.glb');
