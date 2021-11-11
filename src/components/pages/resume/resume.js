import React from "react";
import "./resume.css"
import resume from "./resume.pdf"

export default function Resume() {

    return (
        <div className="container d-flex justify-content-center" >
            <div className="row col-10 col-xl-12">
                <div className="d-flex align-items-center flex-column">
                    <h1>Resume</h1>
                    <a href={resume} target="_blank" rel="noreferrer" className="resume" download>Download my resume!</a>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center">  
                            <h3>Front-end Proficiencies</h3>
                            <ul className="resume-ul">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center">  
                            <h3>Back-end Proficiencies</h3>
                            <ul className="resume-ul">
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}