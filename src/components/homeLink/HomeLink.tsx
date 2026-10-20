
import { Link, useLocation } from "react-router-dom";
import type { MouseEvent, ReactNode } from "react";

interface HomeLinkProps {
    children: ReactNode;
    className?: string;
}

const HomeLink = ({ children, className }: HomeLinkProps) => {
    const location = useLocation();

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        if (location.pathname !== "/") {
            window.location.href = "/#home";
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Link
            to="/#home"
            onClick={handleClick}
            className={className}
        >
            {children}
        </Link>
    );
};

export { HomeLink };
