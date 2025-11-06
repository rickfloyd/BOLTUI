'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GlobeAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const clock = new THREE.Clock();

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const uniforms = {
      u_time: { type: 'f', value: 1.0 },
      u_resolution: { type: 'v2', value: new THREE.Vector2() },
      u_mouse: { type: 'v2', value: new THREE.Vector2() },
    };

    const geometry = new THREE.SphereGeometry(15, 64, 64);
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float u_time;

        // 2D Random
        float random (vec2 st) {
            return fract(sin(dot(st.xy,
                                 vec2(12.9898,78.233)))*
                43758.5453123);
        }

        void main() {
            vec2 st = vUv * 3.0; // Scale the UV coordinates

            // Animate with time
            st += u_time * 0.1;

            // Create color patterns with sine waves
            float r = 0.5 + 0.5 * sin(st.x * 2.0 + u_time);
            float g = 0.5 + 0.5 * sin(st.y * 2.0 + u_time * 0.8 + 1.0);
            float b = 0.5 + 0.5 * cos(st.x * 1.5 + st.y * 1.5 + u_time * 1.2);

            // Mix colors - hot pink, orange, neon blue
            vec3 color1 = vec3(1.0, 0.078, 0.576); // Hot Pink
            vec3 color2 = vec3(1.0, 0.647, 0.0);   // Fluorescent Orange
            vec3 color3 = vec3(0.0, 1.0, 1.0);     // Neon Blue/Cyan

            vec3 finalColor = mix(color1, color2, r);
            finalColor = mix(finalColor, color3, g);
            finalColor = mix(finalColor, vec3(b), 0.5);

            gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      uniforms.u_time.value = clock.getElapsedTime();
      sphere.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div id="animation-container" ref={containerRef}></div>
      <div id="title-overlay">AI QUANTUM CHARTS</div>
    </>
  );
};

export default GlobeAnimation;
