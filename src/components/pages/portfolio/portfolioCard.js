import React from "react";

export default function PortfolioCard(props) {
    return (   
        <div className="col-12">
            <div className="card h-100">
                <img src={props.image} className="card-img-top" alt="project"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-body card-link-div">
                    <a href={props.githubLink} className="card-link">GitHub Repo</a>
                    <a href={props.deployedLink} className="card-link">Website</a>
                </div>
            </div>
        </div>
    )
}