import type { IconType } from "react-icons";

interface CardBaseProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
    titleClassName?: string;
    hoverMove?: string;
    image?: string;
    imageAlt?: string;
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
    | {
        icon?: never;
        number?: never;
    }
);

const Card = (props: CardProps) => {
    const {
        title,
        description,
        children,
        titleClassName,
        hoverMove,
        image,
        imageAlt,
    } = props;

    const Icon = "icon" in props ? props.icon : null;

    return (
        <article
            className={`
                bg-surface
                border border-zinc-800
                p-8
                rounded-3xl
                group
                transition-transform duration-300 ease-out
                ${hoverMove ?? ""}
                hover:border-brand-hover/50
            `}
        >
            {/* Project image */}
            {image && (
                <div className="mb-6 overflow-hidden rounded-2xl">
                    <img
                        src={image}
                        alt={imageAlt ?? title ?? "Project preview"}
                        className="
                            w-full
                            aspect-video
                            object-cover
                            transition-transform duration-500
                            group-hover:scale-105
                        "
                        loading="lazy"
                    />
                </div>
            )}

            {/* Number */}
            {"number" in props && props.number !== undefined && (
                <span
                    className="
                        text-6xl
                        font-display
                        text-brand-hover/25
                        group-hover:text-brand-hover
                        transition-colors
                    "
                >
                    {props.number}
                </span>
            )}

            {/* Icon */}
            {Icon && (
                <div
                    className="
                        w-14 h-14
                        bg-brand/25
                        rounded-2xl
                        grid place-content-center
                        mb-6
                        group-hover:bg-brand
                        transition-colors
                    "
                >
                    <Icon
                        className="
                            text-brand-hover
                            text-2xl
                            group-hover:text-background
                            transition-colors
                        "
                    />
                </div>
            )}

            {/* Title */}
            {title && (
                <h3
                    className={`
                        text-2xl
                        font-display
                        font-bold
                        mb-3
                        ${titleClassName ?? ""}
                    `}
                >
                    {title}
                </h3>
            )}

            {/* Description */}
            {description && (
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {description}
                </p>
            )}

            {/* Custom content */}
            {children}
        </article>
    );
};

export { Card };