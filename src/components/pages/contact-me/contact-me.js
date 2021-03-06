import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button, Alert } from "react-bootstrap";
import "./contact-me.css"

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

export default function ContactMe() {

    const [userFormData, setUserFormData] = useState({ name: "", email: "", message: "" });
    const [validated] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showInvalidEmailAlert, setShowInvalidEmailAlert] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value});
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (/.+@.+\..+/.test(e.target.email.value)) {
            try {
                const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);
                console.log(result.text);
                setShowSuccessAlert(true);
            } catch (err) {
                setShowErrorAlert(true);
            }
            setUserFormData({ name: "", email: "", message: "" });
        } else {
            setShowInvalidEmailAlert(true);
        }
    }

    return (
        <div className="container pt-3 d-flex justify-content-center flex-column align-items-center contact-me-main-div">
            <div className="bg-secondary text-center contact-me-header col-12 col-sm-9 col-md-5 col-lg-4">
                <h1>Contact Me!</h1>
            </div>
            <div className="col-sm-12 col-md-9 col-12 contact-me-div bg-secondary">
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Alert dismissible onClose={() => setShowSuccessAlert(false)} show={showSuccessAlert} variant="success">
                        Email sent!
                    </Alert>
                    <Alert dismissible onClose={() => setShowErrorAlert(false)} show={showErrorAlert} variant="danger">
                        Something went wrong! Click <a className="alert-mail-link" href="mailto:markcirineo22@gmail.com">here</a> to try a different method.
                    </Alert>
                    <Form.Group>
                        <Form.Label htmlFor="name">
                            Name
                        </Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Your name"
                            name="name"
                            onChange={handleInputChange}
                            value={userFormData.name}
                            required
                        />
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">
                        Name is required!
                    </Form.Control.Feedback>

                    <Form.Group>
                        <Form.Label htmlFor="email">
                            Email
                        </Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder="Your email address"
                            name="email"
                            onChange={handleInputChange}
                            value={userFormData.email}
                            required
                        />
                    </Form.Group>
                    <Alert dismissible onClose={() => setShowInvalidEmailAlert(false)} show={showInvalidEmailAlert} variant="danger">
                        Invalid Email address!
                    </Alert>
                    <Form.Control.Feedback type="invalid">
                        Email is required!
                    </Form.Control.Feedback>

                    <Form.Group>
                        <Form.Label htmlFor="message">
                            Message
                        </Form.Label>
                        <Form.Control 
                            type="text"
                            as="textarea"
                            rows={4}
                            placeholder="Your message"
                            name="message"
                            onChange={handleInputChange}
                            value={userFormData.message}
                            required
                        />
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">
                        Message is required!
                    </Form.Control.Feedback>
                    <div className="container-fluid justify-content-center d-flex">
                        <Button
                            disabled={!(userFormData.name && userFormData.email && userFormData.message)}
                            type="submit"
                            variant="success"
                            className="contact-me-button col-8 col-md-5 col-lg-4 col-xl-3"
                        >
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}