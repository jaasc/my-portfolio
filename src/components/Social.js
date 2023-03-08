import { faCodepen, faGithub, faSkype } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Social(){
    const socialLinks = [
    {
        icon: faEnvelope,
        link: 'mailto:jasmc29@gmail.com'
    }, {
        icon: faSkype,
        link: 'skype:live:.cid.5f758d703d5809ee?chat'
    }, {
        icon: faCodepen,
        link: 'https://codepen.io/jaass'
    },{
        icon: faGithub,
        link: 'https://github.com/jaasc'
    } 
    ]

    return(
        socialLinks.map((social, ind) => 
            <Link
                key={ind} 
                className="w-full cursor-pointer text-center hover:scale-110"
                to="#"
                onClick={() => window.open(social.link, '_blank')}
                >
                <FontAwesomeIcon
                    icon={social.icon} 
                    className="h-7"
                    />
            </Link>)
    )
}

export default Social