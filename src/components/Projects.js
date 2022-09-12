import React from "react";
import projects from "../projects";

function Projects({ projectRef }){
    return(
        <div ref={projectRef} className="min-h-screen bg-gradient-to-t from-blue-300 to-blue-100 text-center py-20">
            <h1
                className="text-4xl pb-12 px-2 font-bold font-oswald tracking-wide"
                >These are my recent projects</h1>
            <div className="flex flex-wrap justify-center">

                {
                    projects.map(project => 
                        <div 
                            key={project.name}
                            className="border-2 border-black rounded-lg truncate w-[300px] h-[200px] m-4 cursor-pointer"
                            onClick={()=> window.open(project.link, "_blank")}
                            >
                            <div className="h-[80%] w-full overflow-hidden">
                                <img 
                                    src={project.img} 
                                    alt="project"
                                    className="h-full object-cover hover:scale-110 duration-700"/>
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