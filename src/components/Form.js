import "./FormStyles.css";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';


const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    const serviceId = 'service_pv5zyrk';
    const templateId = 'template_82sqm4b';
    const publicKey = 'z9s_ouXW5ovjzIehY';

    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
    };
     emailjs.send(serviceId,templateId,templateParams,publicKey)
     .then((response)=> {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
     })
     .catch((error)=>{
        console.error('Error sending email:',error);
     });
    }

    return(
        // <div className="form">
          <form onSubmit={handleSubmit} className="emailForm">
            <input type="text" placeholder="Your Name" value={name} onChange={(e)=> setName(e.target.value)}></input>

            <input type="email" placeholder="Your Email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>

            {/* <label>Subject</label> */}
            {/* <input type="text"></input> */}
            <textarea rows="10" cols="30" placeholder="Type your message here" value={message} onChange={(e)=> setMessage(e.target.value)}/>
            <button className="btn">Submit</button>
           
        </form>
    // </div>
    );
};
export default Form;