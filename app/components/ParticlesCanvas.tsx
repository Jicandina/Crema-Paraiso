"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const COUNT = 90;
const COLOR = "#F9A825";

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Wait for layout to be painted before reading dimensions
    const raf0 = requestAnimationFrame(() => {
      const section = canvas.closest("section") as HTMLElement | null;
      const w = section?.offsetWidth || window.innerWidth;
      const h = section?.offsetHeight || window.innerHeight;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
      camera.position.z = 5;

      const positions = new Float32Array(COUNT * 3);
      const meta: { vy: number; phase: number; speed: number }[] = [];

      for (let i = 0; i < COUNT; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 16;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
        meta.push({
          vy:    Math.random() * 0.004 + 0.002,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.6 + 0.4,
        });
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size: 0.07,
        color: new THREE.Color(COLOR),
        transparent: true,
        opacity: 0.45,
        sizeAttenuation: true,
        depthWrite: false,
      });

      scene.add(new THREE.Points(geometry, material));

      let raf: number;
      let t = 0;

      const loop = () => {
        raf = requestAnimationFrame(loop);
        t += 0.016;
        const pos = geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < COUNT; i++) {
          pos[i * 3 + 1] += meta[i].vy * meta[i].speed;
          pos[i * 3]     += Math.sin(t * meta[i].speed + meta[i].phase) * 0.0008;
          if (pos[i * 3 + 1] > 6.5) {
            pos[i * 3 + 1] = -6.5;
            pos[i * 3]     = (Math.random() - 0.5) * 16;
          }
        }
        geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      };
      loop();

      const ro = new ResizeObserver(() => {
        const nw = section?.offsetWidth || window.innerWidth;
        const nh = section?.offsetHeight || window.innerHeight;
        renderer.setSize(nw, nh);
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
      });
      if (section) ro.observe(section);

      // store cleanup on canvas for the outer cleanup fn
      (canvas as any).__cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    });

    return () => {
      cancelAnimationFrame(raf0);
      (canvasRef.current as any)?.__cleanup?.();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
