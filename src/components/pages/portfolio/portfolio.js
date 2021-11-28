import React from "react";
import PortfolioCard from "./portfolioCard";
import "./portfolio.css"
import techBlog from "./images/tech-blog.png";
import gotYouCupboard from "./images/got-you-cupboard.png"
import workoutTracker from "./images/workout-tracker.png"
import portfolio from "./images/portfolio.png"

export default function Portfolio() {

    const data = [
        {
            name: "Got You Cupboard",
            image: gotYouCupboard,
            description: "This website allows you to search for recipes using just ingredients. You can also search for nearby grocery stores. This sites utilizes Edamam's and MapQuest's APIs. It was build using HTML, CSS, JavaScript, and Materialize.",
            githubLink: "https://github.com/markcirineo/got-you-cupboard",
            deployedLink: "https://markcirineo.github.io/got-you-cupboard/"
        },
        {
            name: "Tech Blog",
            image: techBlog,
            description: "This tech blog allows you to make and account and make and delete posts. You can also view posts from other users.",
            githubLink: "https://github.com/MarkCirineo/tech-blog",
            deployedLink: "https://rocky-inlet-23725.herokuapp.com/"
        },
        {
            name: "Workout Tracker",
            image: workoutTracker,
            description: "This web app is a simple workout tracker. You can create workouts and add exercises to them. You can also view your dashboard with a graph of previous workouts.",
            githubLink: "https://github.com/MarkCirineo/workout-tracker",
            deployedLink: "https://obscure-earth-62239.herokuapp.com/?id=61856f4fe3e3fb0016bf626c"
        },
        {
            name: "Portfolio",
            image: portfolio,
            description: "This is the website you are looking at right now! It's a display of my previous work and how to contact me. It was built using ReactJS.",
            githubLink: "https://github.com/MarkCirineo/react-portfolio",
            deployedLink: "https://markcirineo.github.io/react-portfolio"
        }
        // projectFive: {
        //     name: "",
        //     image: "",
        //     description: "",
        //     githubLink: "",
        //     deployedLink: ""
        // },
        // projectSix: {
        //     name: "",
        //     image: "",
        //     description: "",
        //     githubLink: "",
        //     deployedLink: ""
        // },
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