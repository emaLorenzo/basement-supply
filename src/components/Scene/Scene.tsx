import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Glitch, EffectComposer } from '@react-three/postprocessing';

import { Cubic } from '@/components';

export const Scene = () => (
  <Canvas dpr={[1, 2]} camera={{ zoom: 50, position: [0, 0, 100] }}>
    <Suspense fallback={null}>
      {/* <OrthographicCamera makeDefault /> */}
      <Cubic position={[-1.8, -0.5, 1]} rotation={[0.7, 1, 0]} />
      <Cubic position={[2, -0.1, 1]} rotation={[1, 2, 0]} />

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
  </Canvas>
);
