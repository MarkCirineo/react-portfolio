import React from "react";
import "./resume.css";
import resume from "./resume.pdf";

export default function Resume() {

    return (
        <div className="container-fluid d-flex justify-content-center main-resume-div">
            <div className="row col-10 col-xl-12">
                <div className="justify-content-center d-flex containter-fluid mt-3 mb-2">
                    <div className="d-flex align-items-center flex-column resume-header col-12 col-md-10 col-lg-7 col-xl-5">
                        <h1 className="resume-h1">Resume</h1>
                        <a href={resume} target="_blank" rel="noreferrer" className="resume text-center" download>Click here to download my resume!</a>
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-xl-8 col-lg-10 col-md-12 col-12 d-flex flex-column align-items-center technology-div">
                            <h3>Technologies</h3>
                            <div className="container d-flex flex-wrap justify-content-evenly align-items-center">
                                <ul className="resume-ul col-11 col-md-10 text-center d-flex flex-wrap justify-content-center">
                                    <li>JavaScript</li>
                                    <li>Node.js</li>
                                    <li>React.js</li>
                                    <li>Express.js</li>
                                    <li>MongoDB</li>
                                    <li>GraphQL</li>
                                    <li>RESTful APIs</li>
                                    <li>Mongoose</li>
                                    <li>MySQL</li>
                                    <li>Bootstrap</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Sequelize</li>
                                    <li>jQuery</li>
                                    <li>Handlebars</li>
                                    <li>Materialize</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-10 col-md-12 col-12 d-flex flex-column align-items-center skill-div">
                            <h3>Skills</h3>
                            <div className="container d-flex flex-wrap justify-content-evenly align-items-center">
                                <ul className="resume-ul col-11 col-md-10 text-center d-flex flex-wrap justify-content-center">
                                    <li>Semantic HTML</li>
                                    <li>Responsive Design</li>
                                    <li>OOP</li>
                                    <li>Git Flow</li>
                                    <li>MVC</li>
                                    <li>Heroku</li>
                                    <li>Wireframing</li>
                                    <li>PWAs</li>
                                    <li>DOM manipulation</li>
                                    <li>Version control</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}