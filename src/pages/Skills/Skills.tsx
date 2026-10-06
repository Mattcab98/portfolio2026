import { FaLayerGroup } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const elements =
                sectionRef.current?.querySelectorAll(".skills-item");

            if (!elements) return;

            gsap.fromTo(
                elements,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "top 40%",
                        scrub: 1.5,
                    },
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-85 mx-auto text-brand py-25 gap-10 flex flex-col mt-18"
        >

            <div className="skills-item bg-brand/20 gap-4 p-3 rounded-3xl flex justify-center items-center w-70 border-2">
                <FaLayerGroup className="w-5 h-5" />

                <span className="text-2xl">
                    Technology Stack
                </span>
            </div>

            <div className="skills-item flex flex-col items-start text-start text-[53px] font-bold text-white justify-center">
                <h3 className="leading-[1.3]">
                    My Extensive List of{" "}
                    <span className="rounded-xl text-[55px] bg-brand p-1 text-background">
                        Skills
                    </span>
                </h3>
            </div>

            <h3 className="skills-item text-white text-[26px] text-start">
                I leverage modern frameworks and advanced tools to build
                high-performance applications, optimized for search engines
                and built with a solid foundation designed to deliver fast,
                seamless experiences that grow with each project.
            </h3>

        </section>
    );
};

export { Skills };