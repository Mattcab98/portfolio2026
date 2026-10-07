import { Card } from "../../components/card/card";

const methodForm = [
    {
        number: "01",
        title: "Discovery",
        description:
            "We define your goals, understand your audience, and identify what the project needs to achieve.",
    },
    {
        number: "02",
        title: "Strategy & Design",
        description:
            "We shape the concept, structure the experience, and define the interface to create a clear and intuitive product.",
    },
    {
        number: "03",
        title: "Build & Code",
        description:
            "I turn the concept into a functional product using clean code, smooth interactions, and modern development practices.",
    },
    {
        number: "04",
        title: "Launch & Support",
        description:
            "I take the project to production, test the final experience, and make sure everything is ready to perform and grow.",
    },
];

const MethodCard = () => {
    return (
        <>
            {methodForm.map(({ number, title, description }) => (
                <Card
                    key={title}
                    number={number}
                    title={title}
                    description={description}
                    titleClassName="text-brand"
                >
                </Card>
            ))}
        </>
    )
}
export { MethodCard }