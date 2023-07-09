import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section>
            <h2>Contact Me</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;