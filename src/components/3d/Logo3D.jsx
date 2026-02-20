import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import logoUrl from '../../assets/logo-new.png';

const Logo3D = () => {
    const mesh = useRef();
    // Load texture
    const texture = useLoader(TextureLoader, logoUrl);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Gentle floating
        mesh.current.position.y = Math.sin(time / 1.5) * 0.2;
        // Slow rotation
        mesh.current.rotation.y = Math.sin(time / 2) * 0.3; // Swing left-right
        mesh.current.rotation.x = Math.sin(time / 3) * 0.1; // Tilt up-down
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            {/* Plane Geometry for image */}
            <planeGeometry args={[5, 3]} />
            <meshStandardMaterial
                map={texture}
                transparent={true}
                side={THREE.DoubleSide}
                metalness={0.5}
                roughness={0.5}
            />
        </mesh>
    );
};

export default Logo3D;
