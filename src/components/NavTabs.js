import React from "react";
import "../index.css"

function NavTabs(props) {
    return (
        <header className="container-fluid bg-secondary text-white">
            <div className="row align-items-center d-flex flex-wrap-reverse justify-content-lg-around justify-content-md-center text-center">
                <div className="col-lg-3 col-md-5 header-name d-flex flex-column"><span className="name-span">Mark Cirineo</span> <span className="desc-span">Full-stack web developer</span></div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-around flex-nowrap header-links">
                    <a 
                        href="#about-me" 
                        onClick={() => props.handlePageChange("About Me")}
                        className={props.currentPage === "About Me" ? "a-header active" : "a-header"}
                    >
                        About Me
                    </a>
                    <a 
                        href="#portfolio" 
                        onClick={() => props.handlePageChange("Portfolio")}
                        className={props.currentPage === "Portfolio" ? "a-header active" : "a-header"}
                    >
                        Portfolio
                    </a>
                    <a 
                        href="#contact-me" 
                        onClick={() => props.handlePageChange("Contact Me")}
                        className={props.currentPage === "Contact Me" ? "a-header active" : "a-header"}
                    >
                        Contact Me
                    </a>
                    <a 
                        href="#resume" 
                        onClick={() => props.handlePageChange("Resume")}
                        className={props.currentPage === "Resume" ? "a-header active" : "a-header"}
                    >
                        Resume
                    </a>
                </div>
            </div>
        </header>
    )
}

export default NavTabs;