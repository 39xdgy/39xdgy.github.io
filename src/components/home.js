import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

const Home = (props) => {
    const zoomOutRef = useRef()

    function fadeOut() {
        
        zoomOutRef.current.onClick = function() {
            console.log(zoomOutRef.current)
            zoomOutRef.current.fadeOut = "true"
            
        }
    }


    return (
        <div ref = {zoomOutRef} className = "home">

            <h1 className = "animate__animated animate__fadeIn">Jiashu Wang Profile</h1>

            <h2 className = "animate__animated animate__fadeIn ">This is a profile for Jiashu Wang</h2>
            <h3 className = "animate__animated animate__fadeIn ">Click on the part that you want to know about me</h3>
            <nav>
                <ul className = "home_page_list">
                    <li>
                        <NavLink onClick = {fadeOut} className = "animate__animated animate__fadeIn animate__delay-1s" exact to = '/programmer'>
                        <h1>Programmer</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick = {fadeOut} className = "link_about_me animate__animated animate__fadeIn animate__delay-2s" exact to = '/about_me'>
                            <h1>Hobby and what I love</h1>
                        </NavLink>
                    </li>
                    <li>
                        <a className = "animate__animated animate__fadeIn animate__delay-3s " href = 'https://github.com/39xdgy' target = "_blank">
                            <h1>Github</h1>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
