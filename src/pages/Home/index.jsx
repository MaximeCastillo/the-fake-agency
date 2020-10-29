import React from 'react';
import { injectIntl } from 'react-intl';

const Home = ({ intl }) => {
    return (
        <div>
            <h1>Home</h1>
            <h2>{intl.formatMessage({ id: "home.title" })}</h2>
            <p>{intl.formatMessage({ id: "home.paragraph" })}</p>
        </div>
    );
}

export default injectIntl(Home);