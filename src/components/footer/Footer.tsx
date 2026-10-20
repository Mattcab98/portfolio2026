
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home } from "lucide-react";

import { HomeLink } from "../../components/homeLink/HomeLink";
import { SectionLink } from "../../components/sectionLink/SectionLink";

const Footer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBackToTop = () => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        };

        if (window.location.pathname !== "/") {
            navigate("/", { replace: false });

            requestAnimationFrame(() => {
                requestAnimationFrame(scrollToTop);
            });

            return;
        }

        scrollToTop();
    };

    return (
        <footer className="w-full border-t border-zinc-800/70 bg-background px-6 py-8 sm:px-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">

                {/* BRAND, NAVIGATION AND BACK TO TOP */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between items-center">

                    {/* BRAND */}
                    <HomeLink
                        className="w-fit font-display text-2xl font-extrabold tracking-tight text-white transition-colors duration-300 hover:text-brand"
                    >
                        mat<span className="text-brand">dev</span>
                    </HomeLink>

                    {/* NAVIGATION */}
                    <nav
                        aria-label={t("footer.navigation")}
                        className="flex flex-col items-center gap-y-3 text-sm text-zinc-400"
                    >
                        <SectionLink
                            to="/#skills"
                            className="transition-colors duration-300 hover:text-brand"
                        >
                            {t("What I Do")}
                        </SectionLink>

                        <SectionLink
                            to="/#method"
                            className="transition-colors duration-300 hover:text-brand"
                        >
                            {t("Method")}
                        </SectionLink>

                        <SectionLink
                            to="/#projects"
                            className="transition-colors duration-300 hover:text-brand"
                        >
                            {t("Projects")}
                        </SectionLink>

                        <SectionLink
                            to="/#reviews"
                            className="transition-colors duration-300 hover:text-brand"
                        >
                            {t("Reviews")}
                        </SectionLink>

                        <SectionLink
                            to="/#contact"
                            className="transition-colors duration-300 hover:text-brand"
                        >
                            {t("Contact")}
                        </SectionLink>
                    </nav>

                    {/* BACK TO TOP */}
                    <button
                        type="button"
                        onClick={handleBackToTop}
                        aria-label="Back to top"
                        className="group flex w-fit items-center gap-2 rounded-full border border-zinc-800 p-3 text-sm text-zinc-300 transition-all duration-300 hover:border-brand/50 hover:text-brand"
                    >
                        <Home
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1"
                            aria-hidden="true"
                        />
                    </button>
                </div>

                {/* COPYRIGHT */}
                <div className="flex border-t border-zinc-800/70 pt-5 text-xs text-zinc-500 justify-center">
                    <p>
                        © {new Date().getFullYear()} matdev. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
