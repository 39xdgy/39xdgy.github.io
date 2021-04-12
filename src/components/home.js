import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

const Home = (props) => {

    return (
        <dev>
            <h2 class = "animate__animated animate__fadeIn animate__delay-1s">This is a profile for Jiashu Wang</h2>
            <h3 class = "animate__animated animate__fadeIn animate__delay-2s">Click on the part that you want to know about me</h3>
            <nav>
                <ul className = "home_page_list">
                    <li>
                        <NavLink class = "animate__animated animate__fadeIn animate__delay-3s" exact to = '/programmer'>
                        <h1>Programmer</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink class = "animate__animated animate__fadeIn animate__delay-4s" exact to = '/about_me'>
                            <h1>Hobby and what I love</h1>
                        </NavLink>
                    </li>
                    <li>
                        <a class = "animate__animated animate__fadeIn animate__delay-5s" href = 'https://github.com/39xdgy' target = "_blank">
                            <h1>Github</h1>
                        </a>
                    </li>
                </ul>
            </nav>
        </dev>
    );
}

export default Home;
