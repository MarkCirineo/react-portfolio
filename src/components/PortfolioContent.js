import React, { useState } from "react";
import Footer from "./footer";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/about-me/about-me";
import ContactMe from "./pages/contact-me/contact-me";
import Portfolio from "./pages/portfolio/portfolio";
import Resume from "./pages/resume/resume";

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
        <div className="parent">
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}