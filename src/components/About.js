import React from "react";
import chat from "../icons/chat.svg";
import creative from "../icons/creative.svg";
import learning from "../icons/learning.svg";

const style = {
    description: `my-[1em] leading-[2]`,
    descImg: `w-[50%] my-[2em] md:w-[40%] md:my-0 mx-auto`,
    descwImage: `leading-[2] md:w-[50%] w-full`,
    descHolder: `flex-row md:flex my-[2em]`,
}

function About({ aboutRef }){
    return(
        <div id="about-section" ref={aboutRef} className="bg-[#393053]/30 py-[5em] font-[300] border-y-[1px] border-white">
            <div className="max-w-[700px] mx-[auto] px-[1em]">
                <h2 className="text-4xl pb-12 font-[400] font-oswald tracking-wide text-center md:text-left">
                    About Me
                </h2>
                <p className={style.description}>
                    Hi there! My name is &nbsp;<span className="font-satisfy text-[20px]">Jas</span>, a front-end developer.
                </p>
                <div className={style.descHolder}>
                    <p className={style.descwImage}>
                        Over the past few months, I've been learning front-end development through various online courses and tutorials. I'm proficient in HTML, CSS, and JavaScript and have experience with front-end frameworks like React.
                    </p>
                    <img 
                        src={learning} 
                        alt="learning"
                        className={style.descImg}
                        />
                </div>
                <p className={style.description}>
                    I've always been fascinated by the way websites and applications work so I’ve decided to pursue my passion for coding, and I'm excited to be pursuing a career in this field.
                </p>
                <div className={style.descHolder}>
                    <img 
                        src={creative} 
                        alt="creative"
                        className={style.descImg}
                        />
                    <p className={style.descwImage}>
                        I'm looking for opportunities to gain hands-on experience, collaborate with other developers, and contribute to exciting projects. I'm eager to continue learning and growing in this field, and I'm confident that my skills and determination will make me a valuable addition to any team.
                    </p>
                </div>
                <p className={style.description}>
                    Thank you for taking the time to get to know me, and I look forward to connecting with you soon!
                </p>
                <img 
                    src={chat} 
                    alt="let's chat"
                    className={style.descImg}
                />
            </div>
        </div>
    )
}

export default About