import { FaLaptopCode } from "react-icons/fa";
import { ProjectCard } from "../../components/card/ProjectCard";

const Projects = () => {
    return (
        <>
            <section className="flex flex-col gap-10 py-10">

                <div className="bg-background text-brand gap-2 px-5 rounded-3xl flex justify-center items-center border w-35">

                    <FaLaptopCode className="text-md" />
                    <span className="text-md">
                        Projects
                    </span>

                </div>

                <h3
                    className="flex flex-col items-start text-start text-6xl font-bold text-gray-300 justify-center pr-3 gap-2"
                >

                    <span>
                        Take a look at the latest
                    </span>

                    <span className="rounded-xl bg-brand p-1 text-background">
                        project
                    </span>

                    <span>
                        i've done
                    </span>

                </h3>

                <p className="text-gray-300">A collection of projects where ideas take shape through design, development, and thoughtful digital experiences.</p>

                <div className="flex flex-col gap-8">
                    <ProjectCard/>
                </div>

            </section>
        </>
    )
}
export { Projects }