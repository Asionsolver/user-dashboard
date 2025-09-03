"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect } from "react";

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return [x, y, z];
}

function Earth({ lat, lng }: { lat: number; lng: number }) {
  const radius = 2;
  const [x, y, z] = latLngToVector3(lat, lng, radius + 0.05);

  const [dayMap, cloudMap] = useLoader(THREE.TextureLoader, [
    "/textures/earth_day.jpg",
    "/textures/earth_clouds.png",
  ]);

  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  return (
    <>
      {/* Earth Sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshPhongMaterial map={dayMap} />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[radius + 0.03, 64, 64]} />
        <meshPhongMaterial
          map={cloudMap}
          transparent={true}
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>

      {/* Marker */}
      <mesh position={[x, y, z]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}

export default function Globe3D({ lat, lng }: { lat: number; lng: number }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const controlsRef = useRef<any>(null);
  useEffect(() => {
    if (!controlsRef.current) return;

    const radius = 2;
    const [x, y, z] = latLngToVector3(lat, lng, radius + 0.3);

    // Update OrbitControls target
    controlsRef.current.target.set(x, y, z);

    // Move camera so the target is in view
    if (controlsRef.current.object) {
      const camera = controlsRef.current.object;
      // Compute a vector from the target to current camera
      const direction = new THREE.Vector3().subVectors(
        camera.position,
        camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(radius)
      );
      camera.position.copy(new THREE.Vector3(x, y, z).add(direction));
    }

    controlsRef.current.update();
  }, [lat, lng]);

  return (
    <Canvas style={{ height: "400px", width: "100%" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Earth lat={lat} lng={lng} />
      <OrbitControls ref={controlsRef} enableZoom={true} />
    </Canvas>
  );
}
