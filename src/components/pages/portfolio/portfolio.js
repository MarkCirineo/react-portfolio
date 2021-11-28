import React from "react";
import PortfolioCard from "./portfolioCard";
import "./portfolio.css"
import techBlog from "./images/tech-blog.png";
import gotYouCupboard from "./images/got-you-cupboard.png";
import workoutTracker from "./images/workout-tracker.png";
import portfolio from "./images/portfolio.png";
import bingeworthy from "./images/bingeworthy.png";
import bookSearchEngine from "./images/book-search-engine.png";

export default function Portfolio() {

    const data = [
        {
            name: "Tech Blog",
            image: techBlog,
            description: "A full-stack tech blog site that allows users to create an account and log in. Once logged in users can create, update and delete their own blog posts via authentication. Users can also view posts made by others users.",
            githubLink: "https://github.com/MarkCirineo/tech-blog",
            deployedLink: "https://rocky-inlet-23725.herokuapp.com/"
        },
        {
            name: "BingeWorthy",
            image: bingeworthy,
            description: "This is a full-stack application designed for movie lovers who want a centralized location for all the movies they want to watch. Users can search for any title, view more information about the movie, and add it to their account for future reference.",
            githubLink: "https://github.com/MarkCirineo/bingeworthy",
            deployedLink: "https://calm-taiga-38622.herokuapp.com/"
        },
        {
            name: "Book Search Engine",
            image: bookSearchEngine,
            description: "The web app allows you to search for books that you would like to purchase. When you create an account you can save books to a list. You can view all you saved books and remove ones as you wish. Refactored from a RESTful API to a GraphQL API.",
            githubLink: "https://github.com/MarkCirineo/book-search-engine",
            deployedLink: "https://morning-dusk-09419.herokuapp.com/"
        },
        {
            name: "Got You Cupboard",
            image: gotYouCupboard,
            description: "This website allows you to search for recipes using just ingredients. You can also search for nearby grocery stores. This sites utilizes Edamam's and MapQuest's APIs. It was build using HTML, CSS, JavaScript, and Materialize.",
            githubLink: "https://github.com/markcirineo/got-you-cupboard",
            deployedLink: "https://markcirineo.github.io/got-you-cupboard/"
        },
        {
            name: "Portfolio",
            image: portfolio,
            description: "This is the website you are looking at right now! It's a display of my previous work and how to contact me. It was built using ReactJS.",
            githubLink: "https://github.com/MarkCirineo/react-portfolio",
            deployedLink: "https://markcirineo.github.io/react-portfolio"
        },
        {
            name: "Workout Tracker",
            image: workoutTracker,
            description: "This web app is a simple workout tracker. You can create workouts and add exercises to them. You can also view your dashboard with a graph of previous workouts.",
            githubLink: "https://github.com/MarkCirineo/workout-tracker",
            deployedLink: "https://obscure-earth-62239.herokuapp.com/?id=61856f4fe3e3fb0016bf626c"
        }
    ]

    return (
        <section className="work row d-flex flex-column align-items-center" id="work">
            <div className="col-xl-9 col-md-11 row row-cols-lg-2 row-cols-md-2 mb-4 g-4">
                {data.map((project) => {
                    return <PortfolioCard 
                    name={project.name}
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