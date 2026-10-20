
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import { BurgerButton } from "../burgerMenu/BurgerMenu";
import { HomeLink } from "../../homeLink/HomeLink";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const headerRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLElement>(null);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleNavigation = () => {
        setIsOpen(false);
    };

    // Animación de apertura
    useEffect(() => {
        if (!menuRef.current || !isOpen) return;

        const animation = gsap.fromTo(
            menuRef.current,
            {
                opacity: 0,
                y: -40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power1.out",
            }
        );

        return () => {
            animation.kill();
        };
    }, [isOpen]);

    // Cerrar al hacer clic fuera del menú
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: PointerEvent) => {
            const header = headerRef.current;
            const target = event.target;

            if (
                header &&
                target instanceof Node &&
                !header.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener(
            "pointerdown",
            handleClickOutside,
            true
        );

        return () => {
            document.removeEventListener(
                "pointerdown",
                handleClickOutside,
                true
            );
        };
    }, [isOpen]);

    return (
        <header
            ref={headerRef}
            className="z-100 flex w-[85%] mx-auto h-14 m-5 rounded-full items-center justify-between px-6 py-5 bg-black/85 sticky top-5"
        >
            <div className="container__logo">
                <span className="text-brand font-bold pr-2">
                    &lt;/&gt;
                </span>

                <HomeLink
                    className="font-display text-2xl font-bold text-white"
                >
                    mat<span className="text-brand">dev</span>
                </HomeLink>
            </div>

            <BurgerButton
                isOpen={isOpen}
                onToggle={handleToggle}
            />

            {isOpen && (
                <section
                    ref={menuRef}
                    className="mobile-menu bg-black/90 rounded-2xl w-[80%] h-auto flex flex-col absolute top-16 text-white/80 p-10 gap-5 items-center"
                >
                    <nav className="flex flex-col items-center gap-2">
                        <HomeLink
                            className="hover:text-brand-hover"
                        >
                            Home
                        </HomeLink>

                        <Link
                            to="/#skills"
                            onClick={handleNavigation}
                            className="hover:text-brand-hover"
                        >
                            Skills
                        </Link>

                        <Link
                            to="/#method"
                            onClick={handleNavigation}
                            className="hover:text-brand-hover"
                        >
                            Process
                        </Link>

                        <Link
                            to="/#projects"
                            onClick={handleNavigation}
                            className="hover:text-brand-hover"
                        >
                            Projects
                        </Link>
                    </nav>

                    <Link
                        to={'/#contact'}
                        type="button"
                        onClick={handleNavigation}
                        className="flex h-8 w-50 cursor-pointer items-center justify-center rounded-2xl bg-brand text-black transition-all hover:scale-101 hover:text-gray-700"
                    >
                        Let's Talk
                    </Link>
                </section>
            )}
        </header>
    );
};

export { MobileMenu };
