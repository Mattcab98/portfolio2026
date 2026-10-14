
import { Card } from "../../components/card/Card";

const projects = [
    {
        number: "1",
        image: "/SiteVictoriaArroche.png",
        imageAlt: "Portfolio de Victoria Arroche",
        title: "Victoria Arroche",
        description: "A professional photography portfolio designed to showcase the photographer's work through a visual and elegant experience, featuring photographs captured entirely by the photographer.",
        url: "https://victoria-arroche.vercel.app/",
        badgeLabel: "Portfolio",
        technologies: ["JavaScript", "CSS", "Html"],
    },
    {
        number: "2",
        image: "/SiteCooking.png",
        imageAlt: "E-commerce preview",
        title: "Website Comida",
        description: "My first web development project, a food website prototype designed to explore recipes through an interactive and responsive interface.",
        badgeLabel: "Website",
        technologies: ["JavaScript", "CSS", "Html"],

    },
    {
        number: "3",
        image: "/website.png",
        imageAlt: "Website preview",
        title: "Business Website",
        description: "A responsive website for a business.",
        badgeLabel: "Website",
        technologies: ["TypeScript", "Node.js"],
    },
];

const ProjectCard = () => (
    <>
        {projects.map((project) => (
            <Card
                key={project.number}
                number={project.number}
                image={project.image}
                imageAlt={project.imageAlt}
                title={project.title}
                description={project.description}
                url={"url" in project ? project.url : undefined}
                hoverMove="
                    hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(3deg)_translateY(-4px)]
                    active:[transform:perspective(1000px)_rotateX(2deg)_rotateY(3deg)_translateY(-4px)]"

                badgeLabel={project.badgeLabel}
                badgeVariant="solid"
                badgeSize="sm"
                badgePadding="px-2 py-0.5"
                badgeGap="gap-1"
                badgeBorderRadius="rounded-full"
                badgeBackgroundColor="#98c104"
                badgeTextColor="#000000"
                badgeBorderColor="#8ef83a"
                badgeLabelClassName="text-[10px] "
                badgeIconClassName="text-[10px]"
            >
                <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="
                                rounded-full bg-brand/10
                                px-3 py-1 text-xs text-brand
                            "
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </Card>
        ))}
    </>
);

export { ProjectCard };
