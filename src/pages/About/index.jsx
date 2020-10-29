import React from 'react';
import { injectIntl } from 'react-intl';

const About = ({ intl }) => {
    return (
        <div>
            <h1>{intl.formatMessage({ id: "about.title" })}</h1>
            <p>{intl.formatMessage({ id: "about.paragraph" })}</p>
        </div>
    );
}

export default injectIntl(About);