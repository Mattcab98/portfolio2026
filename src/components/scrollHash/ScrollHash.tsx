
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const id = decodeURIComponent(hash.slice(1));
        let frameId = 0;
        let secondFrameId = 0;

        frameId = requestAnimationFrame(() => {
            ScrollTrigger.refresh();

            secondFrameId = requestAnimationFrame(() => {
                const section = document.getElementById(id);

                if (!section) return;

                const top =
                    section.getBoundingClientRect().top +
                    window.scrollY;

                window.scrollTo({
                    top,
                    behavior: "smooth",
                });
            });
        });

        return () => {
            cancelAnimationFrame(frameId);
            cancelAnimationFrame(secondFrameId);
        };
    }, [pathname, hash]);

    return null;
};

export { ScrollToHash };
