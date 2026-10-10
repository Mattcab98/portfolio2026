import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import { Header } from "../../components/header/Header";
import { Hero } from "../Hero/Hero";
import { Skills } from "../Skills/Skills";
import { Method } from "../MethodWork/MethodWork";
import { Projects } from "../MyProjects/Projects";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const skillsSectionRef = useRef<HTMLElement>(null);
    const skillsPinRef = useRef<HTMLDivElement>(null);
    const skillsContentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = skillsSectionRef.current;
        const pin = skillsPinRef.current;
        const content = skillsContentRef.current;

        if (!section || !pin || !content) return;

        const ctx = gsap.context(() => {
            const getOverflow = () =>
                Math.max(0, content.scrollHeight - pin.clientHeight);

            gsap.to(content, {
                y: () => -getOverflow(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    pin,
                    pinSpacing: true,
                    start: "top top",
                    end: () => `+=${getOverflow()}`,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, section);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Header />

            <main className="relative">
                {/* HERO */}
                <section className="sticky top-0 z-10 w-85 mx-auto">
                    <Hero />
                </section>

                {/* SKILLS */}
                <section
                    ref={skillsSectionRef}
                    className="relative z-20"
                >
                    <div
                        ref={skillsPinRef}
                        className="
                            h-screen
                            overflow-hidden
                            rounded-t-3xl
                            bg-background
                            px-8
                        "
                    >
                        <div ref={skillsContentRef}>
                            <Skills />
                        </div>
                    </div>
                </section>

                {/* METHOD */}
                <section
                    className="
                        relative
                        z-30
                        -mt-8
                        min-h-screen
                        rounded-t-3xl
                        bg-brand
                        px-8
                    "
                >
                    <Method />
                </section>

                {/* PROJECTS */}
                <section
                    className="
                        relative
                        z-40
                        -mt-8
                        min-h-screen
                        rounded-t-3xl
                        bg-background
                        px-8
                    "
                >
                    <Projects />
                </section>
            </main>
        </>
    );
};

export { Home };