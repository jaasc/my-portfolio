import React from "react";
import { Link } from "react-router-dom";

function Nav({ mainRef, projectRef, contactRef }) {
    const handleScroll = (ref) => {
        window.scrollTo({
          behavior: "smooth",
          top: ref.offsetTop,
        });
      };

    return (
        <header className="p-4 bg-blue-200/70 fixed sticky top-0 flex justify-between items-center">
            <h1 className="text-4xl font-bold font-oswald cursor-default">JAS</h1>
            <nav className="space-x-7 hid:hidden">
                <Link 
                    to="/#" 
                    onClick={() => handleScroll(mainRef.current)}
                    className="text-xl cursor-pointer"
                    >Home</Link>
                <Link 
                    to="/#projects" 
                    onClick={() => handleScroll(projectRef.current)}
                    className="text-xl cursor-pointer"
                    >Projects</Link>
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