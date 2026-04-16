import { useRef } from "react";
import { ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const screenLines = [
  { x: -0.46, y: 0.26, width: 0.56, height: 0.07, color: "#38bdf8" },
  { x: -0.42, y: 0.07, width: 0.88, height: 0.05, color: "#c084fc" },
  { x: -0.42, y: -0.08, width: 0.74, height: 0.05, color: "#94a3b8" },
];

type FloatingCardProps = {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  delay?: number;
  accent?: string;
};

const FloatingCard = ({ position, rotation, size, delay = 0, accent = "#67e8f9" }: FloatingCardProps) => {
  const groupRef = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime + delay;
    const group = groupRef.current;

    if (!group) {
      return;
    }

    group.position.set(position[0], position[1] + Math.sin(time * 1.5) * 0.08, position[2]);
    group.rotation.set(
      rotation[0] + Math.sin(time * 0.8) * 0.02,
      rotation[1] + Math.sin(time * 0.6) * 0.04,
      rotation[2] + Math.sin(time * 1.1) * 0.05,
    );
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[size[0], size[1], 0.08]} />
        <meshPhysicalMaterial
          color="#0b1220"
          roughness={0.12}
          metalness={0.15}
          transmission={0.85}
          thickness={0.8}
          transparent
          opacity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>

      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[size[0] - 0.12, size[1] - 0.12]} />
        <meshBasicMaterial color="#0f172a" transparent opacity={0.55} />
      </mesh>

      <mesh position={[-size[0] * 0.24, size[1] * 0.22, 0.08]}>
        <boxGeometry args={[size[0] * 0.28, 0.05, 0.04]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1.1} roughness={0.25} />
      </mesh>

      {Array.from({ length: 3 }).map((_, index) => (
        <mesh key={`${accent}-${index}`} position={[-size[0] * 0.22, size[1] * (0.1 - index * 0.18), 0.08]}>
          <boxGeometry args={[size[0] * (0.56 - index * 0.1), 0.04, 0.03]} />
          <meshStandardMaterial
            color={index === 1 ? "#cbd5e1" : "#7dd3fc"}
            emissive={index === 0 ? accent : "#000000"}
            emissiveIntensity={index === 0 ? 0.4 : 0}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

const Laptop = () => (
  <group position={[0, -0.22, 0]} rotation={[-0.12, 0.2, -0.05]}>
    <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
      <boxGeometry args={[2.95, 0.16, 1.95]} />
      <meshStandardMaterial color="#0b1020" roughness={0.3} metalness={0.72} />
    </mesh>

    <mesh castShadow receiveShadow position={[0, 0.88, -0.82]} rotation={[-0.96, 0, 0]}>
      <boxGeometry args={[2.65, 1.68, 0.08]} />
      <meshStandardMaterial color="#0a1120" roughness={0.24} metalness={0.58} />
    </mesh>

    <mesh position={[0, 0.88, -0.78]} rotation={[-0.96, 0, 0]}>
      <planeGeometry args={[2.45, 1.46]} />
      <meshStandardMaterial color="#0a1020" roughness={0.5} metalness={0.15} emissive="#0f172a" emissiveIntensity={0.45} />
    </mesh>

    {screenLines.map((line) => (
      <mesh key={`${line.x}-${line.y}`} position={[line.x, line.y, -0.72]} rotation={[-0.96, 0, 0]}>
        <boxGeometry args={[line.width, line.height, 0.03]} />
        <meshStandardMaterial color={line.color} emissive={line.color} emissiveIntensity={1.05} roughness={0.2} />
      </mesh>
    ))}

    <mesh castShadow receiveShadow position={[0, -0.02, 0.53]}>
      <boxGeometry args={[1.26, 0.08, 0.82]} />
      <meshStandardMaterial color="#111827" roughness={0.24} metalness={0.55} />
    </mesh>

    <mesh position={[0, -0.07, 0.56]}>
      <boxGeometry args={[0.52, 0.03, 0.2]} />
      <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.35} />
    </mesh>
  </group>
);

const Workspace = () => {
  const sceneRef = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    const scene = sceneRef.current;

    if (!scene) {
      return;
    }

    const time = state.clock.elapsedTime;
    const targetX = state.pointer.x * 0.28;
    const targetY = state.pointer.y * 0.2;

    scene.rotation.y = THREE.MathUtils.lerp(scene.rotation.y, targetX * 0.7 + 0.16, 0.06);
    scene.rotation.x = THREE.MathUtils.lerp(scene.rotation.x, -0.1 + targetY * 0.22, 0.06);
    scene.position.x = THREE.MathUtils.lerp(scene.position.x, targetX * 0.55, 0.05);
    scene.position.y = THREE.MathUtils.lerp(scene.position.y, Math.sin(time * 1.2) * 0.1, 0.05);
  });

  return (
    <group ref={sceneRef}>
      <Laptop />
      <FloatingCard position={[-1.9, 0.8, 0.45]} rotation={[0.08, -0.5, -0.12]} size={[1.28, 0.88]} delay={0.2} accent="#38bdf8" />
      <FloatingCard position={[1.65, 0.38, -0.15]} rotation={[-0.06, 0.36, 0.1]} size={[1.12, 0.76]} delay={1.1} accent="#a78bfa" />
      <FloatingCard position={[1.1, -1.12, 0.7]} rotation={[0.03, -0.2, -0.08]} size={[1.4, 0.92]} delay={2.2} accent="#67e8f9" />
    </group>
  );
};

const Scene = () => (
  <Canvas
    shadows
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    camera={{ position: [0, 0, 6.25], fov: 34 }}
    className="h-full w-full"
  >
    <color attach="background" args={["#050816"]} />
    <fog attach="fog" args={["#050816", 8, 16]} />
    <PerspectiveCamera makeDefault position={[0, 0, 6.25]} fov={34} />

    <ambientLight intensity={1.15} />
    <directionalLight position={[4.5, 6.5, 5]} intensity={2.3} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
    <pointLight position={[-4, -1, 3]} intensity={1.3} color="#67e8f9" />
    <pointLight position={[2.5, 2, -2]} intensity={1} color="#c084fc" />

    <Workspace />

    <ContactShadows position={[0, -2.1, 0]} opacity={0.4} scale={12} blur={2.6} far={4.5} resolution={256} color="#020617" />
  </Canvas>
);

export default Scene;
