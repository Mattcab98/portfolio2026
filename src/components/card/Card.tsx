
import type { IconType } from "react-icons";
import { ExternalLink } from "lucide-react";

import { Badge } from "../badge/Badge";

interface CardBaseProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
    titleClassName?: string;
    hoverMove?: string;

    image?: string;
    imageAlt?: string;
    url?: string;
    className?: string;

    // Badge opcional
    badgeLabel?: string;
    badgeIcon?: IconType;
    badgeClassName?: string;
    badgeIconClassName?: string;
    badgeLabelClassName?: string;
    badgeBackgroundColor?: string;
    badgeTextColor?: string;
    badgeBorderColor?: string;
    badgeBorderRadius?: string;
    badgePadding?: string;
    badgeGap?: string;
    badgeVariant?: "default" | "outline" | "solid" | "ghost";
    badgeSize?: "sm" | "md" | "lg";
}

type CardProps = CardBaseProps & (
    | { icon: IconType; number?: never }
    | { icon?: never; number: string }
    | { icon?: never; number?: never }
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
        url,
        className,

        badgeLabel,
        badgeIcon,
        badgeClassName,
        badgeIconClassName,
        badgeLabelClassName,
        badgeBackgroundColor,
        badgeTextColor,
        badgeBorderColor,
        badgeBorderRadius,
        badgePadding,
        badgeGap,
        badgeVariant,
        badgeSize,
    } = props;

    const Icon = "icon" in props ? props.icon : null;

    return (
        <article
            className={`
                relative
                bg-surface
                border border-zinc-800
                p-8
                rounded-3xl
                group
                transition-transform duration-300 ease-out
                ${hoverMove ?? ""}
                hover:border-brand-hover/50
                active:border-brand-hover/50
                flex flex-col
                gap-2
                ${className ?? ""}
            `}
        >
            {/* Enlace del proyecto */}
            {url && (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${title ?? "proyecto"}`}
                    className="
                        absolute left-1/2 top-0 z-20
                        -translate-x-1/2 -translate-y-1/2
                        whitespace-nowrap
                        flex items-center gap-2
                        rounded-full border border-brand/70
                        bg-zinc-950 px-4 py-1.5
                        text-xs font-semibold text-brand
                        shadow-[0_0_18px_rgba(163,230,53,0.25)]
                        opacity-0 pointer-events-none
                        transition-opacity duration-300
                        group-hover:opacity-100
                        group-hover:pointer-events-auto
                        group-active:opacity-100
                    "
                >
                    <span>
                        {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                    <ExternalLink size={12} />
                </a>
            )}

            {/* Imagen y badge */}
            {image && (
                <div className="relative overflow-hidden rounded-xl h-45">
                    <img
                        src={image}
                        alt={imageAlt ?? title ?? "Project preview"}
                        className="
                            block w-full h-full aspect-video object-cover object-top
                            opacity-70 transition-transform duration-500
                            group-hover:scale-105
                            group-active:scale-105
                        "
                        loading="lazy"
                    />

                    <div
                        className="
                            absolute inset-0
                            bg-background/35
                            pointer-events-none
                            transition-colors duration-300
                            group-hover:bg-background/20
                            group-active:bg-background/20
                        "
                    />

                    {/* Badge configurable */}
                    {badgeLabel && (
                        <div className="
                        absolute 
                        bottom-3 left-3
                        opacity-95 z-10 
                        group-hover:rotate-1 
                        group-active:rotate-1 group-hover:opacity-100 group-hover:active-100
                        transition-all">
                            <Badge
                                label={badgeLabel}
                                icon={badgeIcon}
                                variant={badgeVariant}
                                size={badgeSize}
                                className={badgeClassName}
                                iconClassName={badgeIconClassName}
                                labelClassName={badgeLabelClassName}
                                backgroundColor={badgeBackgroundColor}
                                textColor={badgeTextColor}
                                borderColor={badgeBorderColor}
                                borderRadius={badgeBorderRadius}
                                padding={badgePadding}
                                gap={badgeGap}
                            />
                        </div>
                    )}
                </div>
            )}

            {/* Número */}
            {"number" in props && props.number !== undefined && (
                <span
                    className="
                        text-6xl font-display text-brand-hover/25
                        transition-colors
                        group-hover:text-brand-hover
                        group-active:text-brand-hover
                    "
                >
                    {props.number}
                </span>
            )}

            {/* Ícono principal de la tarjeta */}
            {Icon && (
                <div
                    className="
                        w-14 h-14 bg-brand/25 rounded-2xl
                        grid place-content-center mb-6
                        transition-colors
                        group-hover:bg-brand
                        group-active:bg-brand
                    "
                >
                    <Icon
                        className="
                            text-brand-hover text-2xl
                            transition-colors
                            group-hover:text-background
                            group-active:text-background
                        "
                    />
                </div>
            )}

            {/* Título */}
            {title && (
                <h3
                    className={`
                        text-2xl font-display text-white font-bold mb-3
                        ${titleClassName ?? ""}
                    `}
                >
                    {title}
                </h3>
            )}

            {/* Descripción */}
            {description && (
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {description}
                </p>
            )}

            {/* Contenido personalizado */}
            {children}

        </article>
    );
};

export { Card };
