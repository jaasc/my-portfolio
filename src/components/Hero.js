import React from "react";
import welcomeIcon from "../icons/welcome.svg";
import Social from "./Social";

function Hero(){
    return(
        <div className="min-h-[100vh] flex flex-col justify-center items-center">
            <img 
                src={welcomeIcon} 
                alt="welcome"
                className="w-60"
                />
            <h1 
                className="text-6xl font-satisfy mt-4"
                >Jas
            </h1>
            <h2 className="text-4xl m-2 text-center font-oswald font-[300] tracking-[3px]">Front End Developer</h2>
            <hr className="w-[15%] mt-[1em] mb-[1.5em] border-2 opacity-50 border-blue-300 mb-3"/>
            <div className="flex w-[300px] mt-[.5em]">
                <Social/>
            </div>
        </div>
    )
}

export default Hero;