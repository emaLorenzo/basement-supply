import { Canvas } from '@react-three/fiber';
// import dynamic from 'next/dynamic';
import { Suspense, lazy } from 'react';

import { Cubic } from '@/components';

// const Cubic = dynamic(
//   () => import('..').then((components) => components.Cubic),
//   {
//     suspense: true,
//     ssr: true,
//   }
// );

export const Scene = () => (
  <Canvas>
    <Suspense fallback={null}>
      <spotLight
        position={[10, 20, 10]}
        penumbra={1}
        intensity={0.2}
        color="white"
      />
      <Cubic />
    </Suspense>
  </Canvas>
);
