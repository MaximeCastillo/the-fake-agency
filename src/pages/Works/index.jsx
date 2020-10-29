import React from 'react';
import { injectIntl } from 'react-intl';

const Works = ({ intl }) => {
    return (
        <div>
            <h1>{intl.formatMessage({ id: "works.title" })}</h1>
            <p>{intl.formatMessage({ id: "works.paragraph" })}</p>
        </div>
    );
}

export default injectIntl(Works);