import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import home from './home'
import programmer_page from './programmer'

function App() {
  return (
    <div className="App">
      <h1>Jiashu Wang Profile</h1>

        <p>This is a website for Jiashu Wang</p>

        <Router>
          <Route exact path = '/' component = {home} />
          <Route path = '/programmer' component = {programmer_page} />
        </Router>
    </div>
  );
}

export default App;
