import { useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import { useBox, useContactMaterial } from '@react-three/p2';

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

export const Scene = () => {
  const { viewport } = useThree();

  useContactMaterial(groundMaterial, shapeMaterial, {
    friction: 0,
    restitution: 1.3,
  });
  useContactMaterial(shapeMaterial, shapeMaterial, {
    friction: 0,
    restitution: 1.3,
  });

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

  return (
    <Suspense fallback={null}>
      <CubicLeft />
      <CubicRight />
    </Suspense>
  );
};
