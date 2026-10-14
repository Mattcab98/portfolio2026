import { FaLayerGroup } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { SkillCard } from "../../components/card/SkillCard";

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
                        start: "top 85%",
                        end: "top 45%",
                        scrub: 1.5,
                    },
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
                
                ref={sectionRef}
                className="text-gray-200 gap-10 flex flex-col py-15"
            >


                <div className="skills-item bg-brand/20 gap-2 p-1 rounded-3xl flex justify-center items-center w-60 border">
                    <FaLayerGroup className="w-5 h-5" />

                    <span className="text-xl">
                        Technical Expertise
                    </span>
                </div>

                <div className="skills-item flex flex-col items-start text-start text-[51px] font-bold text-white justify-center">
                    <h3 className="leading-[1.3]">
                        My Extensive List of{" "}
                        <span className="rounded-xl text-[55px] bg-brand p-1 text-background">
                            Skills
                        </span>
                    </h3>
                </div>

                <h3 className="skills-item text-gray-300 text-xl w-[90%] text-start">
                    I leverage modern frameworks and advanced tools to build
                    high-performance applications, optimized for search engines
                    and built with a solid foundation designed to deliver fast,
                    seamless experiences that grow with each project.
                </h3>

                <div className="container__skills flex flex-col gap-10">
                    <SkillCard />
                </div>

            </section>
        </>
    );
};

export { Skills };