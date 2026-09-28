import { useState, useEffect, useRef } from 'react'

import { BurgerButton } from '../burgerMenu/BurgerMenu'
import { Link } from 'react-router-dom'

import gsap from 'gsap'




const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuRef = useRef<HTMLElement>(null)


    const handleToggle = () => {
        setIsOpen((prev) => !prev)
    }

    useEffect(() => {
        if (!menuRef.current) return

        if (isOpen) {
            gsap.fromTo(
                menuRef.current,
                {
                    opacity: 0,
                    y: -40
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .7,
                    ease: 'power1.out'
                },
            )
        }
    }, [isOpen]);

    return (
        <header className="flex w-[85%] mx-auto h-14 m-5 rounded-full items-center justify-between px-6 py-5 bg-black/75 relative">

            <div className='container__logo'>
                <span className="text-brand font-bold pr-2">&lt;/&gt;</span>
                <Link to="#home" className="font-display text-2xl font-bold text-white">
                    mat<span className='text-brand'>dev</span>
                </Link>
            </div>

            <BurgerButton
                isOpen={isOpen}
                onToggle={handleToggle}
            />

            {isOpen && (
                <section ref={menuRef} className="mobile-menu bg-black/90 rounded-2xl w-[80%] h-auto flex flex-col absolute top-16 text-white/80 p-10 gap-5 items-center">
                    <nav className='flex flex-col items-center gap-2'>
                        <Link to="#home" className="hover:text-brand-hover">Inicio</Link>
                        <Link to="#habilidades" className="hover:text-brand-hover">Habilidades</Link>
                        <Link to="#proceso" className="hover:text-brand-hover">Proceso</Link>
                        <Link to="#proyectos" className="hover:text-brand-hover">Proyectos</Link>
                    </nav>

                    <button type="button" className="text-black bg-brand rounded-2xl hover:scale-101 hover:text-gray-700 transition-all h-8 w-50 cursor-pointer">
                        Agendar llamada
                    </button>
                </section>
            )}

        </header>
    )
}

export { MobileMenu }