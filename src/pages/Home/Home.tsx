import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import { Header } from "../../components/header/Header";
import { Hero } from "../Hero/Hero";
import { Skills } from "../Skills/Skills";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const skillsRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.to(skillsRef.current, {
            y: -100,
            ease: "none",
            scrollTrigger: {
                trigger: skillsRef.current,
                start: "top bottom",
                end: "top 40%",
                scrub: 1,
            },
        });
    }, skillsRef);

    return () => ctx.revert();
}, []);

    return (
        <>
            <Header />

            <section className="w-85 mx-auto">
                <Hero />
            </section>

            <section
                ref={skillsRef}
                className="rounded-t-3xl w-full bg-background"
            >
                <Skills />
            </section>
        </>
    );
};

export { Home };