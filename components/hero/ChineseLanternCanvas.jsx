"use client";

import React, { Suspense, useRef, useState, useEffect, useMemo, Component } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

const StylizedChineseLantern = ({ reducedMotion, isMobile }) => {
  const parallaxGroupRef = useRef(null);
  const lanternModelRef = useRef(null);
  const tasselRef = useRef(null);
  const accumulatedTimeRef = useRef(0);
  const { pointer } = useThree();

  // Memoize materials to prevent unnecessary re-allocations
  const materials = useMemo(() => {
    return {
      silkRed: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#F04444'),
        emissive: new THREE.Color('#d92626'),
        emissiveIntensity: 0.28,
        roughness: 0.35,
        metalness: 0.05,
        transmission: 0.15,
        thickness: 0.5,
        clearcoat: 0.2,
      }),
      goldTrim: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#F5B841'),
        roughness: 0.25,
        metalness: 0.85,
      }),
      darkWood: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#3A2318'),
        roughness: 0.7,
      }),
      tasselSilk: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#E03131'),
        roughness: 0.45,
      }),
    };
  }, []);

  // Generate 8 rotational ribs for the lantern cage
  const ribAngles = useMemo(
    () => Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4),
    []
  );

  useFrame((state, delta) => {
    if (!parallaxGroupRef.current || !lanternModelRef.current) return;

    if (reducedMotion) {
      // Static gentle pose for reduced-motion preference
      parallaxGroupRef.current.rotation.set(0, 0, 0);
      lanternModelRef.current.rotation.set(0, -0.3, 0);
      if (tasselRef.current) tasselRef.current.rotation.set(0, 0, 0);
      return;
    }

    // 1. Clamp delta to max 0.05s (50ms). This prevents wild math spikes when
    // returning from inactive browser tabs, backgrounding, or CPU pauses.
    const safeDelta = Math.min(delta, 0.05);

    // 2. Accumulate render time monotonically so there are zero time jumps on tab focus
    accumulatedTimeRef.current += safeDelta;
    const time = accumulatedTimeRef.current;

    // 3. Frame-rate independent exponential damping factor (strictly bounded between 0 and 1)
    const dampingAlpha = 1 - Math.exp(-4.5 * safeDelta);

    // 4. Smooth mouse-based parallax tilt applied to outer anchor group
    const targetParallaxX = isMobile ? 0 : pointer.y * 0.18;
    const targetParallaxY = isMobile ? 0 : pointer.x * 0.35;
    const targetParallaxZ = isMobile ? 0 : -pointer.x * 0.08;

    parallaxGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      parallaxGroupRef.current.rotation.x,
      targetParallaxX,
      dampingAlpha
    );
    parallaxGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      parallaxGroupRef.current.rotation.y,
      targetParallaxY,
      dampingAlpha
    );
    parallaxGroupRef.current.rotation.z = THREE.MathUtils.lerp(
      parallaxGroupRef.current.rotation.z,
      targetParallaxZ,
      dampingAlpha
    );

    // 5. Continuous, smooth axial spin on inner model (never jumps or accelerates)
    lanternModelRef.current.rotation.y =
      (lanternModelRef.current.rotation.y + safeDelta * 0.22) % (Math.PI * 2);

    // Subtle gentle idle breathing sway
    lanternModelRef.current.rotation.x = Math.sin(time * 1.2) * 0.03;
    lanternModelRef.current.rotation.z = Math.cos(time * 0.9) * 0.025;

    // 6. Secondary counter-sway on the lower silk tassel
    if (tasselRef.current) {
      tasselRef.current.rotation.z =
        Math.sin(time * 2.1 - 0.6) * 0.06 - lanternModelRef.current.rotation.z * 0.5;
      tasselRef.current.rotation.x =
        Math.cos(time * 1.7 - 0.4) * 0.04;
    }
  });

  const baseScale = isMobile ? 0.78 : 1.05;

  return (
    <group
      ref={parallaxGroupRef}
      position={isMobile ? [0, 0.15, 0] : [1.35, 0.25, 0]}
      scale={baseScale}
    >
      <group ref={lanternModelRef}>
        {/* Warm Internal Lantern Point Light */}
        <pointLight
          position={[0, 0, 0]}
          intensity={2.2}
          distance={5}
          color="#FF9E44"
        />

        {/* Top Hanging Cord & Golden Ring */}
        <mesh position={[0, 1.85, 0]} material={materials.darkWood}>
          <cylinderGeometry args={[0.025, 0.025, 0.7, 12]} />
        </mesh>
        <mesh position={[0, 1.5, 0]} material={materials.goldTrim}>
          <torusGeometry args={[0.12, 0.03, 12, 24]} />
        </mesh>

        {/* Upper Ornate Golden Cap */}
        <mesh position={[0, 1.22, 0]} material={materials.goldTrim}>
          <cylinderGeometry args={[0.42, 0.68, 0.22, 32]} />
        </mesh>
        <mesh position={[0, 1.35, 0]} material={materials.darkWood}>
          <cylinderGeometry args={[0.25, 0.42, 0.1, 32]} />
        </mesh>

        {/* Main Squashed Spherical Red Silk Lantern Body */}
        <mesh
          position={[0, 0.2, 0]}
          scale={[1.18, 0.92, 1.18]}
          material={materials.silkRed}
          castShadow
        >
          <sphereGeometry args={[1.15, 48, 36]} />
        </mesh>

        {/* Decorative Golden Equator Band */}
        <mesh
          position={[0, 0.2, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={materials.goldTrim}
        >
          <torusGeometry args={[1.355, 0.018, 12, 64]} />
        </mesh>

        {/* Vertical Curved Golden Ribs */}
        {ribAngles.map((angle, idx) => (
          <mesh
            key={idx}
            position={[0, 0.2, 0]}
            rotation={[0, angle, 0]}
            scale={[1.185, 0.925, 1.185]}
            material={materials.goldTrim}
          >
            <torusGeometry args={[1.15, 0.016, 10, 48]} />
          </mesh>
        ))}

        {/* Lower Ornate Golden Cap */}
        <mesh position={[0, -0.82, 0]} material={materials.goldTrim}>
          <cylinderGeometry args={[0.65, 0.4, 0.2, 32]} />
        </mesh>
        <mesh position={[0, -0.95, 0]} material={materials.darkWood}>
          <cylinderGeometry args={[0.4, 0.22, 0.08, 32]} />
        </mesh>

        {/* Animated Lower Silk Tassel Assembly */}
        <group ref={tasselRef} position={[0, -1.0, 0]}>
          {/* Golden Knot Bead */}
          <mesh position={[0, -0.12, 0]} material={materials.goldTrim}>
            <sphereGeometry args={[0.1, 16, 16]} />
          </mesh>

          {/* Connecting Cord */}
          <mesh position={[0, -0.25, 0]} material={materials.tasselSilk}>
            <cylinderGeometry args={[0.03, 0.03, 0.25, 12]} />
          </mesh>

          {/* Tassel Gold Crown */}
          <mesh position={[0, -0.4, 0]} material={materials.goldTrim}>
            <cylinderGeometry args={[0.09, 0.13, 0.12, 20]} />
          </mesh>

          {/* Flowing Red Silk Tassel Skirt */}
          <mesh position={[0, -0.85, 0]} material={materials.tasselSilk}>
            <cylinderGeometry args={[0.12, 0.22, 0.85, 24]} />
          </mesh>
        </group>
      </group>
    </group>
  );
};

// Error Boundary to gracefully handle WebGL context loss or unsupported devices
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export const ChineseLanternCanvas = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    const checkViewport = () => setIsMobile(window.innerWidth < 1024);
    checkViewport();
    window.addEventListener('resize', checkViewport, { passive: true });

    // Pause WebGL rendering loop when Hero section is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkViewport);
      observer.disconnect();
    };
  }, []);

  return (
    <WebGLErrorBoundary fallback={<div className="sr-only">Interactive 3D Lantern</div>}>
      <div
        ref={containerRef}
        className="w-full h-full pointer-events-auto transform-gpu will-change-transform"
        aria-hidden="true"
      >
        <Canvas
          frameloop={isVisible ? "always" : "never"}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true,
            precision: 'mediump',
          }}
          dpr={isMobile ? 1 : [1, 1.5]}
          camera={{ position: [0, 0, 5.2], fov: 42 }}
        >
          <Suspense fallback={null}>
            {/* Warm, sun-drenched lighting matching the village illustration */}
            <ambientLight intensity={1.1} color="#FFFDF9" />
            <directionalLight
              position={[5, 6, 4]}
              intensity={1.8}
              color="#FFF5E4"
            />
            <directionalLight
              position={[-4, 2, -2]}
              intensity={0.7}
              color="#D9EEFF"
            />

            <Environment preset="sunset" />

            <Float
              speed={reducedMotion ? 0 : 1.8}
              rotationIntensity={reducedMotion ? 0 : 0.15}
              floatIntensity={reducedMotion ? 0 : 0.45}
              floatingRange={[-0.12, 0.12]}
            >
              <StylizedChineseLantern
                reducedMotion={reducedMotion}
                isMobile={isMobile}
              />
            </Float>

            <ContactShadows
              position={isMobile ? [0, -1.8, 0] : [1.35, -1.85, 0]}
              opacity={0.22}
              scale={4.5}
              blur={2.4}
              far={3.5}
              color="#3A2318"
              resolution={256}
              frames={1}
            />
          </Suspense>
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
};

export default ChineseLanternCanvas;
