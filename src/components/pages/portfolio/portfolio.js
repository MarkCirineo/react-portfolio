import React from "react";
import PortfolioCard from "./portfolioCard";
import "./portfolio.css"
import techBlog from "./images/tech-blog.png";
import gotYouCupboard from "./images/got-you-cupboard.png"
import workoutTracker from "./images/workout-tracker.png"
import portfolio from "./images/portfolio.png"

export default function Portfolio() {

    const data = {
        projectOne: {
            name: "Got You Cupboard",
            image: gotYouCupboard,
            description: "This website allows you to search for recipes using just ingredients. You can also search for nearby grocery stores. This sites utilizes Edamam's and MapQuest's APIs. It was build using HTML, CSS, JavaScript, and Materialize.",
            githubLink: "https://github.com/markcirineo/got-you-cupboard",
            deployedLink: "https://markcirineo.github.io/got-you-cupboard/"
        },
        projectTwo: {
            name: "Tech Blog",
            image: techBlog,
            description: "This tech blog allows you to make and account and make and delete posts. You can also view posts from other users.",
            githubLink: "https://github.com/MarkCirineo/tech-blog",
            deployedLink: "https://rocky-inlet-23725.herokuapp.com/"
        },
        projectThree: {
            name: "Workout Tracker",
            image: workoutTracker,
            description: "This web app is a simple workout tracker. You can create workouts and add exercises to them. You can also view your dashboard with a graph of previous workouts.",
            githubLink: "https://github.com/MarkCirineo/workout-tracker",
            deployedLink: "https://obscure-earth-62239.herokuapp.com/?id=61856f4fe3e3fb0016bf626c"
        },
        projectFour: {
            name: "Portfolio",
            image: portfolio,
            description: "This is the website you are looking at right now! It's a display of my previous work and how to contact me. It was built using ReactJS.",
            githubLink: "https://github.com/MarkCirineo/react-portfolio",
            deployedLink: "https://markcirineo.github.io/react-portfolio"
        },
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
    }

    return (
        <section className="work row d-flex flex-column align-items-center" id="work">
            <div className="col-xl-9 col-md-11 row row-cols-lg-2 row-cols-md-2 mb-4 g-4">
                <PortfolioCard 
                    name={data.projectOne.name}
                    image={data.projectOne.image} 
                    description={data.projectOne.description} 
                    githubLink={data.projectOne.githubLink}
                    deployedLink={data.projectOne.deployedLink}
                />
                <PortfolioCard 
                    name={data.projectTwo.name}
                    image={data.projectTwo.image}
                    description={data.projectTwo.description}   
                    githubLink={data.projectTwo.githubLink}
                    deployedLink={data.projectTwo.deployedLink}
                />
                <PortfolioCard 
                    name={data.projectThree.name}
                    image={data.projectThree.image}
                    description={data.projectThree.description}   
                    githubLink={data.projectThree.githubLink}
                    deployedLink={data.projectThree.deployedLink}
                />
                <PortfolioCard 
                    name={data.projectFour.name}
                    image={data.projectFour.image} 
                    description={data.projectFour.description}  
                    githubLink={data.projectFour.githubLink}
                    deployedLink={data.projectFour.deployedLink}
                />
                {/* <PortfolioCard 
                    name={data.projectFive.name}
                    image={data.projectFive.image}
                    description={data.projectFive.description}   
                    githubLink={data.projectFive.githubLink}
                    deployedLink={data.projectFive.deployedLink}
                />
                <PortfolioCard 
                    name={data.projectSix.name}
                    image={data.projectSix.image} 
                    description={data.projectSix.description}  
                    githubLink={data.projectSix.githubLink}
                    deployedLink={data.projectSix.deployedLink}
                /> */}
            </div>
        </section>
    )
}