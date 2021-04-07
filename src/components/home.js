import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
import programmer from '../img/programmer.png'

const Home = (props) => {

    return (
        <dev>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to = '/programmer'>
                            <img className = 'fade-in' src = {programmer} alt = "programmer page link"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </dev>
    );
}

export default Home;