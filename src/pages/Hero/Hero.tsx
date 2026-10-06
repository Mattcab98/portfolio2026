import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Hero = () => {

    const titleRef = useRef<HTMLHeadingElement>(null);
    const stickRef = useRef<HTMLPreElement>(null);

    useLayoutEffect(() => {

        if (!titleRef.current || !stickRef.current) return;

        const spans = titleRef.current.querySelectorAll("span");

        const tl = gsap.timeline();

        tl.fromTo(
            stickRef.current,
            {
                opacity: 0,
            },
            {
                opacity: .7,
                duration: 1,
                ease: 'power3.in',
            }
        )

        tl.fromTo(
            spans,
            {
                x: "-70vw",
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.7,
                ease: "power1.out",
                stagger: 0.35,
            }
        );

    }, []);

    return (
        <>
            <section className="hero flex flex-col items-end justify-center gap-5 pt-5">

                <pre ref={stickRef} className="text-xs text-black/15 absolute top-47 right-25">v
                    {`const Hero = () => {
  const title = "Full Stack Developer";
  const skills = ["React", "TypeScript", "Node"];

  const handleProjects = () => {
    console.log("Loading projects...");
  };

  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{skills.join(" · ")}</p>
      <button onClick={handleProjects}>
        View projects
      </button>
    </section>
  );
};`}
                </pre>

                <div className="z-1 hero__available text-background bg-background/20 p-3 rounded-3xl w-75 flex justify-center items-center gap-3 mr-3">

                    <div className="relative flex w-3 h-3">
                        <span className="absolute inline-flex bg-background w-3 h-3 rounded-full animate-ping opacity-65"></span>

                        <span className="relative inline-flex bg-brand w-3 h-3 rounded-full"></span>
                    </div>

                    <span className="text-xs">
                        AVAILABLE FOR FREELANCE PROJECTS
                    </span>

                </div>

                <h1
                    ref={titleRef}
                    className="flex flex-col items-end text-end text-7xl font-bold text-background justify-center pr-3 gap-2"
                >

                    <span>
                        Trusted
                    </span>

                    <span className="rounded-xl bg-background p-1 text-brand">
                        Partner
                    </span>

                    <span>
                        for Your Website
                    </span>

                    <span className="rounded-xl bg-background p-1 text-brand">
                        Develop.
                    </span>

                </h1>

            </section >
        </>
    );
};

export { Hero };