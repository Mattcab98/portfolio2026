import { AiFillDatabase } from "react-icons/ai";
import { FaBolt, FaReact } from "react-icons/fa";

import { Card } from "../../components/card/Card";

const skills = [
    {
        icon: FaReact,
        title: "Frontend & UI",
        description:
            "Building fluid, interactive, and fully responsive user interfaces.",
        tools: [
            "React.js / Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
        ],
    },
    {
        icon: AiFillDatabase,
        title: "Backend & APIs",
        description:
            "Developing robust services, efficient databases, and reliable APIs.",
        tools: [
            "Node.js & Express",
            "PostgreSQL & MongoDB",
            "Prisma ORM / Supabase",
            "RESTful APIs & GraphQL",
        ],
    },
    {
        icon: FaBolt,
        title: "Performance & Tools",
        description:
            "Optimizing performance and using modern tools to build reliable applications.",
        tools: [
            "Git & GitHub",
            "Vercel / Netlify",
            "SEO & Core Web Vitals",
            "Testing",
        ],
    },
];

const SkillCard = () => {
    return (
        <>
            {skills.map(({ icon, title, description, tools }) => (
                <Card
                    key={title}
                    icon={icon}
                    title={title}
                    description={description}
                    hoverMove="hover:-translate-y-2"

                >
                    <ul className="space-y-2 text-sm">
                        {tools.map((tool) => (
                            <li key={tool} className="flex items-center gap-2">
                                <span className="text-brand">✓</span>
                                {tool}
                            </li>
                        ))}
                    </ul>
                </Card>
            ))}
        </>
    );
};

export { SkillCard };