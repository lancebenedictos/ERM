import Cube from "./Cube";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  color: string;
};

const Cubes = ({ color }: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState(Math.ceil(window.innerWidth / 50));
  const [cols, setCols] = useState(Math.ceil(window.innerHeight / 50));
  const numCubes = rows * cols;

  useLayoutEffect(() => {
    function updateSize() {
      setRows(Math.ceil(window.innerWidth / 50));
      setCols(Math.ceil(window.innerHeight / 50));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className=" w-screen h-screen absolute overflow-hidden flex flex-wrap"
      ref={container}
    >
      {Array(numCubes)
        .fill(0)
        .map((_num, index) => (
          <Cube
            index={index}
            key={`cube-${index}`}
            rows={rows}
            container={container}
            color={color}
          />
        ))}
    </div>
  );
};

export default Cubes;
