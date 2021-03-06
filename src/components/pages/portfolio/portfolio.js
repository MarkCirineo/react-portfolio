import React from "react";
import PortfolioCard from "./portfolioCard";
import "./portfolio.css"
import techBlog from "./images/tech-blog.png";
import gotYouCupboard from "./images/got-you-cupboard.png";
import portfolio from "./images/portfolio.png";
import bingeworthy from "./images/bingeworthy.png";
import bookSearchEngine from "./images/book-search-engine.png";
import hangman from "./images/hangman.png";

export default function Portfolio() {

    const data = [
        {
            name: "Hangman",
            technologies: "MERN Stack, GraphQL",
            image: hangman,
            description: "This is a full-stack application designed to give a fun experience playing Hangman. Users can simply go to the game page to play. Users can also create an account and save their scores (wins/losses).",
            githubLink: "https://github.com/MarkCirineo/hangman",
            deployedLink: "https://the-hangman-app.herokuapp.com/"
        },
        {
            name: "BingeWorthy",
            technologies: "MERN Stack",
            image: bingeworthy,
            description: "This is a full-stack application designed for movie lovers who want a centralized location for all the movies they want to watch. Users can search for any title, view more information about the movie, and add it to their account for future reference.",
            githubLink: "https://github.com/MarkCirineo/bingeworthy",
            deployedLink: "https://calm-taiga-38622.herokuapp.com/"
        },
        {
            name: "Tech Blog",
            technologies: "ExpressJS, MySQL, Sequelize, NodeJS",
            image: techBlog,
            description: "A full-stack tech blog site that allows users to create an account and log in. Once logged in users can create, update and delete their own blog posts via authentication. Users can also view posts made by other users.",
            githubLink: "https://github.com/MarkCirineo/tech-blog",
            deployedLink: "https://rocky-inlet-23725.herokuapp.com/"
        },
        {
            name: "Book Search Engine",
            technologies: "GraphQL, ExpressJS",
            image: bookSearchEngine,
            description: "The web app allows you to search for books that you would like to purchase. When you create an account you can save books to a list. You can view all you saved books and remove ones as you wish. Refactored from a RESTful API to a GraphQL API.",
            githubLink: "https://github.com/MarkCirineo/book-search-engine",
            deployedLink: "https://morning-dusk-09419.herokuapp.com/"
        },
        {
            name: "Got You Cupboard",
            technologies: "JavaScript, Materialize",
            image: gotYouCupboard,
            description: "This website allows you to search for recipes using just ingredients. You can also search for nearby grocery stores. This sites utilizes Edamam's and MapQuest's APIs. It was build using HTML, CSS, JavaScript, and Materialize.",
            githubLink: "https://github.com/markcirineo/got-you-cupboard",
            deployedLink: "https://markcirineo.github.io/got-you-cupboard/"
        },
        {
            name: "Portfolio",
            technologies: "React.js",
            image: portfolio,
            description: "This is the website you are looking at right now! It's a display of my previous work and how to contact me. It was built using ReactJS.",
            githubLink: "https://github.com/MarkCirineo/react-portfolio",
            deployedLink: "https://markcirineo.github.io/react-portfolio"
        }
    ]

    return (
        <section className="work d-flex flex-column align-items-center" id="work">
            <div className="col-xl-9 col-md-11 row row-cols-lg-2 row-cols-md-2 mb-4 g-4">
                {data.map((project, index) => {
                    return <PortfolioCard
                    key={index} 
                    name={project.name}
                    technologies={project.technologies}
                    image={project.image} 
                    description={project.description} 
                    githubLink={project.githubLink}
                    deployedLink={project.deployedLink}
                    />
                })}
            </div>
        </section>
    )
}