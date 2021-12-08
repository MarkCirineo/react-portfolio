import React from "react";
import mark from "../../../assets/mark.png";
import "./about-me.css";

export default function AboutMe() {

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="container-fluid d-flex justify-content-center bg-secondary col-sm-6 col-md-4 col-xs-12 col-12 h1-parent">
                    <h1 className="about-me-h1">About Me</h1>
                </div>
            </div>
            <div className="container-fluid content-container about-me-parent d-flex justify-content-center">
                <div className="row d-flex justify-content-evenly" id="content-width">
                    <div className="col-xl-3 col-lg-6 col-sm-9 col-xs-12 justify-content-center bg-secondary image-div">
                        <img alt="me" src={mark} className="mark-img" />
                    </div>
                    <div className="col-lg-10 col-sm-11 d-flex align-items-center text-center bg-secondary description-div">
                        <p className="about-me-p">
                            My name is Mark. I am a Full-stack web developer with a certificate from the University of Pennsylvania. 
                            I'm proficient in HTML, CSS, JavaScript, MySQL, and MongoDB. I enjoy working with technologies including Node.js, Express.js, and React.js.
                            I also have experience working with GraphQL, RESTful APIs, Mongoose, Sequelize, jQuery, Jest, Handlebars, Bootstrap and Materialize. 
                            As an eager learner and effective collaborator I’m looking forward to bringing my technical skills to a company to work and grow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}