
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { MouseEvent, ReactNode } from "react";

interface SectionLinkProps {
    to: string;
    children: ReactNode;
    className?: string;
}

const SectionLink = ({ to, children, className }: SectionLinkProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const sectionId = to.replace("/#", "");

        const scrollToSection = () => {
            const section = document.getElementById(sectionId);

            if (!section) return;

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };

        if (location.pathname !== "/") {
            navigate("/", {
                replace: false,
            });

            requestAnimationFrame(() => {
                requestAnimationFrame(scrollToSection);
            });

            return;
        }

        scrollToSection();
    };

    return (
        <Link to={to} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
};

export { SectionLink };
