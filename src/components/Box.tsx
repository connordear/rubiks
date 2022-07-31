import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const boxScale = 0.6;

const Box = (props: any) => {
  const mesh = useRef<any>();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) =>
    mesh.current?.rotation ? (mesh.current.rotation.x += 0.01) : null
  );
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[boxScale, boxScale, boxScale]} />
      <meshStandardMaterial
        color={
          active
            ? hovered
              ? "hotpink"
              : "pink"
            : hovered
            ? "#FBB917"
            : "orange"
        }
      />
    </mesh>
  );
};

export default Box;
