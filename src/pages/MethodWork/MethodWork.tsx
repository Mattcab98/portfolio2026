import { MethodCard } from "../../components/card/MethodCard";

import { BiSitemap } from "react-icons/bi";


const Method = () => {
    return (
        <>
            <section className="rounded-t-4xl bg-red-100 w-[85%] mx-auto flex flex-col gap-5 items-start text-start">

                <div className="bg-background text-brand gap-2 px-5 py-1 rounded-3xl flex justify-center items-center border-2">

                    <BiSitemap className="text-md" />
                    <span className="text-md">
                        Methodology
                    </span>
                </div>

                <div className="skills-item flex flex-col text-[53px] font-bold text-background justify-center">
                    <h3 className="leading-[1.3]">
                        My Work{" "}
                        <span className="rounded-xl text-[55px] bg-background p-1 text-brand">
                            Process
                        </span>
                    </h3>
                </div>

                <h3 className="skills-item text-backgroubrandnd text-xl w-[90%] text-start">
                    A structured and transparent approach, from the first discovery call to the final launch.
                </h3>

                <MethodCard/>

            </section>
        </>
    );
};

export { Method };


