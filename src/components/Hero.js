import React from "react";
import welcomeIcon from "../icons/welcome.svg";
import Social from "./Social";

function Hero({ mainRef }){
    return(
        <div ref={mainRef} className="min-h-[90vh] bg-gradient-to-b from-blue-300 to-blue-100 flex flex-col justify-center items-center">
            <img 
                src={welcomeIcon} 
                alt="welcome"
                className="w-60"
                />
            <h1 
                className="text-6xl font-satisfy mt-4"
                >Jas</h1>
            <h2 className="text-4xl m-2 text-center">Front End Developer</h2>
            <hr className="w-full border-2 opacity-50 border-blue-900 mb-3"/>
            <div className="flex w-[300px]">
                <Social/>
            </div>
        </div>
    )
}

export default Hero;