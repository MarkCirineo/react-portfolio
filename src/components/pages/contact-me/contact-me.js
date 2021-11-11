import React from "react";
import "./contact-me.css"

export default function ContactMe() {

    return (
        <div className="container pt-4">
            <div>
                <h4>The best way to contant me is by sending an email to <a href="mailto:markcirineo22@gmail.com">markcirineo22@gmail.com</a></h4>
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="name-input" className="form-label">Name</label>
                <input type="text" className="form-control" id="name-input" placeholder="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email-input" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email-input" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="message-input" className="form-label">Message</label>
                <textarea className="form-control" id="message-input" rows="4"></textarea>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn mb-3"><a className="button-a" href="mailto:markcirineo@gmail.com">Send</a></button>
            </div>
        </div>
    )
}