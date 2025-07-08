import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                serviceID,      // from EmailJS dashboard
                templateID,     // from EmailJS dashboard
                form.current,
                publicKey        // public key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.error(error)
                    console.log(error.text);
                    alert('Something went wrong!');
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input type="text" name="user_name" placeholder="Your Name" className="border p-2 w-full" required />
            <input type="email" name="user_email" placeholder="Your Email" className="border p-2 w-full" required />
            <textarea name="message" placeholder="Message" className="border p-2 w-full" required></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
    );
};

export default ContactForm;
