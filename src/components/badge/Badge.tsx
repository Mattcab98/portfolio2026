
import type { ReactNode, CSSProperties } from "react";
import type { IconType } from "react-icons";

interface BadgeProps {
    label?: string;
    icon?: IconType;
    children?: ReactNode;

    className?: string;
    labelClassName?: string;
    iconClassName?: string;

    style?: CSSProperties;
    as?: "div" | "span";
}

const Badge = ({
    label,
    icon: Icon,
    children,
    className = "",
    labelClassName = "",
    iconClassName = "",
    style,
    as: Component = "div",
}: BadgeProps) => {
    return (
        <Component
            className={`inline-flex items-center justify-center ${className}`}
            style={style}
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
