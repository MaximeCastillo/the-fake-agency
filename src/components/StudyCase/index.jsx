import studies from 'data/studies';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LanguageContext from 'context/Language';

const StudyCase = () => {
	const { studySlug } = useParams();
	const [currentStudy, setCurrentStudy] = useState(null);
	const value = useContext(LanguageContext);

	useEffect(() => {
		setCurrentStudy(studies.find((study) => study.slug === studySlug));
	}, [studySlug])

	if (currentStudy == null) {
		return (
			<p>Oups, 404 !</p>
		)
	} else if (value.currentLanguage === 'fr') {
		return (
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div className="card" style={{ width: "50rem" }}>
					<div className="card-header" style={{ backgroundColor: '#343A40', color: 'white' }}>
						{currentStudy.title.fr}
					</div>
					<div className="card-body">
						<blockquote className="blockquote mb-0">
							<p>{currentStudy.paragraph.fr}</p>
						</blockquote>
					</div>
				</div>
			</div>
		);
	} else if (value.currentLanguage === 'en') {
		return (
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div className="card" style={{ width: "50rem" }}>
					<div className="card-header" style={{ backgroundColor: '#343A40', color: 'white' }}>
						{currentStudy.title.en}
					</div>
					<div className="card-body">
						<blockquote className="blockquote mb-0">
							<p>{currentStudy.paragraph.en}</p>
						</blockquote>
					</div>
				</div>
			</div>
		);
	}
}

export default StudyCase;