import React from "react";

function Footer() {
    return (
        <div className="container-fluid footer-container bg-secondary text-white">
            <div className="row d-flex justify-content-around">
                <div className="col-4 text-center">
                    <a href="https://www.github.com/markcirineo" target="_blank" rel="noreferrer" className="a-footer" ><i className="fab fa-github"></i></a>
                </div>
                <div className="col-4 text-center">
                    <a href="mailto:markcirineo22@gmail.com" className="a-footer" ><i className="fas fa-envelope"></i></a>
                </div>
                <div className="col-4 text-center">
                    <a href="https://www.linkedin.com/in/mark-cirineo/" target="_blank" rel="noreferrer" className="a-footer"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;