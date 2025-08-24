import React, { useState } from "react";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
    const [isopen, setIsopen] = useState(false);

    const togglemenu = () => {
        setIsopen((prev) => !prev);
    };

    const NavItems = () => {
        return (
            <ul className="flex sm:flex-row flex-col gap-6">
                {navLinks.map((links)=>(<li key={links.id} className="nav-li">
                        <a className="nav-li_a" href={links.href}>{links.name}</a>
                    </li>

                ))}

            </ul>
        );
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-4 px-6">
                    {/* Logo */}
                    <a
                        href="/"
                        className="text-neutral-200 text-2xl font-bold hover:text-white transition-all hover:text-3xl ease-in duration-300"
                    >
                        Amaan
                    </a>

                    {/* Mobile toggle button */}
                    <button
                        onClick={togglemenu}
                        className="text-neutral-200 hover:text-white sm:hidden flex"
                    >
                        <img
                            src={isopen ? "public/assets/close.svg" : "public/assets/menu.svg"}
                            alt="toggle"
                            className="w-7 h-7"
                        />
                    </button>

                    {/* Desktop nav */}
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isopen ? "max-h-screen" : "max-h-0"} `}>
                <nav className="p-5">
                    <NavItems />
                </nav>

            </div>

            {/* 🔥 Moving red-green light strip */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 via-green-500 to-red-500 animate-gradient-x"></div>
        </header>
    );
};

export default Navbar;
