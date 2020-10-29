import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';
import messagesEn from 'translation/en';
import messagesFr from 'translation/fr';
import LanguageContext from 'context/Language';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('the-fake-agency-config'));
  
  useEffect(() => {
    localStorage.setItem('the-fake-agency-config', currentLanguage);
  }, [currentLanguage]);

  const messages = {
    fr: messagesFr,
    en: messagesEn,
  };

  const pages = [
    { url: "/", name: "Home" },
    { url: "/about", name: "L'agence" },
    { url: "/works", name: "Projets" }
  ];

  return (
    <IntlProvider locale={currentLanguage} messages={messages[currentLanguage]}>
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
    </IntlProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));