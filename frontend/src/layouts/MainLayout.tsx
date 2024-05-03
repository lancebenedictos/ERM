import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLayoutEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.querySelector("#container") as HTMLDivElement;

    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
    });

    bodyScrollBar.addListener(({ offset }) => {
      const nav = document.querySelector("nav");
      if (!nav) return;
      nav.style.top = offset.y + "px";
      nav.style.left = offset.x + "px";
    });

    ScrollTrigger.scrollerProxy("#container", {
      scrollTop(value) {
        if (arguments.length && value) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: scroller });
    return () => {};
  }, []);
  return (
    <div className="flex flex-col min-h-screen " id="container">
      <NavBar />

      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
