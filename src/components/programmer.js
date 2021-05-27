import React from 'react';
import '../App.css';

const programmer_page = (props) => {

    return (
        <div>
            <h2>Languages that I know</h2>
            <p>Python, Java, JS, C#, HTML/CSS</p>
            <h2>Topic that I know/love</h2>
            <p>Neural network, SQL & NoSQL database, Agile development, Full Stack development, Software development</p>

            <h2>Skills and Tools that I know</h2>
            <p>React, Vue, typescript, AJAX, Handlebar<br/> MongoDB, MySQL<br/> Keras, Tensorflow<br/> git, SVN, ssh<br/> unix system<br/>Unity, rumpy, RPG maker<br/>Kanban Board, Trello<br/> arduino and Raspberry Pi</p>
        
            <h2>Things/topics I want to learn in the future</h2>
            <p>Golang, pytorch, cybersecurity, robotics, quantum computing and more </p>

            <h4>For all the projects, Please go to the <a class = "link_in_programmer" href = 'https://github.com/39xdgy' target = "_blank">github page</a></h4>
        
            <a href = "/">Back</a>
        </div>
    )
}

export default programmer_page;