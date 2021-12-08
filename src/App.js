import React, { useState } from "react";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import AboutMe from "./components/pages/about-me/about-me";
import ContactMe from "./components/pages/contact-me/contact-me";
import Portfolio from "./components/pages/portfolio/portfolio";
import Resume from "./components/pages/resume/resume";
import Home from "./components/pages/home/home";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
    const [currentPage, setCurrentPage] = useState("Home page");
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="parent">
            <HashRouter>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/about-me" element={ <AboutMe /> } />
                    <Route path="/portfolio" element={ <Portfolio /> } />
                    <Route path="/contact-me" element={ <ContactMe /> } />
                    <Route path="/resume" element={ <Resume /> } />
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
