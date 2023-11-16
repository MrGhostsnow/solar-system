import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const ISS = () => {
  const ISSRef = useRef();

  const memoizedISS = useMemo(() => {
    return useGLTF("assets/ISSModel/ISS_stationary/ISS_stationary.gltf");
  });

  useFrame(({ clock }) => {
    ISSRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.1) * 2;
    ISSRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.1) * 2;
  });

  return (
    <mesh>
      <primitive
        ref={ISSRef}
        object={memoizedISS.scene}
        position={[2, 0, 0]}
        scale={0.005}
      />
    </mesh>
  );
};

export default ISS;
