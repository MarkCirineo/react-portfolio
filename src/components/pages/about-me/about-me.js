import React from "react";
import mark from "../../../assets/mark.png"
import "./about-me.css"

export default function AboutMe() {

    return (
        <div className="container-fluid content-container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-8 col-sm-9 col-xs-12 justify-content-center">
                    <h1 className="about-me-h1">About Me</h1>
                    <img alt="me" src={mark} className="mark" />
                </div>
                <div className="col-lg-8 col-md-12 d-flex align-items-center">
                    <p className="about-me-p">
                        My name is Mark. I am a Full-stack web developer with a certificate from the University of Pennsylvania. 
                        I'm proficient in HTML, CSS, JavaScript, MySQL, and MongoDB. I enjoy working with technologies including Node.js, Express.js, and ReactJS.
                        I also have experience working with Sequelize, Mongoose, jQuery, Jest, Handlebars, Bootstrap and Materialize.
                    </p>
                </div>
            </div>
        </div>
    )
}