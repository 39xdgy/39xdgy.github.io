import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import home from './home'
import programmer_page from './programmer'
import about_me_page from './about_me'

function App() {
  return (
    <div className="App">
      <h1 class = "animate__animated animate__fadeIn">Jiashu Wang Profile</h1>

        <Router>
          <Route exact path = '/' component = {home} />
          <Route path = '/programmer' component = {programmer_page} />
          <Route path = '/about_me' component = {about_me_page} />
        </Router>

    </div>
  );
}

export default App;
