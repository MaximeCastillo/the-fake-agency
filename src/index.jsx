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
import LanguageContext from 'context/Language';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  console.log("Language de l'App : ", currentLanguage);

  const pages = [
    { url: "/", name: "Home" },
    { url: "/about", name: "L'agence" },
    { url: "/works", name: "Projets" }
  ];

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeToFr: () => setCurrentLanguage('fr'),
      changeToEn: () => setCurrentLanguage('en'),
    }}>
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
    </LanguageContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));