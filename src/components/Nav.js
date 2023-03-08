import React from "react";
import { Link } from "react-router-dom";

const style = {
    navs: 'text-xl cursor-pointer hover:font-[400] w-full py-[.5em] block border-[3px] border-[#202c37]'
}

function Nav({aboutRef, projectRef }) {
    const moveTo = (ref) => {
        window.scrollTo({
          behavior: "smooth",
          top: ref.offsetTop,
        });
    };

    return (
        <div className="hidden lg:block py-4 w-fit font-oswald text-[#202c37] font-[300] fixed right-0 top-5 z-[700]">
            <nav className="tracking-[2px] flex-col min-w-[200px] text-center bg-white">
                <Link 
                    to="/#" 
                    onClick={() => moveTo(aboutRef.current)}
                    className={style.navs}
                    >About Me</Link>
                <Link 
                    to="/#projects" 
                    onClick={() => moveTo(projectRef.current)}
                    className={style.navs}
                    >Projects</Link>
                {/* <Link 
                    to="/#contact" 
                    onClick={() => handleScroll(contactRef.current)}
                    className="text-xl cursor-pointer"
                    >Contact</Link> */}
            </nav>
        </div>
    );
};

export default Nav;