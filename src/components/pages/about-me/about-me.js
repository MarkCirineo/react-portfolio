import React from "react";
import mark from "../../../assets/mark.png"
import "./about-me.css"

export default function AboutMe() {

    return (
        <div className="container-fluid content-container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-8 col-sm-9 col-xs-12 justify-content-center">
                    <h1>About Me</h1>
                    <img alt="me" src={mark} className="mark" />
                </div>
                <div className="col-lg-8 col-md-12 d-flex align-items-center">
                    <p>
                        My name is Mark. I am a Full-stack web developer with a certificate from the University of Pennsylvania. 
                        I'm proficient in HTML, CSS, JavaScript, MySQL, and MongoDB. I enjoy working with technologies including Node.js, Express.js, and ReactJS.
                        I also have experience working with Sequelize, Mongoose, jQuery, Jest, Handlebars, Bootstrap and Materialize.

                    {/* My name is Mark. I am a Full-stack developer. I'm proficient in HTML, CSS, JavaScript and MySQL, as well as technologies including NodeJS, ExpressJS, jQuery, Bootstrap, AJAX, and more. 
                    In my free time I am mostly coding or playing video games. I also enjoy watching Twitch, Youtube, movies and TV shows.
                    You can see some of my work below or view more on my GitHub  */}
                    </p>
                </div>
            </div>
        </div>
    )
}