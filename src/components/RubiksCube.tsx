import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { convertToBaseN } from "../utils";
import Box from "./Box";

type RubiksCubePropsType = {
  size?: number;
  xOffset?: number;
  yOffset?: number;
  zOffset?: number;
  pause?: boolean;
};

function createFace(i: number, base: number) {
  const coords = convertToBaseN(i, base);
  const x = parseInt(coords[0], base);
  const y = parseInt(coords[1], base);
  const z = parseInt(coords[2], base);
  return [x, y, z];
}

export const RubiksCube = ({
  size = 3,
  xOffset = 0,
  yOffset = 0,
  zOffset = 0,
  pause = false,
}: RubiksCubePropsType) => {
  return (
    <Canvas
      camera={{
        fov: 75,
        // position: [size, size, size],
      }}
      style={{
        height: 500,
        width: "100%",
      }}
    >
      <ambientLight />
      <pointLight position={[size + 10, size + 10, size + 10]} />
      <primitive object={new THREE.AxesHelper(size + 10)} />
      <Dolly
        size={size}
        xOffset={xOffset}
        yOffset={yOffset}
        zOffset={zOffset}
        disabled={pause}
      />
      {Array.from({ length: Math.pow(size, 3) }).map((_, i) => {
        const [x, y, z] = createFace(i, size);
        return (
          <Box key={i} position={[x - xOffset, y - yOffset, z - zOffset]} />
        );
      })}
    </Canvas>
  );
};

type DollyProps = {
  size: number;
  disabled?: boolean;
  xOffset?: number;
  yOffset?: number;
  zOffset?: number;
};
const Dolly = ({
  size = 3,
  disabled = false,
  xOffset = 0,
  yOffset = 0,
  zOffset = 0,
}: DollyProps) => {
  console.log(size);

  useFrame(({ clock, camera }) => {
    // camera.position.set(
    //   size + size * 0.2,
    //   size + size * 0.2,
    //   size + size * 0.2
    // );
    //Spin around based on time
    if (!disabled) {
      camera.position.x =
        (size + size * 0.3) * Math.sin(clock.getElapsedTime()) + xOffset;
      camera.position.y = size + size * 0.3 + yOffset;
      camera.position.z = size + size * 0.2 + zOffset;
    } else {
      camera.position.x = size + xOffset;
      camera.position.y = size + yOffset;
      camera.position.z = size + zOffset;
    }
    camera.lookAt(new THREE.Vector3(size / 2, size / 2, size / 2));
  });
  return null;
};
