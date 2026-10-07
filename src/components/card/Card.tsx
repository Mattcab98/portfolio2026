import type { IconType } from "react-icons";

interface CardBaseProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
    titleClassName?: string;
    hoverMove?: string;
}

type CardProps = CardBaseProps & (
    | {
        icon: IconType;
        number?: never;
    }
    | {
        icon?: never;
        number: string;
    }
);

const Card = (props: CardProps) => {
    const {
        title,
        description,
        children,
        titleClassName,
        hoverMove,
    } = props;

    const Icon = "icon" in props ? props.icon : null;

    return (
        <article
            className={`bg-surface border border-zinc-800 p-8 rounded-3xl group transition-transform duration-300 ease-out ${hoverMove ?? ""} hover:border-brand-hover/50`}
        >
            {"number" in props && (
                <span className="text-6xl font-display text-brand-hover/25 group-hover:text-brand-hover transition-colors">
                    {props.number}
                </span>
            )}

            {Icon && (
                <div className="w-14 h-14 bg-brand/25 rounded-2xl grid place-content-center mb-6 group-hover:bg-brand transition-colors">
                    <Icon className="text-brand-hover text-2xl group-hover:text-background transition-colors" />
                </div>
            )}

            <h3
                className={`text-2xl font-display font-bold mb-3 ${titleClassName ?? ""}`}
            >
                {title}
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {description}
            </p>

            {children}
        </article>
    );
};

export { Card };