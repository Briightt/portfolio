import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
        const lenis = new Lenis({
      duration: 0.5, 
      easing: (t) => t * (2-t), 
      smoothWheel: false,
      wheelMultiplier:1.31,
      lerp:0.1,
      touchMultiplier: 1.2,
    });


    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;

}



