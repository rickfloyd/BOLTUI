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
        
        // 2D Noise
        float noise (in vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);

            // Four corners in 2D of a tile
            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));

            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(a, b, u.x) +
                    (c - a)* u.y * (1.0 - u.x) +
                    (d - b) * u.x * u.y;
        }


        void main() {
            vec2 st = vUv * 3.0; // Scale UV
            st.x += u_time * 0.05; // Horizontal movement

            // Use noise to create organic patterns
            float n = noise(st * 1.5 + u_time * 0.1);

            // Define the three colors
            vec3 color1 = vec3(1.0, 0.078, 0.576); // Hot Pink
            vec3 color2 = vec3(1.0, 0.4, 0.0);   // Fluorescent Orange (adjusted for more vibrancy)
            vec3 color3 = vec3(0.0, 0.8, 1.0);     // Neon Blue/Cyan (adjusted)
            
            // Create a smoothly varying factor for mixing
            float mixFactor1 = 0.5 + 0.5 * sin(st.y * 2.0 + u_time * 0.3 + n * 2.0);
            float mixFactor2 = 0.5 + 0.5 * cos(st.x * 2.0 - u_time * 0.2 + n * 2.0);

            // Mix the colors in a fluid way
            vec3 finalColor = mix(color1, color2, mixFactor1);
            finalColor = mix(finalColor, color3, mixFactor2);
            finalColor *= (0.8 + n * 0.2); // Add some subtle brightness variations

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
