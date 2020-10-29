import React from 'react';
import { injectIntl } from 'react-intl';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import studies from 'data/studies';
import StudyCaseCard from 'components/StudyCaseCard';
import StudyCase from 'components/StudyCase';

const Works = ({ intl }) => {
    const studiesCards = studies.map((study) => {
        return (
            <StudyCaseCard study={study} key={study.slug} />
        );
    })

    return (
        <Router>
            <div>
                <div>
                    <h1>{intl.formatMessage({ id: "works.title" })}</h1>
                    <p>{intl.formatMessage({ id: "works.paragraph" })}</p>
                </div>
                <div>
                    {studiesCards}
                </div>
            </div>
            <Switch>
                <Route path="/works/:studySlug">
                    <StudyCase />
                </Route>
            </Switch>
        </Router>
    );
}

export default injectIntl(Works);