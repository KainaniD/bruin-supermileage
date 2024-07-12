import axios from 'axios';
import { React, useState } from 'react'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleError(error) {
        setErrorMessage(error);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            return handleError("Please fill out all fields");
        }
        const regexCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email.match(regexCheck)) return handleError("Please enter a valid email address");

        const data = {
            service_id: import.meta.env.VITE_EMAIL_SERVICE_ID,
            template_id: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            user_id: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
            template_params: {
                from_name: name,
                to_name: "Bruin SMV",
                from_email: email,
                message: message,
            }
        };

        axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
            .then(result => {
                setName('');
                setEmail('');
                setMessage('');
                setErrorMessage('');
            })
            .catch(() => { 
                setErrorMessage("oops, something wrong happened :(");
            })
    };


    return (
        <>
            <div className="flex flex-col landing gap-8">
                <h1 className='text-neutral-700 title'>Contact</h1>
                <form onSubmit={sendEmail} className='flex flex-col gap-4 w-full lg:w-1/2'>
                    <div className="flex flex-row gap-4">
                        <div className='flex flex-col w-1/2'>
                            <label className='form-label'>Name</label>
                            <input
                                className='p-2 rounded-lg'
                                type="text"
                                name="user_name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label className='form-label'>Email</label>
                            <input
                                className='p-2 rounded-lg'
                                type="email"
                                name="user_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='form-label'>Subject</label>
                        <textarea
                            className='p-2 rounded-lg'
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div id="ErrorMessage" className={`flex flex-row gap-5 text-red-500 ${errorMessage ? '' : 'hidden'}`}>
                        <p>* {errorMessage}</p>
                    </div>
                    <button type="submit" className='bg-blue-900 p-2 text-xl rounded-md text-white'>Send</button>
                </form>
            </div>
        </>
    );
}

export default Contact