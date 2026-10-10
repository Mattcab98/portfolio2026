import { Card } from "../../components/card/Card";


const ProjectCard = () => {
    return (
        <>
            <Card
                number="1"
                image=""
                imageAlt="Proyecto 1"
                title="Portfolio Website"
                description="A responsive portfolio built with React and TypeScript."
                hoverMove="hover:-translate-y-2 hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(5deg)_translateZ(10px)]"
            >
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs text-brand bg-brand/10 px-3 py-1 rounded-full">
                        React
                    </span>

                    <span className="text-xs text-brand bg-brand/10 px-3 py-1 rounded-full">
                        TypeScript
                    </span>
                </div>
            </Card>

            <Card
                number="1"
                image=""
                imageAlt="Proyecto 1"
                title="Portfolio Website"
                description="A responsive portfolio built with React and TypeScript."
                hoverMove="hover:-translate-y-2 hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(5deg)_translateZ(10px)]"
            >
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs text-brand bg-brand/10 px-3 py-1 rounded-full">
                        React
                    </span>

                    <span className="text-xs text-brand bg-brand/10 px-3 py-1 rounded-full">
                        TypeScript
                    </span>
                </div>
            </Card>
            
            <Card
                number="1"
                image=""
                imageAlt="Proyecto 1"
                title="Portfolio Website"
                description="A responsive portfolio built with React and TypeScript."
                hoverMove="hover:-translate-y-2 hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(5deg)_translateZ(10px)]"
            >
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs text-brand bg-brand/10 px-3 py-1 rounded-full">
                        React
                    </span>

                    <span className="text-xs text-brand bg-brand/10 px-3 py-1 rounded-full">
                        TypeScript
                    </span>
                </div>
            </Card>
        </>
    )
}
export { ProjectCard }