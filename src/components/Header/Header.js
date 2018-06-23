import React from "react";
import "./Header.css"

const Header = props => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand mr-auto" href="#">
                <img src={require("../../assets/img/dunder-mifflin.png")} width="75px"/>
            </a>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                <span className="navbar-text">
                    <h3>{props.message}</h3>
                </span>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <span className="navbar-text">
                    <h3>Current Score:  {props.currentScore}  | Top Score:  {props.highScore}</h3>
                </span>
                </li>
            </ul>
        </nav>
        <div className="jumbotron">
            
            <h1 className="display-3">
                Welcome to Dunder Mifflin!
            </h1>
            
            <p className="lead">Click a Dunder Mifflin employee to earn points,
             but remember who you clicked to keep those points!</p>
            
        </div>
    </div>
)

export default Header