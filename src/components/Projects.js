import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import projects from "../projects";

function Projects({ projectRef }){
    const projOption = [faCode, faWindowMaximize]

    return(
        <div id="about-section" ref={projectRef} className="min-h-screen text-center py-20">
            <h1
                className="text-4xl pb-12 px-2 font-[400] font-oswald tracking-wide"
                >Projects</h1>
            <div className="flex flex-wrap justify-center font-[300]">

                {
                    projects.map(project => 
                        <div 
                            key={project.name}
                            className="group border-2 border-white rounded-lg text-[#202c37] truncate w-[300px] h-[200px] m-4"
                            >
                            <div className="h-[80%] w-full overflow-hidden relative">
                                <div className="bg-blue-900/70 absolute w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 duration-700">
                                    {
                                        projOption.map((option, index) => 
                                            <a 
                                                key={index}
                                                href={option === faCode ? project.github : project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-[1em] rounded-[50%] bg-white flex items-center justify-center even:ml-[1em] cursor-pointer"
                                                >
                                                <FontAwesomeIcon 
                                                    icon={option}
                                                    className="h-[25px] w-[25px]"
                                                    />
                                            </a>
                                        )
                                    }
                                </div>
                                <img 
                                    src={project.img} 
                                    alt="project"
                                    className="h-full object-cover"/>
                            </div>
                            <h3
                                className="bg-blue-100 h-[20%] text-xl p-1 font-oswald"
                                >{project.name}</h3>
                        </div>
                        )
                }
            </div>
        </div>
    )
}

export default Projects;