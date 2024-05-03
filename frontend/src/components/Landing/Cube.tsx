import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  rows: number;
  index: number;
  container: React.RefObject<HTMLDivElement>;
  color: string;
};

const Cube = ({ rows, index, container, color }: Props) => {
  const { contextSafe } = useGSAP({ scope: container });

  const enter = contextSafe((e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }
    const index = parseInt(e.target.dataset.index as string);
    const self = `[data-index="${index}"]`;

    console.log(rows);
    const neighbours = [
      `[data-index="${index - 1}"]`,
      `[data-index="${index + 1}"]`,
      `[data-index="${index - rows + 1}"]`,
      `[data-index="${index + rows - 1}"]`,
    ];

    gsap
      .timeline()
      .to([self], { opacity: 0 })
      .to(neighbours, { opacity: 0.3 }, 0);
  });

  const leave = contextSafe((e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }
    const index = parseInt(e.target.dataset.index as string);
    const neighbours = [
      `[data-index="${index}"]`,
      `[data-index="${index - 1}"]`,
      `[data-index="${index + 1}"]`,
      `[data-index="${index - rows + 1}"]`,
      `[data-index="${index + rows - 1}"]`,
    ];

    gsap.to(neighbours, { opacity: 1 });
  });

  return (
    <div
      className={`aspect-square flex-1 border-[1px] ${color} h-[50px] w-[50px] m-[0.5px] rounded-md`}
      data-index={index}
      onMouseEnter={enter}
      onMouseLeave={leave}
    ></div>
  );
};

export default Cube;
