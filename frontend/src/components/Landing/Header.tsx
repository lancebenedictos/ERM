import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Cubes from "./Cubes";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Header = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // gsap code here...
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            scrub: 1,
            pin: container.current,
          },
        })
        .fromTo(
          `.mask`,
          {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
            duration: 2,
          },
          {
            clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
          }
        );
    },
    { scope: container }
  );

  return (
    <div className="full " ref={container}>
      <div className="header h-screen relative overflow-hidden">
        <div className="h-full w-screen bg-slate-50 flex flex-col items-center justify-center font-extrabold text-5xl">
          <Cubes color="border-black/20" />

          <p className="w-[50%] z-[1] bg-slate-800 text-white p-3 rounded-md">
            Create and manage schedules and tasks for your team faster and
            easier
          </p>
        </div>
        <div className="h-full w-screen bg-slate-800 absolute text-white top-0 mask flex flex-col items-center justify-center font-extrabold text-5xl z-10">
          <Cubes color="border-[rgba(151,187,99,0.70)]" />

          <p className="w-[50%] z-10 bg-white text-slate-800 p-3 rounded-md">
            Empower your team, streamline your workflow: Elevate your management
            with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
