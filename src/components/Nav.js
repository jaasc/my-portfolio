import React from "react";
import { Link } from "react-router-dom";

function Nav({ mainRef, projectRef, contactRef }) {
    const handleScroll = (ref) => {
        window.scrollTo({
          behavior: "smooth",
          top: ref.offsetTop,
        });
      };
// bg-blue-200/70 --header
    return (
        <header className="p-4 fixed sticky top-0 flex justify-between items-center bg-gradient-to-b from-[#202c37]/100 to-[#202c37]/5 z-[700]">
            <h1 className="text-4xl font-oswald cursor-default tracking-[2px]">
                JAS |<span className="text-3xl tracking-[1px]"> Front End Dev</span>
            </h1>
            <nav className="space-x-7">
                {/* <Link 
                    to="/#" 
                    onClick={() => handleScroll(mainRef.current)}
                    className="text-xl cursor-pointer"
                    >Home</Link> */}
                {/* <Link 
                    to="/#projects" 
                    onClick={() => handleScroll(projectRef.current)}
                    className="text-xl cursor-pointer"
                    >Projects</Link> */}
                <Link 
                    to="/#contact" 
                    onClick={() => handleScroll(contactRef.current)}
                    className="text-xl cursor-pointer"
                    >Contact</Link>
            </nav>
        </header>
    );
};

export default Nav;