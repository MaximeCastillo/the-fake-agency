import React from 'react';
import { injectIntl } from 'react-intl';

const About = ({ intl }) => {
    return (
        <div>
            <h1>About</h1>
            <h2>{intl.formatMessage({ id: "about.title" })}</h2>
            <p>{intl.formatMessage({ id: "about.paragraph" })}</p>
        </div>
    );
}

export default injectIntl(About);