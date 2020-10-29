import React from 'react';
import { withLanguage } from 'context/Language';
import fr_flag from 'assets/images/fr_flag.png';
import en_flag from 'assets/images/en_flag.png';

const LanguageButton = ({ language }) => {
  if (language.currentLanguage === 'fr') {
    return <button><img src={en_flag} onClick={language.changeToEn} alt="english flag" /></button>;
  }
  else if (language.currentLanguage === 'en') {
    return <button><img src={fr_flag} onClick={language.changeToFr} alt="drapeau français" /></button>;
  } else {
    return null
  }
}

export default withLanguage(LanguageButton);