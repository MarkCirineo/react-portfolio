import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

function Home() {
    return (
        <div className="container-fluid d-flex align-items-center flex-column">
            <div className="home-div col-lg-8 col-md-10 col-sm-11 col-xs-12">
                <h1 className="home-h1">Hi, I'm <span className="home-name">Mark Cirineo.</span></h1>
                <h2 className="home-h2">I'm a Full-stack web developer.</h2>
            </div>
            <div className="home-link-div col-lg-8 col-md-10 col-sm-11 col-xs-12 d-flex align-items-center justify-content-center flex-columns container-fluid">
                <div className="d-flex justify-content-center flex-column container-fluid align-items-center">
                    <Link className="link col-lg-7 col-md-8 col-sm-10 col-xs-12 text-center" to="/portfolio">View My Work</Link>
                    <a className="link col-lg-7 col-md-8 col-sm-10 col-xs-12 text-center" href="https://www.github.com/markcirineo/" target="_blank" rel="noreferrer">Visit my GitHub</a>
                    <a className="link col-lg-7 col-md-8 col-sm-10 col-xs-12 text-center" href="https://www.linkedin.com/in/mark-cirineo/" target="_blank" rel="noreferrer">Visit my LinkedIn</a>
                    <a className="link col-lg-7 col-md-8 col-sm-10 col-xs-12 text-center" href="mailto:markcirineo22@gmail.com">Send me an email!</a>
                </div>
            </div>
        </div>
    )
}

export default Home;