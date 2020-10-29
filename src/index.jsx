import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';

const App = () => {
  const [language, setLanguage] = useState('fr');

  const pages = [
    { url: "/", name: "Home" },
    { url: "/about", name: "L'agence" },
    { url: "/works", name: "Projets" }
  ];

  return (
    <Router>
      <div>
        <Navbar pages={pages} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));