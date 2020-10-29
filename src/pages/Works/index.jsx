import StudyCaseCard from 'components/StudyCaseCard';
import studies from 'data/studies';
import React from 'react';
import { injectIntl } from 'react-intl';

const Works = ({ intl }) => {
    const studiesCards = studies.map((study) => {
        return (
            <StudyCaseCard study={study} key={study.slug} />
        );
    })

    return (
        <div>
            <div>
                <h1>{intl.formatMessage({ id: "works.title" })}</h1>
                <p>{intl.formatMessage({ id: "works.paragraph" })}</p>
            </div>
            <div>
                {studiesCards}
            </div>
        </div>
    );
}

export default injectIntl(Works);