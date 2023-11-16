import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Sun = () => {
  const sunRef = useRef();

  const [sunTexture] = useTexture(["/assets/sun.jpg"]);

  useFrame(() => {
    sunRef.current.rotation.y -= 0.002;
  });

  return (
    <mesh ref={sunRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshPhongMaterial
        map={sunTexture}
        emissiveMap={sunTexture}
        emissiveIntensity={0.8}
        emissive={0xffffff}
      />
      <pointLight />
    </mesh>
  );
};

export default Sun;
