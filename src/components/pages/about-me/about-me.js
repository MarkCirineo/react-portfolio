import React from "react";
import mark from "../../../assets/mark.png"
import "./about-me.css"

export default function AboutMe() {

    return (
        <div>
            <div className="container-fluid d-flex justify-content-center bg-secondary col-sm-6 col-md-4 col-xs-12 col-12 h1-parent">
                <h1 className="about-me-h1">About Me</h1>
            </div>
            <div className="container-fluid content-container about-me-parent d-flex">
                <div className="row d-flex justify-content-evenly">
                    <div className="col-xl-3 col-lg-6 col-sm-9 col-xs-12 justify-content-center bg-secondary image-div">
                        <img alt="me" src={mark} className="mark-img" />
                    </div>
                    <div className="col-lg-10 col-sm-11 d-flex align-items-center text-center bg-secondary description-div">
                        <p className="about-me-p">
                            My name is Mark. I am a Full-stack web developer with a certificate from the University of Pennsylvania. 
                            I'm proficient in HTML, CSS, JavaScript, MySQL, and MongoDB. I enjoy working with technologies including Node.js, Express.js, and ReactJS.
                            I also have experience working with Sequelize, Mongoose, jQuery, Jest, Handlebars, Bootstrap and Materialize.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}