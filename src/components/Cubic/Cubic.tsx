/* eslint-disable react/jsx-props-no-spreading */
/* @ts-ignore */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useViewportScroll } from 'framer-motion';
/* @ts-ignore */
import { MeshLine, MeshLineMaterial } from 'three.meshline';
import { Outline, Glitch, EffectComposer } from '@react-three/postprocessing';
import { BlendFunction, Resizer, KernelSize } from 'postprocessing';

extend({ MeshLine, MeshLineMaterial });

export const Cubic = ({ ...props }) => {
  const { scrollY } = useViewportScroll();

  React.useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

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
    group.current.rotation.x += scrollY.getVelocity() * 0.0002;
    /* @ts-ignore */
    group.current.rotation.z += 0.01;
    group.current.rotation.z += scrollY.getVelocity() * 0.0002;

    // group.current.position.x += 0.005;
  });

  return (
    <>
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
      <EffectComposer>
        <Outline
          selection={[group]} // selection of objects that will be outlined
          selectionLayer={10} // selection layer
          blendFunction={BlendFunction.SCREEN} // set this to BlendFunction.ALPHA for dark outlines
          // patternTexture={null} // a pattern texture
          edgeStrength={5} // the edge strength
          pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
          visibleEdgeColor={0xffffff} // the color of visible edges
          hiddenEdgeColor={0x22090a} // the color of hidden edges
          width={Resizer.AUTO_SIZE} // render width
          height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          blur={false} // whether the outline should be blurred
          xRay // indicates whether X-Ray outlines are enabled
        />
      </EffectComposer>
    </>
  );
};

useGLTF.preload('cubic.glb');
