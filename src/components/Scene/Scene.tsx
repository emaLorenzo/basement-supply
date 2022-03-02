import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { Cubic } from '@/components';

export const Scene = () => (
  <Canvas dpr={[1, 2]} camera={{ zoom: 50, position: [0, 0, 100] }}>
    <Suspense fallback={null}>
      {/* <OrthographicCamera makeDefault /> */}
      <Cubic position={[-1.3, -0.2, 1]} rotation={[0.7, 1, 0]} />
      <Cubic position={[1.4, 0.1, 1]} rotation={[1, 2, 0]} />
    </Suspense>
  </Canvas>
);
