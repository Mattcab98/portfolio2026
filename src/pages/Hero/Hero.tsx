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
                ease: 'power3.in'

            }
        )

        tl.fromTo(
            spans,
            {
                x: "-50vw",
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
            <section className="hero flex flex-col gap-4 justify-center">

                <pre ref={stickRef} className="text-xs font-normal text-black/15 absolute top-47 right-25">
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

                <div className="hero__available bg-background/30 p-3 rounded-3xl w-85 flex items-center gap-3 justify-center">

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
                    className="flex flex-col items-end text-end text-7xl font-bold text-background justify-center pr-3"
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

                <span className="text-red-500 absolute text-9xl-"> { } </span>

            </section >
        </>
    );
};

export { Hero };