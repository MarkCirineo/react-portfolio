import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/about-me/about-me";
import ContactMe from "./pages/contact-me";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";

export default function PortfolioContent() {
    const [currentPage, setCurrentPage] = useState("About Me");

    const renderPage = () => {
        if (currentPage === "About Me"){
            return <AboutMe />;
        } else if (currentPage === "Portfolio") {
            return <Portfolio />;
        } else if (currentPage === "Contact Me") {
            return <ContactMe />;
        } else if (currentPage === "Resume") {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <div className="container-fluid footer-container bg-secondary text-white">
                <div className="row d-flex justify-content-around">
                    <div className="col-4 text-center">
                        Email
                    </div>
                    <div className="col-4 text-center">
                        GitHub
                    </div>
                    <div className="col-4 text-center">
                        LinkedIn
                    </div>
                </div>
            </div>
        </div>
    )
}