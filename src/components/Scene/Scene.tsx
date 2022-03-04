import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import { Glitch, EffectComposer } from '@react-three/postprocessing';
import {
  useCircle,
  useBox,
  Physics,
  Debug,
  useContactMaterial,
} from '@react-three/p2';

import { Cubic } from '@/components';

const groundMaterial = {
  id: 1,
};
const shapeMaterial = {
  id: 2,
  friction: 0,
};

const CubicLeft = () => {
  const { viewport } = useThree();
  return (
    <Cubic
      position={[-viewport.width * 0.0075, -viewport.height * 0.0065, 1]}
      rotation={[0.7, 1, 0]}
      material={shapeMaterial}
    />
  );
};
const CubicRight = () => {
  const { viewport } = useThree();
  return (
    <Cubic
      position={[viewport.width * 0.0075, -viewport.height * 0.001, 1]}
      rotation={[1, 2, 0]}
      material={shapeMaterial}
    />
  );
};

// TODO: esto deberia estar en scene, y deberia sacar Canvas afuera de Scene
const Boundaries = () => {
  const { viewport } = useThree();

  useContactMaterial(groundMaterial, shapeMaterial, {
    friction: 0,
    restitution: 1.3,
  });
  useContactMaterial(shapeMaterial, shapeMaterial, {
    friction: 0,
    restitution: 1.3,
  });

  console.log(viewport.width, viewport.height);

  useBox(() => ({
    position: [0, 1.47],
    args: [viewport.width * 0.02, 0.1],
    material: groundMaterial,
  }));
  useBox(() => ({
    position: [2.35, 0],
    args: [0.1, viewport.height * 0.02],
    material: groundMaterial,
  }));
  useBox(() => ({
    position: [0, -1.47],
    args: [viewport.width * 0.02, 0.1],
    material: groundMaterial,
  }));
  useBox(() => ({
    position: [-2.35, 0],
    args: [0.1, viewport.height * 0.02],
    material: groundMaterial,
  }));
  return null;
  // <mesh ref={ref}>
  //   <boxGeometry
  //   // args={[props.args[0], props.args[1], 1]}
  //   />
  //   {/* <meshBasicMaterial color="white" /> */}
  // </mesh>
};

export const Scene = () => (
  <Canvas
    dpr={[1, 2]}
    camera={{ zoom: 50, position: [0, 0, 100] }}
    style={{ pointerEvents: 'none' }}
  >
    <Physics
      normalIndex={2}
      gravity={[0, 0]}
      defaultContactMaterial={{
        friction: 0,
        frictionStiffness: 0,
        stiffness: 0,
        surfaceVelocity: 0,
        restitution: 1,
        frictionRelaxation: 0,
        relaxation: 0,
      }}
    >
      {/* <Debug color="red" scale={1.0} linewidth={0.002} normalIndex={2}> */}
      <Suspense fallback={null}>
        <CubicLeft />
        <CubicRight />
        <Boundaries />
        {/* <EffectComposer>
        <Glitch
          delay={[2, 5]} // min and max glitch delay
          duration={[0.2, 0.5]} // min and max glitch duration
          strength={[0.05, 0.1]} // min and max glitch strength
          // mode={GlitchMode.SPORADIC} // glitch mode
          active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        />
      </EffectComposer> */}
      </Suspense>
      {/* </Debug> */}
    </Physics>
  </Canvas>
);
