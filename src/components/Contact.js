import { send } from "emailjs-com";
import React, { useState } from "react";
import Social from "./Social";

function Contact(){
    const serviceID = "service_45cpbmj"
    const templateID = "template_vnflrep"
    const userID = "gtScpYRQFFRUdjrUF"
    
    const [toSend, setToSend] = useState({
        to_name: "Jas",
        from_name: "",
        reply_to: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setToSend(info => ({...info, [name]: value}))
    }

    const handleEmail = (e) => {
        e.preventDefault()
        send(serviceID, templateID, toSend, userID)
            .then(res => {
                console.log('Email sent!', res.status, res.text)
                setToSend({...toSend, from_name: "", reply_to: "", message: ""})
            })
            .catch(err => console.log("Email sending failed!", err))
    }

    return(
        <div 
            className="flex flex-col items-center pb-2"
            >
            {/* <h1
                className="text-4xl pb-12 font-bold font-oswald"
                >Contact Me</h1>
            <form 
                className="flex flex-col p-10 border-2 bg-blue-500 max-w-lg w-4/5 rounded-lg"
                onSubmit={handleEmail}
                >
                <input 
                    type="text" 
                    placeholder="Enter name"
                    className="rounded-lg py-2 px-4 mb-2"
                    name="from_name"
                    value={toSend.from_name}
                    onChange={handleChange}
                    />
                <input 
                    type="email" 
                    placeholder="Enter email"
                    className="rounded-lg py-2 px-4 mb-2"
                    name="reply_to"
                    value={toSend.reply_to}
                    onChange={handleChange}
                    />
                <textarea 
                    placeholder="Enter your message here..."
                    className="rounded-lg py-2 px-4 mb-2 h-28"
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                    />
                <button 
                    type="submit"
                    className="rounded-lg font-oswald uppercase font-bold tracking-wider bg-blue-300 p-2 hover:bg-blue-200 active:scale-95 active:bg-blue-300"
                    >Send</button>
            </form> */}
            <div className="flex w-[300px] mt-auto">
                <Social/>
            </div>
        </div>
    )
}

export default Contact;