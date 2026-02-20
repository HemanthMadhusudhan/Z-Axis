import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Sparkles } from '@react-three/drei';
import Logo3D from './Logo3D';

const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                        <Logo3D />
                    </Float>
                    {/* Add some industrial sparkles */}
                    <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#FFB800" />
                </Suspense>

                {/* Environment for reflections */}
                {/* <Environment preset="city" /> */}
            </Canvas>
        </div>
    );
};

export default HeroScene;
