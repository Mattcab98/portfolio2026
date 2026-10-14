
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

interface BadgeProps {
    label?: string;
    icon?: IconType;
    children?: ReactNode;

    // Apariencia
    variant?: "default" | "outline" | "solid" | "ghost";
    size?: "sm" | "md" | "lg";

    // Personalización visual
    className?: string;
    labelClassName?: string;
    iconClassName?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    borderRadius?: string;
    padding?: string;
    gap?: string;

    // Comportamiento
    as?: "div" | "span";
}

const variants = {
    default: "bg-brand/10 border-brand/40 text-brand",
    outline: "bg-transparent border-current text-brand",
    solid: "bg-brand border-brand text-background",
    ghost: "bg-transparent border-transparent text-brand",
};

const sizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
};

const Badge = ({
    label,
    icon: Icon,
    children,
    variant = "default",
    size = "md",
    className = "",
    labelClassName = "",
    iconClassName = "",
    backgroundColor,
    textColor,
    borderColor,
    borderRadius = "rounded-full",
    padding = "px-4 py-1.5",
    gap = "gap-2",
    as = "div",
}: BadgeProps) => {
    const Component = as;

    return (
        <Component
            className={`
                inline-flex items-center justify-center
                border backdrop-blur-sm
                transition-colors duration-300
                ${variants[variant]}
                ${sizes[size]}
                ${borderRadius}
                ${padding}
                ${gap}
                ${className}
            `}
            style={{
                ...(backgroundColor && { backgroundColor }),
                ...(textColor && { color: textColor }),
                ...(borderColor && { borderColor }),
            }}
        >
            {Icon && (
                <Icon
                    aria-hidden="true"
                    className={`shrink-0 ${iconClassName}`}
                />
            )}

            {label && (
                <span className={labelClassName}>
                    {label}
                </span>
            )}

            {children}
        </Component>
    );
};

export { Badge };
